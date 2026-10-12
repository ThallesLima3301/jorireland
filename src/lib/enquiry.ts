/**
 * Client-safe enquiry helpers. Deliberately free of content imports so the
 * contact form bundle stays small; options are passed in from the server page.
 */

export interface EnquiryOption {
  value: string;
  label: string;
  /** Office inbox that handles this trip type. */
  email?: string;
}

export interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  organisation: string;
  country: string;
  tripType: string;
  tour: string;
  groupSize: string;
  travelDates: string;
  message: string;
  consent: boolean;
}

export type EnquiryErrors = Partial<Record<keyof EnquiryData, string>>;

export function validateEnquiry(d: EnquiryData): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (d.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email.trim())) errors.email = "Please enter a valid email address, e.g. name@company.com.";
  if (d.phone.trim() && !/^[+()\d\s.-]{6,20}$/.test(d.phone.trim())) errors.phone = "Please enter a valid phone number, including the country code.";
  if (!d.tripType) errors.tripType = "Please choose the type of trip you are planning.";
  if (d.groupSize.trim() && !/^\d{1,5}$/.test(d.groupSize.trim())) errors.groupSize = "Please enter the group size as a number.";
  if (d.message.trim().length < 10) errors.message = "Please tell us a little about your plans (at least 10 characters).";
  if (!d.consent) errors.consent = "Please confirm that we may use your details to respond to your enquiry.";
  return errors;
}

export function enquirySubject(d: EnquiryData, types: EnquiryOption[], tours: EnquiryOption[]): string {
  const type = types.find((t) => t.value === d.tripType)?.label ?? "Travel enquiry";
  const tour = tours.find((t) => t.value === d.tour)?.label;
  return `Website enquiry: ${tour ?? type}${d.organisation.trim() ? ` – ${d.organisation.trim()}` : ""}`;
}

export function enquiryBody(d: EnquiryData, types: EnquiryOption[], tours: EnquiryOption[]): string {
  const fields: [string, string | undefined][] = [
    ["Name", d.name],
    ["Email", d.email],
    ["Phone", d.phone],
    ["Organisation", d.organisation],
    ["Country", d.country],
    ["Trip type", types.find((t) => t.value === d.tripType)?.label ?? d.tripType],
    ["Tour of interest", tours.find((t) => t.value === d.tour)?.label],
    ["Group size", d.groupSize],
    ["Preferred dates", d.travelDates],
  ];
  const lines = fields.filter(([, v]) => v && v.trim()).map(([k, v]) => `${k}: ${v!.trim()}`);
  return `${lines.join("\n")}\n\n${d.message.trim()}`;
}
