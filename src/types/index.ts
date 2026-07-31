// ─── Navigation Types ──────────────────────────────────────────────────────

export interface NavItem {
    label: string;
    href?: string;
    /** If true, link opens in new tab (used for external AMC login URLs) */
    external?: boolean;
    children?: NavItem[];
}

export interface NavSection {
    label: string;
    href?: string;
    children?: NavItem[];
}

// ─── Site Types ────────────────────────────────────────────────────────────

export interface SiteConfig {
    name: string;
    description: string;
    url: string;
    ogImage?: string;
    links?: {
        twitter?: string;
        linkedin?: string;
    };
}

// ─── Blog / CMS Types ────────────────────────────────────────────────────

export interface BlogPost {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt?: string;
    body?: unknown; // Portable Text
    mainImage?: SanityImage;
    publishedAt: string;
    categories?: string[];
    author?: Author;
}

export interface Author {
    _id: string;
    name: string;
    image?: SanityImage;
    bio?: string;
}

export interface SanityImage {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
    alt?: string;
}

// ─── Form Types ───────────────────────────────────────────────────────────

export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    subject: string;
    message: string;
}

// ─── Common ───────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
}

export type PageProps<
    TParams = Record<string, string>,
    TSearchParams = Record<string, string | string[] | undefined>,
> = {
    params: Promise<TParams>;
    searchParams: Promise<TSearchParams>;
};
