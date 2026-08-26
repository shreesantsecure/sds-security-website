import { siteConfig } from "./navigation";

export { siteConfig };

// ─── Company Info ─────────────────────────────────────────────────────────
export const companyInfo = {
    legalName: "Sreesecure Design Solutions Pvt. Ltd.",
    shortName: "SDS Security",
    since: 2010,
    cin: "", // Company Identification Number — fill in
    gstin: "", // GST Number — fill in
    address: {
        line1: "",
        line2: "",
        city: "",
        state: "",
        pincode: "",
        country: "India",
    },
    contact: {
        phone: "",
        email: "",
        whatsapp: "",
    },
    social: {
        linkedin: "",
        twitter: "",
        facebook: "",
        instagram: "",
        youtube: "",
    },
} as const;

// ─── Route Paths ──────────────────────────────────────────────────────────
export const ROUTES = {
    HOME: "/",
    PRODUCTS: "/products",
    SERVICES: {
        ELECTRONIC_SECURITY: "/services/electronic-security",
        CYBER_SECURITY: "/services/cyber-security",
        MANPOWER_SECURITY: "/services/manpower-security",
    },
    AMC: "/amc-services",
    BLOG: "/blog",
    CAREERS: "/careers",
    ABOUT: "/about",
    CONTACT: "/contact",
    PRIVACY_POLICY: "/privacy-policy",
    TERMS: "/terms",
    REFUND_POLICY: "/refund-policy",
    SHIPPING_POLICY: "/shipping-delivery",
} as const;
