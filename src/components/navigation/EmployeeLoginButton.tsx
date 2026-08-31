"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { UserCheck, ChevronDown, ExternalLink } from "lucide-react";
import { employeeLoginItem } from "@/constants/navigation";
import { openTenantPortal } from "@/utils/portal";

interface EmployeeLoginButtonProps {
    className?: string;
}

export function EmployeeLoginButton({ className = "" }: EmployeeLoginButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handlePortalClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, tenantUrl?: string) => {
        if (tenantUrl) {
            e.preventDefault();
            openTenantPortal(href, tenantUrl);
        }
        setIsOpen(false);
    };

    return (
        <div
            ref={containerRef}
            className="relative shrink-0"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className={`inline-flex items-center justify-center gap-1.5 bg-[#DCFCE7] hover:bg-[#BBF7D0] text-[#14532D] rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-emerald-300/80 group px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-semibold shrink-0 cursor-pointer ${className}`}
                aria-expanded={isOpen}
                aria-haspopup="true"
                title="Employee Login"
            >
                {/* Status Indicator Dot */}
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>

                {/* Icon */}
                <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 group-hover:text-emerald-900 transition-colors" />

                {/* Label */}
                <span className="tracking-wide text-xs sm:text-sm font-semibold whitespace-nowrap">
                    Employee Login
                </span>

                {/* Chevron Down */}
                <ChevronDown
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full right-0 sm:left-0 w-60 mt-1 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3.5 py-1.5 mb-1 border-b border-slate-100">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Employee Portals</p>
                    </div>
                    {employeeLoginItem.children?.map((child) => (
                        <Link
                            key={child.label}
                            href={child.href || "#"}
                            target={child.external ? "_blank" : undefined}
                            rel={child.external ? "noopener noreferrer" : undefined}
                            onClick={(e) => handlePortalClick(e, child.href || "#", child.tenantUrl)}
                            className="flex items-center justify-between px-4 py-2.5 hover:bg-emerald-50 transition-colors group text-slate-800 hover:text-emerald-800"
                        >
                            <div className="flex flex-col">
                                <span className="text-xs sm:text-sm font-semibold group-hover:text-emerald-800">
                                    {child.label}
                                </span>
                                {child.external && (
                                    <span className="text-[10px] text-slate-400 font-normal">
                                        External Portal
                                    </span>
                                )}
                            </div>
                            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 transition-colors" />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
