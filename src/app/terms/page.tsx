import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Terms & Conditions | SDS Security",
    description: "Terms and Conditions for Sreesecure Design Solutions Pvt. Ltd.",
};

const sections = [
    { id: "intro", label: "Introduction" },
    { id: "s1", label: "1. Acceptance of Terms" },
    { id: "s2", label: "2. Description of Service" },
    { id: "s3", label: "3. User Accounts and Registration" },
    { id: "s7", label: "7. Returns and Refunds" },
    { id: "s17", label: "17. Contact Information" },
];

export default function TermsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                {/* Hero Banner */}
                <div className="bg-gradient-to-br from-[#0A2E5C] via-[#082042] to-[#041229] text-white py-20 px-4">
                    <div className="max-w-7xl mx-auto space-y-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight">
                            Terms &amp; Conditions
                        </h1>
                        <p className="text-slate-300 text-base max-w-2xl leading-relaxed font-normal">
                            These Terms and Conditions govern your use of the Sreesecure Design Solutions Pvt. Ltd. website and services.
                        </p>
                        <p className="text-sky-400 text-sm">Effective: July 31, 2026</p>
                    </div>
                </div>

                {/* Body: Sidebar + Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Sticky Sidebar ToC */}
                        <aside className="hidden lg:block lg:w-72 shrink-0">
                            <div className="sticky top-24 bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-2">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Table of Contents</p>
                                {sections.map((s) => (
                                    <a
                                        key={s.id}
                                        href={`#${s.id}`}
                                        className="block text-sm text-slate-600 hover:text-[#0B65C6] py-1 pl-3 border-l-2 border-transparent hover:border-[#0B65C6] transition-all duration-150 leading-snug"
                                    >
                                        {s.label}
                                    </a>
                                ))}
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="flex-1 space-y-12 text-slate-700 text-[15px] leading-relaxed min-w-0">

                            {/* Intro */}
                            <section id="intro" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-900">Welcome to Sreesecure Design Solutions Pvt. Ltd.</h2>
                                <p>
                                    These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these Terms. If you disagree with any part of these terms, please do not use our services.
                                </p>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 1 */}
                            <section id="s1" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
                                <p>
                                    By accessing and using the Sreesecure website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                                </p>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 2 */}
                            <section id="s2" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">2. Description of Service</h2>
                                <p>
                                    Sreesecure, as India&apos;s most trusted force in total security, provides comprehensive electronic, cyber, and manpower security solutions. Our services include:
                                </p>
                                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                                    <ul className="space-y-3 text-slate-600">
                                        {[
                                            "Next-generation electronic surveillance systems and security cameras",
                                            "AI-led cybersecurity solutions and digital protection",
                                            "Access control systems and biometric security devices",
                                            "Alarm systems and 24/7 monitoring equipment",
                                            "Professional security installation and support services",
                                            "Technical consultation and comprehensive security assessments",
                                            "Highly trained manpower and security personnel services",
                                            "After-sales support and ongoing maintenance services",
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#0B65C6] shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 3 */}
                            <section id="s3" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">3. User Accounts and Registration</h2>
                                <p>
                                    To access certain features of our security platform, you may be required to create an account. You agree to:
                                </p>
                                <ul className="space-y-2 pl-5 list-disc text-slate-600">
                                    <li>Provide accurate, current, and complete information during registration</li>
                                    <li>Maintain and update your account information to keep it accurate and current</li>
                                    <li>Maintain the security of your account credentials and security preferences</li>
                                    <li>Accept responsibility for all activities that occur under your account</li>
                                    <li>Notify our security support team immediately of any unauthorized use of your account</li>
                                    <li>Be at least 18 years old or have parental consent to use our security services</li>
                                    <li>Comply with all security protocols and access controls</li>
                                </ul>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 7 */}
                            <section id="s7" className="scroll-mt-28 space-y-5">
                                <h2 className="text-xl font-bold text-slate-900">7. Returns and Refunds</h2>
                                <p>Our return policy is designed to ensure customer satisfaction while maintaining security standards:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "Return Window", desc: "7 days from date of delivery for most security products" },
                                        { title: "Condition", desc: "Security products must be unused, in original packaging" },
                                        { title: "Return Process", desc: "Contact our security support team to initiate returns" },
                                        { title: "Refunds", desc: "Processed within 7-14 business days after receiving returned items" },
                                    ].map((item) => (
                                        <div key={item.title} className="bg-[#F0F7FF] border border-sky-100 rounded-xl p-5 space-y-1">
                                            <p className="text-xs font-bold text-[#0B65C6] uppercase tracking-wider">{item.title}</p>
                                            <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 17 */}
                            <section id="s17" className="scroll-mt-28 space-y-6">
                                <h2 className="text-xl font-bold text-slate-900">17. Contact Information</h2>
                                <p>If you have any questions about these Terms and Conditions, please contact our security support team:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { label: "Email", value: "office@sreesecure.com", href: "mailto:office@sreesecure.com" },
                                        { label: "Phone", value: "+91 9900097078", href: "tel:+919900097078" },
                                        { label: "Hours", value: "Mon - Fri, 9 AM - 6 PM IST", href: null },
                                        { label: "Address", value: "Survey no 111/2 Investment layout 3rd cross road near muneeswaran temple, tech city layout, neeladiri nagar, Electronic city phase 1, Bangalore 560100", href: null },
                                    ].map((item) => (
                                        <div key={item.label} className="bg-[#F0F7FF] border border-sky-100 rounded-xl p-5 space-y-1">
                                            <p className="text-xs font-bold text-[#0B65C6] uppercase tracking-wider">{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} className="text-slate-800 hover:text-[#0B65C6] transition-colors font-medium text-sm">{item.value}</a>
                                            ) : (
                                                <p className="text-slate-800 font-medium text-sm leading-relaxed">{item.value}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Closing note */}
                            <div className="bg-gradient-to-br from-[#0A2E5C]/5 to-sky-50 border border-sky-100 rounded-2xl p-6 space-y-3">
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    These Terms and Conditions are effective as of 7/31/2026 and supersede all prior versions.
                                </p>
                                <p className="text-slate-800 text-sm font-semibold leading-relaxed">
                                    As India&apos;s most trusted force in total security, Sreesecure Design Solutions Pvt. Ltd. is committed to protecting what matters most — your security and peace of mind.
                                </p>
                                <Link href="/" className="inline-block mt-2 text-sm text-[#0B65C6] hover:underline font-medium">← Back to Home</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
