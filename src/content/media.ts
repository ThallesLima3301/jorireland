import type { ImageAsset } from "@/types/content";
import { media, type MediaKey } from "./generated/images.data";

/** Returns a typed image asset for a curated photo, with alt text supplied at the point of use. */
export function photo(key: MediaKey, alt: string): ImageAsset {
  return { ...media[key], alt };
}
