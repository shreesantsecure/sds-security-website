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
        href: "/services",
        children: [
            {
                label: "Electronic Security",
                href: "/services#electronic-security",
            },
            {
                label: "Cyber Security",
                href: "/services#cyber-security",
            },
            {
                label: "Manpower Security",
                href: "/services#manpower-security",
            },
            {
                label: "Brochure",
                href: "/documents/SDS+PROFILE.pdf",
                external: true,
            },
        ],
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "Careers",
        href: "/careers",
    },
    {
        label: "About Us",
        href: "/about",
    },
    {
        label: "Contact",
        href: "#contact-form",
    },
    {
        label: "Employee Login",
        href: "#",
        children: [
            {
                label: "CRM Login",
                href: "https://servewell.me/crm/login/",
                external: true,
                tenantUrl: "https://servewell.me/sreesecuredesignsolutions/",
            },
            {
                label: "Tech App Login",
                href: "https://servewell.me/app/login/",
                external: true,
                tenantUrl: "https://servewell.me/sreesecuredesignsolutions/",
            },
            {
                label: "Salary Box",
                href: "https://web.salarybox.in/",
                external: true,
            },
            {
                label: "Smart Payroll",
                href: "https://payroll.razorpay.com/login?redirect=%2Fdashboard",
                external: true,
            },
        ],
    },
];
