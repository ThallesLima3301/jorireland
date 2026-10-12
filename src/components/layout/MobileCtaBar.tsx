"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

/** Compact call/enquire bar shown on small screens once the visitor scrolls past the hero. */
export function MobileCtaBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <div
      data-mobile-cta
      aria-hidden={!visible}
      className={cn(
        // z-30: below the header (z-50) and the open mobile menu (z-40).
        "fixed inset-x-0 bottom-0 z-30 border-t border-forest-900/10 bg-cream-50/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-500 lg:hidden",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
    >
      <div className="flex gap-3">
        <a
          href={site.primaryPhoneHref}
          tabIndex={visible ? 0 : -1}
          className="grid size-12 shrink-0 place-items-center rounded-full border border-forest-900/20 text-forest-900"
          aria-label={`Call ${site.primaryPhone}`}
        >
          <Phone aria-hidden className="size-5" />
        </a>
        <Link
          href="/contact"
          tabIndex={visible ? 0 : -1}
          className="flex h-12 flex-1 items-center justify-center rounded-full bg-gold-500 font-semibold text-forest-950"
        >
          Request a Proposal
        </Link>
      </div>
    </div>
  );
}
