import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Shipping & Delivery Policy | SDS Security",
    description: "Shipping and Delivery Policy for Sreesecure Design Solutions Pvt. Ltd.",
};

const sections = [
    { id: "intro", label: "Introduction" },
    { id: "s1", label: "1. Shipping Coverage" },
    { id: "s2", label: "2. Shipping Options" },
    { id: "s3", label: "3. Delivery Timeline" },
    { id: "s4", label: "4. Order Processing" },
    { id: "s5", label: "5. Tracking Your Order" },
    { id: "s6", label: "6. Delivery Verification" },
    { id: "s7", label: "7. Failed Deliveries" },
    { id: "s8", label: "8. Special Handling" },
    { id: "s9", label: "9. Installation Services" },
    { id: "s10", label: "10. Shipping Charges" },
    { id: "s11", label: "11. Delivery Exceptions" },
    { id: "s12", label: "12. Contact Information" },
    { id: "s13", label: "13. Policy Updates" },
];

export default function ShippingPolicyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                {/* Hero Banner */}
                <div className="bg-gradient-to-br from-[#0A2E5C] via-[#082042] to-[#041229] text-white py-20 px-4">
                    <div className="max-w-7xl mx-auto space-y-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight">
                            Shipping &amp; Delivery Policy
                        </h1>
                        <p className="text-slate-300 text-base max-w-2xl leading-relaxed font-normal">
                            Our delivery procedures, shipping options, and delivery timelines for Sreesecure security products and solutions.
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
                                    At Sreesecure Design Solutions Pvt. Ltd., as India&apos;s most trusted force in total security, we understand the importance of timely and secure delivery of your electronic, cyber, and manpower security solutions. This Shipping &amp; Delivery Policy outlines our delivery procedures, shipping options, and delivery timelines for security products purchased through our platform.
                                </p>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 1 */}
                            <section id="s1" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">1. Shipping Coverage</h2>
                                <p>As India&apos;s most trusted force in total security, we currently provide shipping services to the following locations:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "All Major Cities", desc: "Bangalore, Mumbai, Delhi, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad" },
                                        { title: "Tier 2 Cities", desc: "Jaipur, Lucknow, Chandigarh, Indore, Bhopal, Nagpur, Coimbatore" },
                                        { title: "Remote Areas", desc: "Subject to courier service availability and additional charges" },
                                        { title: "International Shipping", desc: "Currently not available" },
                                        { title: "Security Service Areas", desc: "Comprehensive coverage for security system installations" },
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

                            {/* Section 2 */}
                            <section id="s2" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">2. Shipping Options</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-[#F0F7FF] border border-sky-100 rounded-xl p-5 space-y-2">
                                        <p className="font-bold text-slate-900 text-base">Standard Delivery</p>
                                        <ul className="space-y-1 text-slate-600 text-sm">
                                            <li>• 3-5 business days</li>
                                            <li>• Free for orders above ₹2,000</li>
                                            <li>• ₹150 for orders below ₹2,000</li>
                                            <li>• Regular courier service</li>
                                        </ul>
                                    </div>
                                    <div className="bg-[#F0F7FF] border border-sky-100 rounded-xl p-5 space-y-2">
                                        <p className="font-bold text-slate-900 text-base">Express Delivery</p>
                                        <ul className="space-y-1 text-slate-600 text-sm">
                                            <li>• 1-2 business days</li>
                                            <li>• ₹300 additional charge</li>
                                            <li>• Priority handling</li>
                                            <li>• SMS/Email tracking updates</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 3 */}
                            <section id="s3" className="scroll-mt-28 space-y-5">
                                <h2 className="text-xl font-bold text-slate-900">3. Delivery Timeline</h2>
                                <p>Our delivery timeline depends on various factors:</p>

                                <div className="space-y-3">
                                    <h3 className="text-base font-semibold text-[#0B65C6]">Processing Time</h3>
                                    <ul className="space-y-2 pl-5 list-disc text-slate-600">
                                        <li><strong className="text-slate-700">In-Stock Security Items:</strong> 24-48 hours processing time</li>
                                        <li><strong className="text-slate-700">Pre-Order Security Items:</strong> 3-7 business days processing</li>
                                        <li><strong className="text-slate-700">Custom Security Installations:</strong> 5-10 business days processing</li>
                                        <li><strong className="text-slate-700">Bulk Security Orders:</strong> 3-5 business days processing</li>
                                        <li><strong className="text-slate-700">AI-Led Cybersecurity Solutions:</strong> 2-5 business days processing</li>
                                    </ul>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-base font-semibold text-[#0B65C6]">Delivery Time by Location</h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        {[
                                            { loc: "Metro Cities", time: "1-3 business days" },
                                            { loc: "Tier 2 Cities", time: "3-5 business days" },
                                            { loc: "Tier 3 Cities", time: "5-7 business days" },
                                            { loc: "Remote Areas", time: "7-10 business days" },
                                        ].map((item) => (
                                            <div key={item.loc} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center space-y-1">
                                                <p className="text-xs font-semibold text-slate-500 uppercase">{item.loc}</p>
                                                <p className="text-slate-800 font-bold text-sm">{item.time}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 4 */}
                            <section id="s4" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">4. Order Processing</h2>
                                <p>Here&apos;s what happens after you place an order for security solutions:</p>
                                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                                    {[
                                        { n: "1", title: "Order Confirmation", desc: "You'll receive an email confirmation with order details and tracking information." },
                                        { n: "2", title: "Payment Processing", desc: "Payment is processed securely through Razorpay. Orders are confirmed once payment is successful." },
                                        { n: "3", title: "Security Order Processing", desc: "Your security solution is picked, packed, and prepared for shipping by our security warehouse team." },
                                        { n: "4", title: "Shipping", desc: "Package is handed over to our courier partner and tracking information is updated." },
                                        { n: "5", title: "Security Delivery", desc: "Security package is delivered to your doorstep with proper verification and signature collection." },
                                    ].map((step) => (
                                        <div key={step.n} className="flex gap-4 items-start">
                                            <span className="shrink-0 w-7 h-7 rounded-full bg-[#0B65C6] text-white text-xs font-bold flex items-center justify-center">{step.n}</span>
                                            <div>
                                                <p className="font-semibold text-slate-800 text-sm">{step.title}</p>
                                                <p className="text-slate-600 text-sm">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 5 */}
                            <section id="s5" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">5. Tracking Your Order</h2>
                                <p>Stay updated on your security order status through multiple channels:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "Email Updates", desc: "Receive status updates at each stage of security product delivery" },
                                        { title: "SMS Notifications", desc: "Get real-time updates via SMS" },
                                        { title: "Order Tracking", desc: "Track your security order on our website using order number" },
                                        { title: "Courier Tracking", desc: "Use tracking number provided in confirmation email" },
                                        { title: "Security Support", desc: "Call our security support team for order status" },
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

                            {/* Section 6 */}
                            <section id="s6" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">6. Delivery Verification</h2>
                                <p>For security and quality assurance, we follow strict delivery verification procedures for security products:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "Photo ID Verification", desc: "Delivery person may request photo ID for verification" },
                                        { title: "OTP Verification", desc: "One-time password sent to your registered mobile number" },
                                        { title: "Signature Collection", desc: "Digital or physical signature required upon delivery" },
                                        { title: "Security Package Inspection", desc: "Customers are encouraged to inspect security packages before accepting" },
                                        { title: "Damage Reporting", desc: "Report any visible damage immediately to delivery person" },
                                        { title: "Security Verification", desc: "Additional verification for high-value security systems" },
                                    ].map((item) => (
                                        <div key={item.title} className="bg-[#F0F7FF] border border-sky-100 rounded-xl p-4 space-y-1">
                                            <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 7 */}
                            <section id="s7" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">7. Failed Deliveries</h2>
                                <p>If security product delivery cannot be completed, the following procedures apply:</p>
                                <ul className="space-y-2 pl-5 list-disc text-slate-600">
                                    <li><strong className="text-slate-700">First Attempt:</strong> Courier will attempt delivery during business hours</li>
                                    <li><strong className="text-slate-700">Second Attempt:</strong> Free second delivery attempt on next business day</li>
                                    <li><strong className="text-slate-700">Third Attempt:</strong> Additional ₹100 charge for third attempt</li>
                                    <li><strong className="text-slate-700">Return to Sender:</strong> Security package returned if delivery fails after 3 attempts</li>
                                    <li><strong className="text-slate-700">Refund Processing:</strong> Full refund minus shipping charges for returned security packages</li>
                                    <li><strong className="text-slate-700">Security Coordination:</strong> Direct coordination for high-value security system deliveries</li>
                                </ul>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 8 */}
                            <section id="s8" className="scroll-mt-28 space-y-5">
                                <h2 className="text-xl font-bold text-slate-900">8. Special Handling</h2>

                                <div className="space-y-3">
                                    <h3 className="text-base font-semibold text-[#0B65C6]">8.1 Fragile Security Items</h3>
                                    <p>Next-generation electronic surveillance cameras and delicate security equipment receive special handling:</p>
                                    <ul className="space-y-2 pl-5 list-disc text-slate-600">
                                        <li>Extra protective packaging for security equipment</li>
                                        <li>Fragile security item labeling</li>
                                        <li>Careful handling instructions for surveillance systems</li>
                                        <li>Insurance coverage included for all security products</li>
                                        <li>Special handling for AI-led cybersecurity solutions</li>
                                    </ul>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-base font-semibold text-[#0B65C6]">8.2 High-Value Security Systems</h3>
                                    <p>Premium security systems and high-value security equipment:</p>
                                    <ul className="space-y-2 pl-5 list-disc text-slate-600">
                                        <li>Signature required upon delivery</li>
                                        <li>Additional insurance coverage for security systems</li>
                                        <li>Priority handling and tracking for security equipment</li>
                                        <li>Direct customer contact for security delivery coordination</li>
                                        <li>Professional security team coordination for complex installations</li>
                                    </ul>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 9 */}
                            <section id="s9" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">9. Installation Services</h2>
                                <p>For customers requiring professional security system installation:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "Security Installation Scheduling", desc: "Our security team will contact you within 24 hours to schedule installation" },
                                        { title: "Security Site Survey", desc: "Free site survey for complex security installations" },
                                        { title: "Installation Timeline", desc: "2-5 business days after security product delivery" },
                                        { title: "Security Warranty", desc: "1-year warranty on security installation work" },
                                        { title: "Security Support", desc: "Post-installation security support and training provided" },
                                        { title: "Highly Trained Manpower", desc: "Professional security personnel for installation" },
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
                            <section id="s10" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">10. Shipping Charges</h2>
                                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                                            <tr>
                                                <th className="p-3.5">Option / Condition</th>
                                                <th className="p-3.5">Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 text-slate-600">
                                            <tr>
                                                <td className="p-3.5">Orders above ₹2,000</td>
                                                <td className="p-3.5 font-bold text-emerald-600">FREE</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3.5">Orders below ₹2,000</td>
                                                <td className="p-3.5 font-semibold text-slate-800">₹150</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3.5">Express Delivery</td>
                                                <td className="p-3.5 font-semibold text-slate-800">+₹300</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3.5">Same Day Delivery</td>
                                                <td className="p-3.5 font-semibold text-slate-800">+₹500</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3.5">Remote Area Surcharge</td>
                                                <td className="p-3.5 font-semibold text-slate-800">+₹200</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 11 */}
                            <section id="s11" className="scroll-mt-28 space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">11. Delivery Exceptions</h2>
                                <p>Delivery may be delayed due to circumstances beyond our control:</p>
                                <ul className="space-y-2 pl-5 list-disc text-slate-600">
                                    <li><strong className="text-slate-700">Weather Conditions:</strong> Heavy rains, floods, or extreme weather</li>
                                    <li><strong className="text-slate-700">Natural Disasters:</strong> Earthquakes, cyclones, or other natural events</li>
                                    <li><strong className="text-slate-700">Government Actions:</strong> Curfews, lockdowns, or restrictions</li>
                                    <li><strong className="text-slate-700">Courier Strikes:</strong> Industrial actions affecting delivery services</li>
                                    <li><strong className="text-slate-700">Technical Issues:</strong> System outages or technical problems</li>
                                </ul>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Section 12 */}
                            <section id="s12" className="scroll-mt-28 space-y-6">
                                <h2 className="text-xl font-bold text-slate-900">12. Contact Information</h2>
                                <p>For security product shipping and delivery inquiries, please contact our security support team:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { label: "Security Shipping Support", value: "+91 9900097078", href: "tel:+919900097078" },
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
                                <p>We reserve the right to modify this Shipping &amp; Delivery Policy at any time. Changes will be effective immediately upon posting on our website. Continued use of our security services after changes constitutes acceptance of the updated policy.</p>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Closing note */}
                            <div className="bg-gradient-to-br from-[#0A2E5C]/5 to-sky-50 border border-sky-100 rounded-2xl p-6 space-y-3">
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    <strong className="text-slate-800">Note:</strong> This Shipping &amp; Delivery Policy is part of our Terms and Conditions. By placing a security solution order, you agree to be bound by these shipping terms. For complete terms, please review our{" "}
                                    <Link href="/terms" className="text-[#0B65C6] hover:underline">Terms and Conditions</Link>
                                    {" "}and{" "}
                                    <Link href="/privacy-policy" className="text-[#0B65C6] hover:underline">Privacy Policy</Link>.
                                    {" "}As India&apos;s most trusted force in total security, Sreesecure Design Solutions Pvt. Ltd. is committed to protecting what matters most — your security and timely delivery.
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
