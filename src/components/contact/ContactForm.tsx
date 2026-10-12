"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useId, useState, type FormEvent, type ReactNode } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail } from "lucide-react";
import { enquiryBody, enquirySubject, validateEnquiry, type EnquiryData, type EnquiryErrors, type EnquiryOption } from "@/lib/enquiry";
import { cn } from "@/lib/cn";

/**
 * Enquiry form.
 * - If NEXT_PUBLIC_FORM_ENDPOINT is set (e.g. a Formspree, Basin or HubSpot Forms endpoint accepting JSON),
 *   the enquiry is POSTed there and success is shown only after a 2xx response.
 * - Otherwise the form opens the visitor's email app with the enquiry pre-filled, addressed to the
 *   office that handles the chosen trip type. It never claims a message was sent.
 * See docs/CONTACT-INTEGRATION.md.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Status = { kind: "idle" } | { kind: "submitting" } | { kind: "sent" } | { kind: "mail-opened"; to: string } | { kind: "error"; message: string };

interface ContactFormProps {
  types: EnquiryOption[];
  tours: EnquiryOption[];
  fallbackEmail: string;
  presetType?: string;
  presetTour?: string;
}

/** Reads ?service= and ?tour= so links such as "Request this tour" pre-select the right options. */
export function ContactFormWithPresets(props: Omit<ContactFormProps, "presetType" | "presetTour">) {
  const params = useSearchParams();
  const tour = params.get("tour");
  const service = params.get("service");
  const presetTour = props.tours.some((t) => t.value === tour) ? tour! : "";
  const presetType = props.types.some((t) => t.value === service) ? service! : presetTour ? "group-tours" : "";
  return <ContactForm key={`${presetType}|${presetTour}`} {...props} presetType={presetType} presetTour={presetTour} />;
}

