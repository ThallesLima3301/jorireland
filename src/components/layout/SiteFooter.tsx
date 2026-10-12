import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerNav } from "@/content/navigation";
import { offices, site } from "@/lib/site";

function FacebookIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z" />
    </svg>
  );
}

function LinkedInIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 13.4c0-3.1-1.66-4.54-3.87-4.54a3.34 3.34 0 0 0-3.03 1.67V8.5h-3.37V20h3.37v-5.7c0-1.5.29-2.95 2.14-2.95 1.83 0 1.86 1.71 1.86 3.05V20h3.37l-.47-6.6Z" />
    </svg>
  );
}

export function SiteFooter() {
  const main = [offices.dublin, offices.cork];
  const intl = [offices.france, offices.northAmerica];
  return (
    <footer className="bg-forest-950 text-cream-100">
      <div className="container-page grid gap-14 py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Image src="/brand/logo-light.svg" alt={site.name} width={205} height={60} unoptimized className="h-14 w-auto" />
          <p className="mt-6 max-w-sm leading-relaxed text-cream-100/75">
            Ireland&apos;s family-run Destination Management Company, welcoming groups and travellers from around the world since {site.foundedYear}.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Joe O'Reilly Ireland DMC on Facebook" className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-gold-400 hover:text-gold-400">
              <FacebookIcon className="size-5" />
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Joe O'Reilly Ireland DMC on LinkedIn" className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-gold-400 hover:text-gold-400">
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4">
          {footerNav.map((group) => (
            <nav key={group.title} aria-label={`Footer: ${group.title}`}>
              <h2 className="eyebrow text-gold-400">{group.title}</h2>
              <ul className="mt-5 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-cream-100/80 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="lg:col-span-4">
          <h2 className="eyebrow text-gold-400">Contact</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {main.map((o) => (
              <address key={o.id} className="not-italic">
                <p className="font-semibold text-white">{o.name}</p>
                <p className="mt-1 flex gap-2 text-sm text-cream-100/70">
                  <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-gold-400" />
                  {o.address?.join(", ")}
                </p>
                <p className="mt-1 flex gap-2 text-sm">
                  <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-gold-400" />
                  <a href={o.phoneHref} className="text-cream-100/85 hover:text-white">{o.phone}</a>
                </p>
                <p className="mt-1 flex gap-2 text-sm">
                  <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-gold-400" />
                  <a href={`mailto:${o.email}`} className="text-cream-100/85 hover:text-white">{o.email}</a>
                </p>
              </address>
            ))}
          </div>
          <div className="mt-6 space-y-2 border-t border-white/10 pt-6 text-sm text-cream-100/70">
            {intl.map((o) => (
              <p key={o.id}>
                <span className="font-semibold text-cream-100">{o.name}:</span>{" "}
                <a href={o.phoneHref} className="hover:text-white">{o.phone}</a> ·{" "}
                <a href={`mailto:${o.email}`} className="hover:text-white">{o.email}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-sm text-cream-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {process.env.BUILD_YEAR} {site.name}. All rights reserved.
          </p>
          <p className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
