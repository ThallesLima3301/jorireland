"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { mainNav, type NavItem } from "@/content/navigation";
import { site } from "@/lib/site";
import { buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || openMenu !== null || mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500",
        solid ? "bg-cream-50/95 shadow-[0_1px_0_rgba(15,42,33,0.08)] backdrop-blur-md" : "bg-linear-to-b from-forest-950/60 to-transparent",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href="/" className="relative z-10 shrink-0" aria-label={`${site.name}, home`}>
          <Image
            src={solid ? "/brand/logo-dark.svg" : "/brand/logo-light.svg"}
            alt=""
            width={171}
            height={50}
            unoptimized
            preload
            className="h-11 w-auto md:h-12"
          />
        </Link>

        <nav ref={navRef} aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <DesktopItem
                key={item.label}
                item={item}
                solid={solid}
                open={openMenu === item.label}
                active={pathname === item.href || pathname.startsWith(`${item.href}/`)}
                onOpen={() => setOpenMenu(item.label)}
                onClose={() => setOpenMenu((cur) => (cur === item.label ? null : cur))}
                onToggle={() => setOpenMenu((cur) => (cur === item.label ? null : item.label))}
              />
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.primaryPhoneHref}
            className={cn("flex items-center gap-2 text-sm font-semibold transition-colors", solid ? "text-forest-900 hover:text-emerald-700" : "text-white/90 hover:text-white")}
          >
            <Phone aria-hidden className="size-4" />
            {site.primaryPhone}
          </a>
          <Link href="/contact" className={buttonClasses({ variant: "primary" })}>
            Plan Your Experience
          </Link>
        </div>

        <button
          type="button"
          className={cn("relative z-10 -mr-2 rounded-full p-2 lg:hidden", solid || mobileOpen ? "text-forest-950" : "text-white")}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-7" aria-hidden /> : <Menu className="size-7" aria-hidden />}
        </button>
      </div>

      <MobileMenu open={mobileOpen} onNavigate={() => setMobileOpen(false)} />
    </header>
  );
}

function DesktopItem({
  item,
  solid,
  open,
  active,
  onOpen,
  onClose,
  onToggle,
}: {
  item: NavItem;
  solid: boolean;
  open: boolean;
  active: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}) {
  const panelId = useId();
  const linkClass = cn(
    "flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors",
    solid ? "text-forest-900 hover:bg-forest-900/5" : "text-white hover:bg-white/10",
    active && (solid ? "text-emerald-700" : "text-gold-400"),
  );

  if (!item.children) {
    return (
      <li>
        <Link href={item.href} className={linkClass} aria-current={active ? "page" : undefined}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button type="button" className={linkClass} aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
        {item.label}
        <ChevronDown aria-hidden className={cn("size-4 transition-transform duration-300", open && "rotate-180")} />
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute top-full left-1/2 w-88 -translate-x-1/2 pt-3"
      >
        <ul className="rounded-2xl border border-forest-900/10 bg-cream-50 p-2 shadow-[0_24px_60px_-20px_rgba(10,28,22,0.35)]">
          {item.children.map((child) => (
            <li key={child.href + child.label}>
              <Link href={child.href} className="group block rounded-xl px-4 py-3 transition-colors hover:bg-cream-100 focus-visible:bg-cream-100">
                <span className="block font-semibold text-forest-950 group-hover:text-emerald-700">{child.label}</span>
                {child.description && <span className="mt-0.5 block text-sm text-ink-muted">{child.description}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function MobileMenu({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <div
      id="mobile-menu"
      hidden={!open}
      className="fixed inset-0 top-0 z-0 overflow-y-auto bg-cream-50 px-5 pt-24 pb-10 lg:hidden"
    >
      <nav aria-label="Mobile">
        <ul className="divide-y divide-forest-900/10 border-y border-forest-900/10">
          {mainNav.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 font-display text-2xl text-forest-950"
                    aria-expanded={expanded === item.label}
                    onClick={() => setExpanded((cur) => (cur === item.label ? null : item.label))}
                  >
                    {item.label}
                    <ChevronDown aria-hidden className={cn("size-5 transition-transform", expanded === item.label && "rotate-180")} />
                  </button>
                  <ul hidden={expanded !== item.label} className="pb-4">
                    {item.children.map((child) => (
                      <li key={child.href + child.label}>
                        <Link href={child.href} onClick={onNavigate} className="block py-2 pl-3 text-base font-medium text-forest-800">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.href} onClick={onNavigate} className="block py-4 font-display text-2xl text-forest-950">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8 flex flex-col gap-3">
        <Link href="/contact" onClick={onNavigate} className={buttonClasses({ variant: "primary", size: "lg" })}>
          Plan Your Experience
        </Link>
        <a href={site.primaryPhoneHref} className={buttonClasses({ variant: "outline", size: "lg" })}>
          <Phone aria-hidden className="size-4" /> Call {site.primaryPhone}
        </a>
      </div>
    </div>
  );
}