export function ContactForm({ types, tours, fallbackEmail, presetType = "", presetTour = "" }: ContactFormProps) {

  const [data, setData] = useState<EnquiryData>({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    country: "",
    tripType: presetType,
    tour: presetTour,
    groupSize: "",
    travelDates: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const set = <K extends keyof EnquiryData>(key: K, value: EnquiryData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if ((form.elements.namedItem("company_website") as HTMLInputElement | null)?.value) return; // honeypot

    const found = validateEnquiry(data);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const to = types.find((t) => t.value === data.tripType)?.email ?? fallbackEmail;
    const subject = enquirySubject(data, types, tours);
    const body = enquiryBody(data, types, tours);

    if (!ENDPOINT) {
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ kind: "mail-opened", to });
      return;
    }

    setStatus({ kind: "submitting" });
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, routeTo: to, _subject: subject, message: data.message }),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setStatus({ kind: "sent" });
    } catch {
      setStatus({ kind: "error", message: `We couldn't send your enquiry just now. Please try again, or email us directly at ${to}.` });
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="rounded-3xl bg-emerald-100 p-8 text-forest-950 md:p-10">
        <CheckCircle2 aria-hidden className="size-10 text-emerald-700" />
        <h2 className="mt-4 font-display text-3xl">Thank you, {data.name.split(" ")[0]}.</h2>
        <p className="mt-3 text-lg leading-relaxed">Your enquiry has been received. A member of our team will be in touch with you by email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6" aria-describedby="form-note">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" name="name" required error={errors.name}>
          {(p) => <input {...p} type="text" autoComplete="name" value={data.name} onChange={(e) => set("name", e.target.value)} />}
        </Field>
        <Field label="Email address" name="email" required error={errors.email}>
          {(p) => <input {...p} type="email" autoComplete="email" value={data.email} onChange={(e) => set("email", e.target.value)} />}
        </Field>
        <Field label="Phone" name="phone" hint="Optional, with country code" error={errors.phone}>
          {(p) => <input {...p} type="tel" autoComplete="tel" value={data.phone} onChange={(e) => set("phone", e.target.value)} />}
        </Field>
        <Field label="Company or organisation" name="organisation" hint="Optional">
          {(p) => <input {...p} type="text" autoComplete="organization" value={data.organisation} onChange={(e) => set("organisation", e.target.value)} />}
        </Field>
        <Field label="Type of trip" name="tripType" required error={errors.tripType}>
          {(p) => (
            <select {...p} value={data.tripType} onChange={(e) => set("tripType", e.target.value)}>
              <option value="">Select a trip type</option>
              {types.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field label="Tour of interest" name="tour" hint="Optional">
          {(p) => (
            <select {...p} value={data.tour} onChange={(e) => set("tour", e.target.value)}>
              <option value="">No specific tour</option>
              {tours.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field label="Group size" name="groupSize" hint="Approximate number of travellers" error={errors.groupSize}>
          {(p) => <input {...p} type="text" inputMode="numeric" value={data.groupSize} onChange={(e) => set("groupSize", e.target.value)} />}
        </Field>
        <Field label="Preferred dates" name="travelDates" hint="e.g. May 2027, flexible">
          {(p) => <input {...p} type="text" value={data.travelDates} onChange={(e) => set("travelDates", e.target.value)} />}
        </Field>
        <Field label="Country" name="country" hint="Where your group is travelling from" className="sm:col-span-2">
          {(p) => <input {...p} type="text" autoComplete="country-name" value={data.country} onChange={(e) => set("country", e.target.value)} />}
        </Field>
        <Field label="Tell us about your plans" name="message" required error={errors.message} className="sm:col-span-2">
          {(p) => <textarea {...p} rows={6} value={data.message} onChange={(e) => set("message", e.target.value)} />}
        </Field>
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label className="flex gap-3 text-sm leading-relaxed text-ink-muted">
          <input
            type="checkbox"
            name="consent"
            checked={data.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 size-4 shrink-0 accent-emerald-600"
          />
          <span>
            I agree that Joe O&apos;Reilly Ireland DMC may use these details to respond to my enquiry, as described in the{" "}
            <Link href="/privacy-policy" className="font-semibold text-emerald-700 underline underline-offset-2">
              privacy policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && <ErrorText id="consent-error">{errors.consent}</ErrorText>}
      </div>

      {status.kind === "error" && (
        <p role="alert" className="flex gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0" />
          {status.message}
        </p>
      )}

      {status.kind === "mail-opened" && (
        <div role="status" className="flex gap-3 rounded-xl bg-emerald-100 p-4 text-sm leading-relaxed text-forest-950">
          <Mail aria-hidden className="mt-0.5 size-5 shrink-0 text-emerald-700" />
          <p>
            Your email app should now be open with your enquiry ready to send to <strong>{status.to}</strong>. Please press send in your email app to
            complete your enquiry. If nothing opened, email us directly at{" "}
            <a href={`mailto:${status.to}`} className="font-semibold underline">
              {status.to}
            </a>
            .
          </p>
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status.kind === "submitting"}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 whitespace-nowrap font-semibold text-forest-950 transition-colors hover:bg-gold-400 disabled:opacity-60"
        >
          {status.kind === "submitting" && <Loader2 aria-hidden className="size-4 animate-spin" />}
          {ENDPOINT ? "Send enquiry" : "Continue in your email app"}
        </button>
        <p id="form-note" className="text-sm text-ink-muted">
          {ENDPOINT ? "Our team will reply to you by email." : "This opens your email app with your enquiry pre-filled."}{" "}
          <span className="text-forest-900">* Required</span>
        </p>
      </div>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-forest-900/15 bg-white px-4 py-3 text-forest-950 placeholder:text-ink-muted/60 transition-colors focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 focus:outline-none aria-[invalid=true]:border-red-600";

interface FieldRenderProps {
  id: string;
  name: string;
  className: string;
  "aria-invalid": boolean;
  "aria-describedby"?: string;
  "aria-required"?: boolean;
}

function Field({
  label,
  name,
  required,
  hint,
  error,
  className,
  children,
}: {
  label: string;
  name: keyof EnquiryData;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: (props: FieldRenderProps) => ReactNode;
}) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-forest-950">
        {label}
        {required && (
          <span aria-hidden className="text-emerald-700">
            {" "}
            *
          </span>
        )}
      </label>
      {children({
        id,
        name,
        className: inputClass,
        "aria-invalid": Boolean(error),
        "aria-describedby": [hintId, errorId].filter(Boolean).join(" ") || undefined,
        "aria-required": required || undefined,
      })}
      {hint && (
        <p id={hintId} className="mt-1.5 text-xs text-ink-muted">
          {hint}
        </p>
      )}
      {error && <ErrorText id={errorId!}>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className={cn("mt-1.5 flex items-center gap-1.5 text-sm font-medium text-red-700")}>
      <AlertCircle aria-hidden className="size-4 shrink-0" />
      {children}
    </p>
  );
}
