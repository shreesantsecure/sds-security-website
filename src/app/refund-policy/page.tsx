import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Refund Policy | SDS Security",
    description: "Refund Policy for Sreesecure Design Solutions Pvt. Ltd.",
};

const sections = [
    { id: "intro", label: "Introduction" },
    { id: "s1", label: "1. General Return Policy" },
    { id: "s2", label: "2. Eligible Products for Return" },
    { id: "s3", label: "3. Non-Returnable Products" },
    { id: "s4", label: "4. Return Conditions" },
    { id: "s5", label: "5. Return Process" },
    { id: "s6", label: "6. Return Shipping" },
    { id: "s7", label: "7. Refund Processing" },
    { id: "s8", label: "8. Exchange Policy" },
    { id: "s9", label: "9. Warranty Claims" },
    { id: "s10", label: "10. Special Circumstances" },
    { id: "s11", label: "11. Return Address" },
    { id: "s12", label: "12. Contact Information" },
    { id: "s13", label: "13. Policy Updates" },
];

export default function RefundPolicyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                {/* Hero Banner */}
                <div className="bg-gradient-to-br from-[#0A2E5C] via-[#082042] to-[#041229] text-white py-20 px-4">
                    <div className="max-w-7xl mx-auto space-y-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight">
                            Refund Policy
                        </h1>
                        <p className="text-slate-300 text-base max-w-2xl leading-relaxed font-normal">
                            Our commitment to your complete satisfaction with every Sreesecure security solution purchase.
                        </p>
                        <p className="text-sky-400 text-sm">Effective: July 31, 2026</p>
                    </div>
                </div>

                {/* Body */}
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
                                    At Sreesecure Design Solutions Pvt. Ltd., as India&apos;s most trusted force in total security, we are committed to ensuring your complete satisfaction with our electronic, cyber, and manpower security solutions. This Refund Policy outlines the terms and conditions for returns, refunds, and exchanges of security products purchased through our platform.
                                </p>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 1 */}
                            <section id="s1" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">1. General Return Policy</h2>
                                <p>
                                    We offer a customer-friendly return policy for most of our electronic, cyber, and manpower security solutions. However, due to the nature of security products, certain restrictions apply to ensure the integrity and safety of our comprehensive security systems.
                                </p>
                                <div className="bg-[#F0F7FF] border border-sky-100 rounded-xl p-5 space-y-1">
                                    <p className="text-xs font-bold text-[#0B65C6] uppercase tracking-wider">Return Window: 7 days from date of delivery</p>
                                    <p className="text-slate-700 text-sm leading-relaxed">For most products, you have 7 days from the date of delivery to initiate a return.</p>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 2 */}
                            <section id="s2" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">2. Eligible Products for Return</h2>
                                <p>The following security solutions are eligible for return under our standard policy:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "Next-Generation Electronic Surveillance", desc: "IP cameras, CCTV cameras, dome cameras, bullet cameras" },
                                        { title: "DVR/NVR Systems", desc: "Digital video recorders, network video recorders" },
                                        { title: "Access Control Systems", desc: "Card readers, biometric devices, keypads" },
                                        { title: "Alarm Systems", desc: "Motion sensors, door/window sensors, control panels" },
                                        { title: "Network Equipment", desc: "Switches, routers, cables, connectors" },
                                        { title: "Storage Devices", desc: "Hard drives, memory cards, USB devices" },
                                        { title: "AI-Led Cybersecurity Solutions", desc: "Digital protection and monitoring systems" },
                                    ].map((item) => (
                                        <div key={item.title} className="flex gap-3 items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-[#0B65C6] shrink-0" />
                                            <div>
                                                <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                                                <p className="text-slate-600 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 3 */}
                            <section id="s3" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">3. Non-Returnable Products</h2>
                                <p>Due to security, hygiene, and technical reasons, the following security solutions cannot be returned:</p>
                                <ul className="space-y-2 pl-5 list-disc text-slate-600">
                                    <li><strong className="text-slate-700">Software Licenses:</strong> Once activated, security software licenses are non-refundable</li>
                                    <li><strong className="text-slate-700">Custom Security Installations:</strong> Security systems installed or configured specifically for your location</li>
                                    <li><strong className="text-slate-700">Used or Damaged Items:</strong> Security products showing signs of use, damage, or tampering</li>
                                    <li><strong className="text-slate-700">Consumables:</strong> Batteries, tapes, cleaning supplies</li>
                                    <li><strong className="text-slate-700">Downloadable Content:</strong> Digital manuals, firmware, or security software downloads</li>
                                    <li><strong className="text-slate-700">Gift Cards:</strong> Prepaid cards and vouchers</li>
                                    <li><strong className="text-slate-700">Clearance Items:</strong> Security products marked as final sale or clearance</li>
                                    <li><strong className="text-slate-700">Highly Trained Manpower Services:</strong> Security personnel services once deployed</li>
                                </ul>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 4 */}
                            <section id="s4" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">4. Return Conditions</h2>
                                <p>To be eligible for a return, security products must meet the following conditions:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "Original Packaging", desc: "Security product must be in its original, undamaged packaging" },
                                        { title: "Unused Condition", desc: "Security product must be unused and in the same condition as received" },
                                        { title: "Complete Contents", desc: "All original accessories, manuals, and security components must be included" },
                                        { title: "No Tampering", desc: "Security product must not show signs of installation, modification, or tampering" },
                                        { title: "Security Seals", desc: "Any security seals or tamper-evident packaging must be intact" },
                                        { title: "Return Authorization", desc: "Must have valid return authorization from our security support team" },
                                        { title: "Security Verification", desc: "All security products undergo verification before return processing" },
                                    ].map((item) => (
                                        <div key={item.title} className="bg-[#F0F7FF] border border-sky-100 rounded-xl p-4 space-y-1">
                                            <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 5 */}
                            <section id="s5" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">5. Return Process</h2>
                                <p>Follow these steps to initiate a return:</p>
                                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                                    <p className="text-sm font-bold text-slate-800">Step-by-Step Return Process:</p>
                                    <ol className="space-y-4">
                                        {[
                                            { n: "1", text: "Contact Security Support: Call +91 9900097078 or email office@sreesecure.com within 7 days of delivery" },
                                            { n: "2", text: "Provide Order Details: Share your order number, security product details, and reason for return" },
                                            { n: "3", text: "Get Return Authorization: Our security team will provide a Return Authorization Number (RAN)" },
                                            { n: "4", text: "Package Securely: Pack the security product in its original packaging with all accessories" },
                                            { n: "5", text: "Ship Back: Send the package to our designated return address" },
                                            { n: "6", text: "Track Return: Use the provided tracking number to monitor your return" },
                                        ].map((step) => (
                                            <li key={step.n} className="flex gap-4 items-start">
                                                <span className="shrink-0 w-7 h-7 rounded-full bg-[#0B65C6] text-white text-xs font-bold flex items-center justify-center">{step.n}</span>
                                                <p className="text-slate-600 text-sm pt-1">{step.text}</p>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 6 */}
                            <section id="s6" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">6. Return Shipping</h2>
                                <p>Shipping costs for security product returns are handled as follows:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "Defective Security Products", desc: "We cover return shipping costs for defective security items" },
                                        { title: "Customer Preference Returns", desc: "Customer is responsible for return shipping costs" },
                                        { title: "Wrong Security Product Shipped", desc: "We cover return shipping if we shipped the wrong security item" },
                                        { title: "Damaged in Transit", desc: "We cover return shipping for security items damaged during delivery" },
                                        { title: "Security System Returns", desc: "Special handling for large security system returns" },
                                    ].map((item) => (
                                        <div key={item.title} className="flex gap-3 items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-[#0B65C6] shrink-0" />
                                            <div>
                                                <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                                                <p className="text-slate-600 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-slate-600 text-sm">We recommend using a trackable shipping method and purchasing shipping insurance for valuable security equipment.</p>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 7 */}
                            <section id="s7" className="scroll-mt-28 space-y-5">
                                <h2 className="text-xl font-bold text-slate-900">7. Refund Processing</h2>
                                <p>Once we receive and inspect your returned security product, we will process your refund:</p>
                                <div className="bg-[#F0F7FF] border border-sky-100 rounded-xl p-5 space-y-1">
                                    <p className="text-xs font-bold text-[#0B65C6] uppercase tracking-wider">Refund Timeline: 7-14 business days</p>
                                    <p className="text-slate-700 text-sm">Refunds are typically processed within 7-14 business days after we receive your return.</p>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-base font-semibold text-[#0B65C6]">7.1 Refund Methods</h3>
                                    <ul className="space-y-2 pl-5 list-disc text-slate-600">
                                        <li><strong className="text-slate-700">Original Payment Method:</strong> Refunds are processed to the original payment method used</li>
                                        <li><strong className="text-slate-700">Credit/Debit Cards:</strong> 5-10 business days for processing</li>
                                        <li><strong className="text-slate-700">Digital Wallets:</strong> 2-5 business days for processing</li>
                                        <li><strong className="text-slate-700">Net Banking:</strong> 3-7 business days for processing</li>
                                        <li><strong className="text-slate-700">UPI Payments:</strong> 1-3 business days for processing</li>
                                    </ul>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-base font-semibold text-[#0B65C6]">7.2 Refund Amount</h3>
                                    <ul className="space-y-2 pl-5 list-disc text-slate-600">
                                        <li><strong className="text-slate-700">Full Refund:</strong> Security product price for eligible returns</li>
                                        <li><strong className="text-slate-700">Partial Refund:</strong> May apply if security product is not in original condition</li>
                                        <li><strong className="text-slate-700">Shipping Costs:</strong> Original shipping costs are not refunded unless due to our error</li>
                                        <li><strong className="text-slate-700">Restocking Fee:</strong> 10% restocking fee may apply to certain high-value security systems</li>
                                    </ul>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 8 */}
                            <section id="s8" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">8. Exchange Policy</h2>
                                <p>We offer exchanges for security products that are defective or if you received the wrong item:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "Defective Security Products", desc: "Free exchange for security products with manufacturing defects" },
                                        { title: "Wrong Security Item", desc: "Free exchange if we shipped the incorrect security product" },
                                        { title: "Security System Upgrades", desc: "Available for certain security systems with price difference adjustment" },
                                        { title: "Exchange Timeline", desc: "Same processing time as returns (7-14 business days)" },
                                        { title: "Security Verification", desc: "All exchanged security products undergo verification" },
                                    ].map((item) => (
                                        <div key={item.title} className="bg-[#F0F7FF] border border-sky-100 rounded-xl p-4 space-y-1">
                                            <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 9 */}
                            <section id="s9" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">9. Warranty Claims</h2>
                                <p>For security products under warranty, different procedures apply:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "Warranty Period", desc: "Most security products have 1-year manufacturer warranty" },
                                        { title: "Warranty Service", desc: "Defective security products may be repaired or replaced" },
                                        { title: "Warranty Claims", desc: "Contact our security technical support team for warranty issues" },
                                        { title: "Extended Warranty", desc: "Additional warranty coverage available for purchase" },
                                        { title: "Security System Warranty", desc: "Comprehensive warranty for complete security systems" },
                                        { title: "24/7 Support", desc: "Round-the-clock support for warranty claims" },
                                    ].map((item) => (
                                        <div key={item.title} className="flex gap-3 items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-[#0B65C6] shrink-0" />
                                            <div>
                                                <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                                                <p className="text-slate-600 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 10 */}
                            <section id="s10" className="scroll-mt-28 space-y-5">
                                <h2 className="text-xl font-bold text-slate-900">10. Special Circumstances</h2>

                                <div className="space-y-2">
                                    <h3 className="text-base font-semibold text-[#0B65C6]">10.1 Bulk Security Orders</h3>
                                    <p>For orders of 10 or more security items, special return terms may apply. Contact our security sales team for bulk order return policies.</p>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-base font-semibold text-[#0B65C6]">10.2 Business Security Customers</h3>
                                    <p>Business customers with established security accounts may have different return terms. Please refer to your business security agreement.</p>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-base font-semibold text-[#0B65C6]">10.3 Force Majeure</h3>
                                    <p>In cases of natural disasters, government actions, or other force majeure events, security product return timelines may be extended.</p>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 11 */}
                            <section id="s11" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">11. Return Address</h2>
                                <p>Return Address:</p>
                                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-slate-700 text-sm leading-relaxed space-y-1">
                                    <p className="font-semibold text-slate-900">Sreesecure Design Solutions Pvt. Ltd.</p>
                                    <p>Returns Department</p>
                                    <p>Survey no 111/2 Investment layout 3rd cross road near muneeswaran temple</p>
                                    <p>Tech city layout, neeladiri nagar</p>
                                    <p>Electronic city phase 1, Bangalore 560100</p>
                                    <p>India</p>
                                    <p className="pt-3 text-slate-500 italic">Note: Please include your Return Authorization Number (RAN) on the outside of the package.</p>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 12 */}
                            <section id="s12" className="scroll-mt-28 space-y-6">
                                <h2 className="text-xl font-bold text-slate-900">12. Contact Information</h2>
                                <p>For questions about security product returns, refunds, or exchanges, please contact our security support team:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { label: "Security Support", value: "+91 9900097078", href: "tel:+919900097078" },
                                        { label: "Email", value: "office@sreesecure.com", href: "mailto:office@sreesecure.com" },
                                        { label: "Business Hours", value: "Mon - Fri, 9 AM - 6 PM IST\nSat, 10 AM - 4 PM IST", href: null },
                                    ].map((item) => (
                                        <div key={item.label} className="bg-[#F0F7FF] border border-sky-100 rounded-xl p-5 space-y-1">
                                            <p className="text-xs font-bold text-[#0B65C6] uppercase tracking-wider">{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} className="text-slate-800 hover:text-[#0B65C6] transition-colors font-medium text-sm">{item.value}</a>
                                            ) : (
                                                <p className="text-slate-800 font-medium text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 13 */}
                            <section id="s13" className="scroll-mt-28 space-y-3">
                                <h2 className="text-xl font-bold text-slate-900">13. Policy Updates</h2>
                                <p>We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting on our website. Continued use of our security services after changes constitutes acceptance of the updated policy.</p>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Closing note */}
                            <div className="bg-gradient-to-br from-[#0A2E5C]/5 to-sky-50 border border-sky-100 rounded-2xl p-6 space-y-3">
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    <strong className="text-slate-800">Important:</strong> This Refund Policy is part of our Terms and Conditions. By making a security solution purchase, you agree to be bound by these terms. For complete terms, please review our{" "}
                                    <Link href="/terms" className="text-[#0B65C6] hover:underline">Terms and Conditions</Link>
                                    {" "}and{" "}
                                    <Link href="/privacy-policy" className="text-[#0B65C6] hover:underline">Privacy Policy</Link>.
                                    {" "}As India&apos;s most trusted force in total security, Sreesecure Design Solutions Pvt. Ltd. is committed to protecting what matters most — your security and satisfaction.
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
