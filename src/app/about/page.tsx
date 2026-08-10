import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
    ShieldCheck,
    ArrowRight,
    Building2,
    Cpu,
    Lock,
    Users,
    CheckCircle2,
    Target,
    Eye,
    Globe,
    Award
} from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | SDS Security Solutions",
    description: "Leading Bangalore-based security solutions provider offering electronic, cyber, and manpower security services across India.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="relative overflow-hidden pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20 bg-white">
                    {/* Realistic Sharp Isometric CCTV Security Camera Icon at Very Edge of Screen */}
                    <div className="hidden lg:block absolute -right-24 xl:-right-28 top-1/2 -translate-y-1/2 w-[440px] xl:w-[520px] pointer-events-none opacity-90 z-0">
                        <svg
                            viewBox="0 0 600 450"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-auto drop-shadow-xl"
                        >
                            <defs>
                                {/* Realistic Metallic & Glass Gradients */}
                                <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#FFFFFF" />
                                    <stop offset="45%" stopColor="#F1F5F9" />
                                    <stop offset="70%" stopColor="#E2E8F0" />
                                    <stop offset="100%" stopColor="#CBD5E1" />
                                </linearGradient>

                                <linearGradient id="visorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#F8FAFC" />
                                    <stop offset="60%" stopColor="#E2E8F0" />
                                    <stop offset="100%" stopColor="#94A3B8" />
                                </linearGradient>

                                <linearGradient id="armGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#E2E8F0" />
                                    <stop offset="50%" stopColor="#CBD5E1" />
                                    <stop offset="100%" stopColor="#94A3B8" />
                                </linearGradient>

                                <linearGradient id="lensGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#1E293B" />
                                    <stop offset="40%" stopColor="#0F172A" />
                                    <stop offset="75%" stopColor="#0B65C6" />
                                    <stop offset="100%" stopColor="#0284C7" />
                                </linearGradient>

                                <linearGradient id="rimGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#94A3B8" />
                                    <stop offset="50%" stopColor="#475569" />
                                    <stop offset="100%" stopColor="#1E293B" />
                                </linearGradient>

                                <radialGradient id="irGlow" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                                    <stop offset="60%" stopColor="#0284C7" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#0B65C6" stopOpacity="0" />
                                </radialGradient>

                                <filter id="softDropShadow" x="-10%" y="-10%" width="130%" height="130%">
                                    <feDropShadow dx="-6" dy="12" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.12" />
                                </filter>
                            </defs>

                            <g filter="url(#softDropShadow)">
                                {/* Wall Base Plate */}
                                <path
                                    d="M 520 280 L 550 260 L 550 180 L 520 200 Z"
                                    fill="url(#armGradient)"
                                    stroke="#CBD5E1"
                                    strokeWidth="2"
                                />
                                <ellipse cx="535" cy="230" rx="14" ry="38" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />

                                {/* Articulated Wall Bracket Arm */}
                                <path
                                    d="M 535 230 Q 510 230 460 210 Q 420 195 390 220 L 370 235 L 390 255 Q 430 230 470 245 Q 510 260 535 230 Z"
                                    fill="url(#armGradient)"
                                    stroke="#94A3B8"
                                    strokeWidth="2"
                                />

                                {/* Joint Swivel Spheres */}
                                <ellipse cx="380" cy="245" rx="18" ry="24" fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
                                <ellipse cx="380" cy="245" rx="12" ry="16" fill="#94A3B8" />

                                {/* Main Camera Cylinder Group (Rotated Isometric Angle) */}
                                <g transform="rotate(-18 300 200)">
                                    {/* Rear Cap */}
                                    <ellipse cx="390" cy="180" rx="22" ry="50" fill="#94A3B8" stroke="#64748B" strokeWidth="2" />
                                    <ellipse cx="385" cy="180" rx="18" ry="44" fill="#CBD5E1" />

                                    {/* Camera Main Body Tube */}
                                    <path
                                        d="M 170 130 L 385 136 Q 390 180 385 224 L 170 230 Z"
                                        fill="url(#bodyGradient)"
                                        stroke="#CBD5E1"
                                        strokeWidth="2"
                                    />

                                    {/* Bottom Mounting Plate Feature */}
                                    <path d="M 240 228 L 330 226 L 325 240 L 245 242 Z" fill="#94A3B8" />

                                    {/* Sun Shade / Top Visor Hood */}
                                    <path
                                        d="M 125 105 L 360 120 C 375 120 385 128 385 138 L 375 148 L 135 130 C 120 130 115 118 125 105 Z"
                                        fill="url(#visorGradient)"
                                        stroke="#CBD5E1"
                                        strokeWidth="2"
                                    />
                                    {/* Visor Shadow Line */}
                                    <path d="M 135 130 L 375 148" stroke="#64748B" strokeWidth="2" opacity="0.4" />

                                    {/* Outer Front Bezel Rim */}
                                    <ellipse cx="170" cy="180" rx="24" ry="50" fill="url(#rimGloss)" stroke="#475569" strokeWidth="3" />

                                    {/* Front Glass Surface */}
                                    <ellipse cx="170" cy="180" rx="18" ry="42" fill="url(#lensGlass)" stroke="#0B65C6" strokeWidth="2" />

                                    {/* IR LED Array Rings */}
                                    <ellipse cx="170" cy="180" rx="14" ry="34" fill="none" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 4" opacity="0.8" />

                                    {/* Core Camera Lens Glass */}
                                    <ellipse cx="170" cy="180" rx="9" ry="22" fill="#020617" stroke="#38BDF8" strokeWidth="2" />
                                    <circle cx="170" cy="180" r="10" fill="url(#irGlow)" />
                                    <circle cx="170" cy="180" r="4" fill="#0284C7" />
                                    <ellipse cx="167" cy="173" rx="3" ry="6" fill="#FFFFFF" opacity="0.8" />

                                    {/* Status Power Indicator Light */}
                                    <circle cx="195" cy="142" r="3" fill="#10B981" />
                                    <circle cx="195" cy="142" r="5" fill="#10B981" opacity="0.4" className="animate-ping" />

                                    {/* Side Branding & Metallic Line Accents */}
                                    <line x1="220" y1="135" x2="220" y2="228" stroke="#CBD5E1" strokeWidth="2" />
                                    <line x1="320" y1="138" x2="320" y2="226" stroke="#CBD5E1" strokeWidth="2" />

                                    <rect x="240" y="165" width="60" height="14" rx="3" fill="#E2E8F0" opacity="0.8" />
                                    <text x="248" y="176" fill="#0B65C6" fontSize="9" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
                                        SDS-4K
                                    </text>
                                </g>
                            </g>
                        </svg>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="relative flex flex-col items-center justify-center text-center py-4 sm:py-8">
                            {/* Main Heading with Thin Typography */}
                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight max-w-3xl leading-[1.2]">
                                Electronic, Cyber &amp; Manpower <br />
                                Security Experts
                            </h1>

                            <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-xl font-normal leading-relaxed">
                                Leading Bangalore-based security solutions provider offering electronic, cyber, and manpower security.
                            </p>

                            <div className="mt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-7 py-3 bg-[#0B65C6] hover:bg-blue-700 text-white font-medium text-sm rounded-md shadow-sm transition-colors duration-200"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OVERVIEW & COMPANY INTRODUCTION */}
                <section className="py-16 lg:py-24 bg-white border-y border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                            {/* Text Column */}
                            <div className="lg:col-span-6 space-y-6">
                                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#0B65C6] uppercase bg-blue-50 px-3 py-1 rounded-md">
                                    <Building2 className="w-3.5 h-3.5" />
                                    <span>Who We Are</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                                    Next-Generation Protection Built on Innovation & Trust
                                </h2>
                                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                                    <strong className="text-slate-900 font-semibold">Sreesecure Design Solutions Pvt. Ltd.</strong> is a next-generation security company offering electronic security, cybersecurity, and manpower security services across India. We blend technology, strategy, and experience to build end-to-end protection systems that are intelligent, responsive, and future-ready.
                                </p>

                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="flex items-center gap-2 text-[#0B65C6] font-bold text-2xl">
                                            <Globe className="w-6 h-6" />
                                            <span>Pan-India</span>
                                        </div>
                                        <p className="text-xs text-slate-500 font-medium mt-1">Corporate Coverage</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="flex items-center gap-2 text-[#0B65C6] font-bold text-2xl">
                                            <Award className="w-6 h-6" />
                                            <span>500+</span>
                                        </div>
                                        <p className="text-xs text-slate-500 font-medium mt-1">Corporate Projects</p>
                                    </div>
                                </div>
                            </div>

                            {/* Image Grid Column */}
                            <div className="lg:col-span-6 relative">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 group">
                                    <Image
                                        src="/images/conf_room.png"
                                        alt="SDS Conference Room"
                                        width={800}
                                        height={550}
                                        className="w-full h-[380px] sm:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-[#0B65C6] flex items-center justify-center text-white font-bold text-lg shadow-sm">
                                                SDS
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-900">Sreesecure Design Solutions</h4>
                                                <p className="text-xs text-slate-500">Corporate & Enterprise Protection</p>
                                            </div>
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                                            Active Nationwide
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MISSION SECTION */}
                <section className="py-16 lg:py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Visual Card */}
                            <div className="lg:col-span-5 order-2 lg:order-1">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white p-6 sm:p-8">
                                    <div className="w-14 h-14 rounded-xl bg-blue-100 text-[#0B65C6] flex items-center justify-center mb-6">
                                        <Target className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Proactive Protection Model</h3>
                                    <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                                            <span>Next-Gen Electronic Surveillance infrastructure</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                                            <span>AI-led threat intelligence & cybersecurity defense</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                                            <span>Highly trained, vigilant manpower security force</span>
                                        </div>
                                    </div>
                                    <div className="mt-8 p-4 rounded-xl bg-blue-600 text-white font-semibold text-center text-sm shadow-md">
                                        &ldquo;We don&apos;t just protect. We predict. We prevent. We prepare.&rdquo;
                                    </div>
                                </div>
                            </div>

                            {/* Mission Content */}
                            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#0B65C6] uppercase bg-blue-50 px-3 py-1 rounded-md">
                                    <Target className="w-3.5 h-3.5" />
                                    <span>Driven By Purpose</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Mission</h2>
                                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                                    To deliver powerful, proactive, and personalized security — built on innovation, driven by people. At Sreesecure, we exist to protect what matters most — by combining Next-gen electronic surveillance, AI-led cybersecurity, highly trained manpower. We bridge the gap between outdated protection and future-ready defense.
                                </p>
                                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-slate-800 font-medium text-base leading-relaxed">
                                    <span className="text-[#0B65C6] font-bold">We don’t just protect.</span> We predict. We prevent. We prepare.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* VISION SECTION */}
                <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Vision Content */}
                            <div className="lg:col-span-7 space-y-6">
                                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#0B65C6] uppercase bg-blue-50 px-3 py-1 rounded-md">
                                    <Eye className="w-3.5 h-3.5" />
                                    <span>Future Direction</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Vision</h2>
                                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                                    To be India’s most trusted force in total security — physical and digital, human and intelligent.
                                </p>
                                <p className="text-base text-slate-600 leading-relaxed">
                                    We’re building a world where every home, business, and system feels safe — not by chance, but by intentional design.
                                </p>
                                <p className="text-base text-slate-600 leading-relaxed">
                                    With a foundation of trust, technology, and trained professionals, we don’t just guard spaces, we elevate peace of mind across every layer of life. Because true security doesn’t just watch. It understands. It adapts. It protects.
                                </p>
                            </div>

                            {/* Vision Highlight Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-gradient-to-br from-[#0B65C6] to-blue-900 text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6">
                                        <Eye className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Total Security Architecture</h3>
                                    <p className="text-blue-100 text-sm leading-relaxed mb-6">
                                        Combining physical vigilance with digital intelligence to create seamless, bulletproof security ecosystems for modern enterprises.
                                    </p>
                                    <ul className="space-y-3 text-xs text-blue-100 font-medium">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                                            Physical & Digital Synergy
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                                            Human & AI Intelligence
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                                            Intentional Security Design
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COMPREHENSIVE SECURITY SOLUTIONS */}
                <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/60">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                                Explore Our Comprehensive Security Solutions
                            </h2>
                            <p className="mt-4 text-base sm:text-lg text-slate-600">
                                We provide integrated electronic, cyber, and manpower security to protect your business, assets, and people
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1: Electronic Security */}
                            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B65C6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Electronic Security</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        CCTV, Access Control, and Alarm Systems for surveillance and protection
                                    </p>
                                </div>
                                <Link
                                    href="/services#electronic-security"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B65C6] hover:text-blue-700"
                                >
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Card 2: Cyber Security */}
                            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B65C6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Lock className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Cyber Security</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        Network protection and risk management to safeguard digital assets
                                    </p>
                                </div>
                                <Link
                                    href="/services#cyber-security"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B65C6] hover:text-blue-700"
                                >
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Card 3: Manpower Security */}
                            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B65C6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Manpower Security</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        Trained security personnel for on-site safety and vigilance
                                    </p>
                                </div>
                                <Link
                                    href="/services#manpower-security"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B65C6] hover:text-blue-700"
                                >
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BOTTOM CALL TO ACTION */}
                <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            Let&apos;s protect what matters most
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-slate-300">
                            Connect with us today for a tailored security solution.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B65C6] hover:bg-blue-600 text-white font-semibold text-base rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
                            >
                                <span>Contact Us</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
