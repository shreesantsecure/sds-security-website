import { groq } from "next-sanity";

// ─── Blog Queries ─────────────────────────────────────────────────────────

/** Fetch all published blog posts (list view) */
export const ALL_POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    categories,
    "author": author->{ _id, name, image }
  }
`;

/** Fetch a single blog post by slug */
export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    categories,
    "author": author->{ _id, name, image, bio }
  }
`;
