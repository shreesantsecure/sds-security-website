"use client";

import { useState } from "react";

export function ContactForm() {
    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleCustomerLoginClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact-form" className="py-20 bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Info */}
                    <div className="space-y-6 pt-2">
                        <h2 className="text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-tight">
                            Get in Touch With Us
                        </h2>
                        <p className="text-slate-500 text-base leading-relaxed font-normal">
                            Have a question or need assistance? Fill out the form below and our team will get back to you shortly.
                        </p>
                        <p className="text-slate-500 text-base font-normal">
                            Are you facing any issue?{" "}
                            <a
                                href="https://servewell.me/web/home/#cust_login-section"
                                onClick={handleCustomerLoginClick}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0B65C6] hover:underline font-semibold cursor-pointer"
                            >
                                Raise a complaint
                            </a>
                        </p>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                                <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center text-[#0B65C6] text-2xl">✓</div>
                                <h3 className="text-xl font-semibold text-slate-900">Message Sent!</h3>
                                <p className="text-slate-500 text-sm">Our team will get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Full Name */}
                                <div className="space-y-1.5">
                                    <label htmlFor="fullName" className="text-sm font-medium text-slate-700">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        required
                                        value={form.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B65C6]/30 focus:border-[#0B65C6] transition-all"
                                    />
                                </div>

                                {/* Phone */}
                                <div className="space-y-1.5">
                                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="e.g. 9876543210"
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B65C6]/30 focus:border-[#0B65C6] transition-all"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="e.g. joe@gmail.com"
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B65C6]/30 focus:border-[#0B65C6] transition-all"
                                    />
                                </div>

                                {/* Message */}
                                <div className="space-y-1.5">
                                    <label htmlFor="message" className="text-sm font-medium text-slate-700">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Share your questions or details here..."
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B65C6]/30 focus:border-[#0B65C6] transition-all resize-none"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#0B65C6] hover:bg-sky-600 text-white text-sm font-semibold transition-all shadow-md shadow-sky-500/20"
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
