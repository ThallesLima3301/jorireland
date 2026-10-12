import type { MetadataRoute } from "next";
import { tours } from "@/content/tours";
import { servicePages } from "@/content/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: "monthly" | "yearly" = "monthly", images?: string[]) => ({
    url: absoluteUrl(path),
    changeFrequency,
    priority,
    ...(images?.length ? { images: images.map((src) => absoluteUrl(src)) } : {}),
  });

  return [
    page("/", 1),
    page("/tours", 0.9),
    page("/services", 0.8),
    ...servicePages.map((s) => page(s.href, 0.8, "monthly", [s.hero.image.src])),
    ...tours.map((t) => page(`/tours/${t.slug}`, 0.7, "monthly", t.hero ? [t.hero.src] : undefined)),
    page("/about", 0.6, "yearly"),
    page("/about/history", 0.5, "yearly"),
    page("/about/joe-oreilly", 0.4, "yearly"),
    page("/contact", 0.8, "yearly"),
    page("/privacy-policy", 0.2, "yearly"),
  ];
}
