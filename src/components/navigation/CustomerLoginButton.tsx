"use client";

import { UserCheck, ExternalLink } from "lucide-react";
import { openTenantPortal } from "@/utils/portal";

interface CustomerLoginButtonProps {
    className?: string;
}

export function CustomerLoginButton({ className = "" }: CustomerLoginButtonProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        openTenantPortal("https://servewell.me/web/home/#cust_login-section");
    };

    return (
        <a
            href="https://servewell.me/web/home/#cust_login-section"
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-1.5 bg-[#0B65C6] hover:bg-[#0952a3] text-white rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-white/20 group px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-semibold shrink-0 ${className}`}
            aria-label="Customer Login Portal"
            title="Customer Login"
        >
            {/* Status Indicator Dot */}
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>

            {/* Icon */}
            <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-100 group-hover:text-white transition-colors" />

            {/* Label (Visible on both mobile & desktop) */}
            <span className="tracking-wide text-xs sm:text-sm font-semibold whitespace-nowrap">
                Customer Login
            </span>

            {/* External Link Icon */}
            <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </a>
    );
}

