import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "@/lib/providers";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "SDS Security | Sreesecure Design Solutions Pvt. Ltd.",
        template: "%s | SDS Security",
    },
    description:
        "Sreesecure Design Solutions Pvt. Ltd. — Comprehensive security solutions including electronic security, cyber security, and manpower security.",
    keywords: [
        "SDS Security",
        "Sreesecure Design Solutions",
        "electronic security",
        "cyber security",
        "manpower security",
        "AMC services",
        "CCTV",
        "access control",
        "security systems India",
    ],
    authors: [{ name: "Sreesecure Design Solutions Pvt. Ltd." }],
    creator: "Sreesecure Design Solutions Pvt. Ltd.",
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: process.env.NEXT_PUBLIC_SITE_URL,
        siteName: "SDS Security",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} antialiased`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
