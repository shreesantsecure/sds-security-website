"use client";

import { UserCheck, ExternalLink } from "lucide-react";

export function CustomerLoginButton() {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const tenantUrl = "https://servewell.me/sreesecuredesignsolutions/";
        const targetUrl = "https://servewell.me/web/home/#cust_login-section";

        const win = window.open(tenantUrl, "_blank");
        if (win) {
            setTimeout(() => {
                win.location.href = targetUrl;
            }, 600);
        }
    };

    return (
        <a
            href="https://servewell.me/web/home/#cust_login-section"
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center bg-[#0B65C6] hover:bg-[#0952a3] text-white rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-white/20 group w-12 h-12 sm:w-auto sm:h-auto sm:px-4 sm:py-2.5"
            aria-label="Customer Login Portal"
            title="Customer Login"
        >
            {/* Status Indicator Dot */}
            <span className="relative flex h-2 w-2 mr-1 sm:mr-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>

            {/* Icon */}
            <UserCheck className="w-5 h-5 sm:w-4 sm:h-4 text-sky-100 group-hover:text-white transition-colors" />

            {/* Desktop Label */}
            <span className="hidden sm:inline tracking-wide text-sm font-semibold">
                Customer Login
            </span>

            {/* Desktop External Link Icon */}
            <ExternalLink className="hidden sm:inline w-3.5 h-3.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </a>
    );
}
