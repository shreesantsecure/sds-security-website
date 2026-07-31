import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImage } from "@/types";

export const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "your_project_id",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01",
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_TOKEN, // Only needed for write access
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

/**
 * Generate an optimized image URL from a Sanity image reference.
 * @example urlFor(post.mainImage).width(800).url()
 */
export function urlFor(source: SanityImage) {
    return builder.image(source);
}
