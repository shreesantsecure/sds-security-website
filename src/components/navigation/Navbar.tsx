"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/shared/Logo";
import { navigation } from "@/constants/navigation";
import { useAppStore } from "@/store/useAppStore";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";

export function Navbar() {
    const pathname = usePathname();
    const { isMobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } = useAppStore();
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const element = document.getElementById("contact-form");
        if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
        }
    };

    const handlePortalClick = (e: React.MouseEvent<HTMLAnchorElement>, href?: string, tenantUrl?: string) => {
        if (tenantUrl && href) {
            e.preventDefault();
            const win = window.open(tenantUrl, "_blank");
            if (win) {
                setTimeout(() => {
                    win.location.href = href;
                }, 600);
            }
        }
    };

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full bg-white transition-all duration-200 border-b border-slate-100",
                isScrolled ? "shadow-md py-2.5" : "py-3.5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <Logo />

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {navigation.map((item) => {
                            const hasChildren = item.children && item.children.length > 0;
                            const isActive =
                                item.href === "/"
                                    ? pathname === "/"
                                    : item.href && item.href !== "#"
                                        ? pathname.startsWith(item.href)
                                        : false;

                            if (hasChildren) {
                                return (
                                    <div
                                        key={item.label}
                                        className="relative"
                                        onMouseEnter={() => setActiveDropdown(item.label)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <Link
                                            href={item.href || "#"}
                                            className={cn(
                                                "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-full",
                                                isActive
                                                    ? "bg-[#0B65C6] text-white"
                                                    : "text-slate-700 hover:text-[#0B65C6]"
                                            )}
                                        >
                                            <span>{item.label}</span>
                                            <ChevronDown
                                                className={cn(
                                                    "w-4 h-4 transition-transform duration-200",
                                                    activeDropdown === item.label ? "rotate-180" : ""
                                                )}
                                            />
                                        </Link>

                                        {/* Dropdown Menu */}
                                        {activeDropdown === item.label && (
                                            <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                                                {item.children?.map((child) => (
                                                    <Link
                                                        key={child.label}
                                                        href={child.href || "#"}
                                                        target={child.external ? "_blank" : undefined}
                                                        rel={child.external ? "noopener noreferrer" : undefined}
                                                        onClick={(e) => {
                                                            if (child.tenantUrl) {
                                                                handlePortalClick(e, child.href, child.tenantUrl);
                                                            }
                                                            setActiveDropdown(null);
                                                        }}
                                                        className="flex flex-col px-4 py-2.5 hover:bg-sky-50 transition-colors group"
                                                    >
                                                        <span className="text-sm font-semibold text-slate-800 group-hover:text-[#0B65C6]">
                                                            {child.label}
                                                        </span>
                                                        {child.external && (
                                                            <span className="text-[10px] text-slate-400 font-normal">
                                                                Opens external portal ↗
                                                            </span>
                                                        )}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            const isContact = item.href === "#contact-form" || item.label === "Contact";

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href || "#"}
                                    onClick={isContact ? handleContactClick : undefined}
                                    className={cn(
                                        "px-4 py-2 text-sm font-semibold transition-all rounded-full",
                                        isActive
                                            ? "bg-[#0B65C6] text-white shadow-sm"
                                            : "text-slate-700 hover:text-[#0B65C6] hover:bg-slate-50"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Social Icons (Desktop) */}
                    <div className="hidden lg:flex items-center gap-2">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full border border-sky-600 text-[#0B65C6] flex items-center justify-center hover:bg-[#0B65C6] hover:text-white transition-all text-sm font-semibold"
                            aria-label="Facebook"
                        >
                            f
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full border border-sky-600 text-[#0B65C6] flex items-center justify-center hover:bg-[#0B65C6] hover:text-white transition-all"
                            aria-label="Instagram"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a
                            href="https://x.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full border border-sky-600 text-[#0B65C6] flex items-center justify-center hover:bg-[#0B65C6] hover:text-white transition-all text-sm font-bold"
                            aria-label="X (Twitter)"
                        >
                            ✕
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden p-2 text-slate-700 hover:text-[#0B65C6] rounded-lg"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
                    {navigation.map((item) => {
                        const isContact = item.href === "#contact-form" || item.label === "Contact";

                        return (
                            <div key={item.label}>
                                {item.children ? (
                                    <div className="space-y-1">
                                        <span className="block px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                                            {item.label}
                                        </span>
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href || "#"}
                                                target={child.external ? "_blank" : undefined}
                                                onClick={(e) => {
                                                    if (child.tenantUrl) {
                                                        handlePortalClick(e, child.href, child.tenantUrl);
                                                    }
                                                    setMobileMenuOpen(false);
                                                }}
                                                className="block px-6 py-2 text-sm font-medium text-slate-700 hover:text-[#0B65C6] hover:bg-sky-50 rounded-lg"
                                            >
                                                {child.label}
                                                {child.external && " ↗"}
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href || "#"}
                                        onClick={isContact ? handleContactClick : () => setMobileMenuOpen(false)}
                                        className={cn(
                                            "block px-3 py-2 text-sm font-semibold rounded-lg",
                                            item.href === "/" && pathname === "/"
                                                ? "bg-[#0B65C6] text-white"
                                                : "text-slate-800 hover:bg-slate-100"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        );
                    })}

                    {/* Mobile Socials */}
                    <div className="flex items-center gap-3 pt-3 border-t border-slate-100 px-3">
                        <span className="text-xs font-medium text-slate-500">Connect:</span>
                        <a href="https://facebook.com" className="text-[#0B65C6] font-bold">f</a>
                        <a href="https://instagram.com" className="text-[#0B65C6] font-bold">IG</a>
                        <a href="https://x.com" className="text-[#0B65C6] font-bold">✕</a>
                    </div>
                </div>
            )}
        </header>
    );
}
