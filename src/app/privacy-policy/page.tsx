import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy | SDS Security",
    description:
        "Privacy Policy for Sreesecure Design Solutions Pvt. Ltd. — Learn how we collect, use, and protect your personal information.",
};

const sections = [
    { id: "intro", label: "Introduction" },
    { id: "s1", label: "1. Information We Collect" },
    { id: "s2", label: "2. How We Use Your Information" },
    { id: "s3", label: "3. Payment Processing & Razorpay" },
    { id: "s4", label: "4. Information Sharing & Disclosure" },
    { id: "s5", label: "5. Data Security" },
    { id: "s6", label: "6. Your Rights and Choices" },
    { id: "s7", label: "7. Cookies & Tracking Technologies" },
    { id: "s8", label: "8. Data Retention" },
    { id: "s9", label: "9. International Data Transfers" },
    { id: "s10", label: "10. Children's Privacy" },
    { id: "s11", label: "11. Changes to This Policy" },
    { id: "s12", label: "12. Contact Us" },
];

export default function PrivacyPolicyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                {/* Hero Banner */}
                <div className="bg-gradient-to-br from-[#0A2E5C] via-[#082042] to-[#041229] text-white py-20 px-4">
                    <div className="max-w-7xl mx-auto space-y-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-slate-300 text-base max-w-2xl leading-relaxed font-normal">
                            Sreesecure Design Solutions Pvt. Ltd. is committed to protecting your privacy. This document explains how we handle your personal information.
                        </p>
                        <p className="text-sky-400 text-sm">Last updated: July 2026</p>
                    </div>
                </div>

                {/* Body: Sidebar + Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* ─── Sticky Sidebar Table of Contents ─── */}
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

                        {/* ─── Main Content ─── */}
                        <div className="flex-1 space-y-12 text-slate-700 text-[15px] leading-relaxed min-w-0">

                            {/* Intro */}
                            <section id="intro" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-900">Welcome to Sreesecure Design Solutions Pvt. Ltd.</h2>
                                <p>
                                    Sreesecure Design Solutions Pvt. Ltd. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or make purchases from our e-commerce platform specializing in electronic, cyber, and manpower security solutions.
                                </p>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 1 */}
                            <section id="s1" className="scroll-mt-28 space-y-6">
                                <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>

                                <div className="space-y-3">
                                    <h3 className="text-base font-semibold text-[#0B65C6]">1.1 Personal Information</h3>
                                    <p>As India&apos;s most trusted force in total security, we may collect personal information that you voluntarily provide to us when you:</p>
                                    <ul className="space-y-2 pl-5 list-disc text-slate-600">
                                        <li>Create an account or register on our platform</li>
                                        <li>Make a purchase or place an order for security solutions</li>
                                        <li>Subscribe to our newsletter or security updates</li>
                                        <li>Contact our customer support team for security consultations</li>
                                        <li>Participate in security assessments or surveys</li>
                                        <li>Apply for security services or business partnerships</li>
                                        <li>Request quotes for electronic, cyber, or manpower security solutions</li>
                                    </ul>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-base font-semibold text-[#0B65C6]">1.2 Automatically Collected Information</h3>
                                    <p>When you visit our website or use our security services, we automatically collect certain information, including:</p>
                                    <ul className="space-y-2 pl-5 list-disc text-slate-600">
                                        <li>Device information (IP address, browser type, operating system)</li>
                                        <li>Usage data (pages visited, time spent, links clicked)</li>
                                        <li>Cookies and similar tracking technologies</li>
                                        <li>Location data (with your consent, for security service delivery)</li>
                                        <li>Analytics and performance data to improve our security solutions</li>
                                        <li>Security-related interaction data to enhance our protection services</li>
                                    </ul>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 2 */}
                            <section id="s2" className="scroll-mt-28 space-y-5">
                                <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
                                <p>We use the collected information to deliver powerful, proactive, and personalized security solutions:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "Order Processing", desc: "To process and fulfill your security solution orders, including payment processing through Razorpay" },
                                        { title: "Security Consultations", desc: "To provide expert security advice and respond to your security inquiries" },
                                        { title: "Account Management", desc: "To manage your account and provide personalized security services" },
                                        { title: "Security Updates", desc: "To send security alerts, updates, and maintenance notifications (with your consent)" },
                                        { title: "Platform Security", desc: "To protect against fraud and ensure our platform security" },
                                        { title: "Service Improvement", desc: "To improve our electronic, cyber, and manpower security solutions" },
                                        { title: "Installation Services", desc: "To coordinate security system installation and maintenance" },
                                        { title: "Legal Compliance", desc: "To comply with applicable laws and security regulations" },
                                    ].map((item) => (
                                        <div key={item.title} className="bg-[#F0F7FF] border border-sky-100 rounded-xl p-4 space-y-1">
                                            <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 3 */}
                            <section id="s3" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">3. Payment Processing and Razorpay</h2>
                                <p>We use Razorpay as our secure payment processor to handle your payment information for security solution purchases. When you make a purchase:</p>
                                <ul className="space-y-2 pl-5 list-disc text-slate-600">
                                    <li>Payment information is encrypted and transmitted directly to Razorpay</li>
                                    <li>We do not store your complete payment card details on our servers</li>
                                    <li>Razorpay processes payments in accordance with PCI DSS standards</li>
                                    <li>We only receive confirmation of successful payments and basic transaction details</li>
                                    <li>Razorpay&apos;s privacy policy applies to the information they collect and process</li>
                                    <li>All transactions are secured with bank-level encryption for your protection</li>
                                </ul>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 4 */}
                            <section id="s4" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">4. Information Sharing and Disclosure</h2>
                                <p>We do not sell, trade, or rent your personal information to third parties. As your trusted security partner, we may share your information in the following circumstances:</p>
                                <ul className="space-y-2 pl-5 list-disc text-slate-600">
                                    <li><strong className="text-slate-700">Security Service Providers</strong> — With trusted third-party service providers who assist us in delivering security solutions</li>
                                    <li><strong className="text-slate-700">Payment Processing</strong> — With Razorpay for secure payment processing</li>
                                    <li><strong className="text-slate-700">Legal Requirements</strong> — When required by law or to protect your security and our rights</li>
                                    <li><strong className="text-slate-700">Business Transfers</strong> — In connection with a merger, acquisition, or sale of assets</li>
                                    <li><strong className="text-slate-700">Security Emergencies</strong> — In emergency situations where immediate action is required for your safety</li>
                                    <li><strong className="text-slate-700">Consent</strong> — With your explicit consent for specific security-related purposes</li>
                                </ul>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 5 */}
                            <section id="s5" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">5. Data Security</h2>
                                <p>As security experts, we implement the highest standards of technical and organizational measures to protect your personal information:</p>
                                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                                    <ul className="space-y-3 text-slate-600">
                                        {[
                                            "Bank-level SSL encryption for data transmission",
                                            "Secure servers and data centers with 24/7 monitoring",
                                            "Regular security audits and threat assessments",
                                            "Multi-factor authentication and access controls",
                                            "Employee training on data protection and security protocols",
                                            "Real-time threat detection and response systems",
                                            "Compliance with international security standards",
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

                            {/* Section 6 */}
                            <section id="s6" className="scroll-mt-28 space-y-5">
                                <h2 className="text-xl font-bold text-slate-900">6. Your Rights and Choices</h2>
                                <p>As your trusted security partner, you have the following rights regarding your personal information:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "Access", desc: "Request access to your personal information and security preferences" },
                                        { title: "Correction", desc: "Request correction of inaccurate information" },
                                        { title: "Deletion", desc: "Request deletion of your personal information (subject to security service requirements)" },
                                        { title: "Portability", desc: "Request a copy of your data in a portable format" },
                                        { title: "Opt-out", desc: "Unsubscribe from security updates and marketing communications" },
                                        { title: "Consent Withdrawal", desc: "Withdraw consent for data processing" },
                                        { title: "Security Preferences", desc: "Update your security service preferences and requirements" },
                                    ].map((item) => (
                                        <div key={item.title} className="flex gap-3 items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <div className="mt-1 w-2 h-2 rounded-full bg-[#0B65C6] shrink-0" />
                                            <div>
                                                <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                                                <p className="text-slate-600 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 7 */}
                            <section id="s7" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">7. Cookies and Tracking Technologies</h2>
                                <p>We use cookies and similar technologies to enhance your security solution browsing experience:</p>
                                <ul className="space-y-2 pl-5 list-disc text-slate-600">
                                    <li><strong className="text-slate-700">Essential Cookies</strong> — Required for basic website functionality and security</li>
                                    <li><strong className="text-slate-700">Analytics Cookies</strong> — Help us understand how visitors use our site to improve security solutions</li>
                                    <li><strong className="text-slate-700">Security Cookies</strong> — Used for authentication and security verification</li>
                                    <li><strong className="text-slate-700">Preference Cookies</strong> — Remember your security preferences and settings</li>
                                    <li><strong className="text-slate-700">Service Cookies</strong> — Track security service interactions and support requests</li>
                                </ul>
                                <p className="text-slate-600">You can control cookie settings through your browser preferences while maintaining essential security functionality.</p>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 8 */}
                            <section id="s8" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">8. Data Retention</h2>
                                <p>We retain your personal information for as long as necessary to:</p>
                                <ul className="space-y-2 pl-5 list-disc text-slate-600">
                                    <li>Provide our security services and fulfill security solution orders</li>
                                    <li>Maintain security system records and service history</li>
                                    <li>Comply with legal obligations and security regulations</li>
                                    <li>Resolve disputes and enforce security service agreements</li>
                                    <li>Maintain business records for security audit purposes</li>
                                    <li>Provide ongoing security support and maintenance</li>
                                </ul>
                                <p className="text-slate-600">When we no longer need your information, we will securely delete or anonymize it in accordance with security best practices.</p>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 9 */}
                            <section id="s9" className="scroll-mt-28 space-y-3">
                                <h2 className="text-xl font-bold text-slate-900">9. International Data Transfers</h2>
                                <p>Your information may be transferred to and processed in countries other than your own for security service delivery. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws and international security standards.</p>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 10 */}
                            <section id="s10" className="scroll-mt-28 space-y-3">
                                <h2 className="text-xl font-bold text-slate-900">10. Children&apos;s Privacy</h2>
                                <p>Our security services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact our security support team immediately.</p>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 11 */}
                            <section id="s11" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">11. Changes to This Privacy Policy</h2>
                                <p>We may update this Privacy Policy from time to time to reflect changes in our security practices. We will notify you of any material changes by:</p>
                                <ul className="space-y-2 pl-5 list-disc text-slate-600">
                                    <li>Posting the updated policy on our website</li>
                                    <li>Sending email notifications to registered users</li>
                                    <li>Displaying prominent notices on our platform</li>
                                    <li>Providing security alerts for critical privacy updates</li>
                                </ul>
                                <p className="text-slate-600">Your continued use of our security services after such changes constitutes acceptance of the updated policy.</p>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 12 */}
                            <section id="s12" className="scroll-mt-28 space-y-6">
                                <h2 className="text-xl font-bold text-slate-900">12. Contact Us</h2>
                                <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our security support team:</p>
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
                                    This Privacy Policy is compliant with applicable data protection laws and regulations, including but not limited to the Information Technology Act, 2000 and the Personal Data Protection Bill (when enacted).
                                </p>
                                <p className="text-slate-800 text-sm font-semibold leading-relaxed">
                                    As India&apos;s most trusted force in total security, Sreesecure Design Solutions Pvt. Ltd. is committed to protecting what matters most — your privacy and security.
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
