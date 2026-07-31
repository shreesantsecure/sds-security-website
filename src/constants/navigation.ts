import type { NavSection, SiteConfig } from "@/types";

// ─── Site Config ─────────────────────────────────────────────────────────

export const siteConfig: SiteConfig = {
    name: "SDS Security",
    description:
        "Sreesecure Design Solutions Pvt. Ltd. — Comprehensive security solutions including electronic security, cyber security, and manpower security.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sdssecurity.com",
};

// ─── Navigation ──────────────────────────────────────────────────────────
// AMC external login URLs are read from environment variables so they can
// be changed per-environment without a code change.

export const navigation: NavSection[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Products",
        href: "/products",
    },
    {
        label: "Services",
        href: "#",
        children: [
            {
                label: "Electronic Security",
                href: "/services/electronic-security",
            },
            {
                label: "Cyber Security",
                href: "/services/cyber-security",
            },
            {
                label: "Manpower Security",
                href: "/services/manpower-security",
            },
        ],
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "About Us",
        href: "/about",
    },
    {
        label: "Contact",
        href: "/#contact-form",
    },
    {
        label: "AMC Services",
        href: "/amc-services",
        children: [
            {
                label: "Customer Login",
                href: process.env.NEXT_PUBLIC_CUSTOMER_LOGIN_URL ?? "#",
                external: true,
            },
            {
                label: "CRM Login",
                href: process.env.NEXT_PUBLIC_CRM_LOGIN_URL ?? "#",
                external: true,
            },
            {
                label: "Tech App Login",
                href: process.env.NEXT_PUBLIC_TECH_APP_LOGIN_URL ?? "#",
                external: true,
            },
        ],
    },
];
