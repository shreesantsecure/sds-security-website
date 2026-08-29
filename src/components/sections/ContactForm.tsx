"use client";

import { useState } from "react";
import { openTenantPortal } from "@/utils/portal";

export function ContactForm() {
    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleCustomerLoginClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        openTenantPortal("https://servewell.me/web/home/#cust_login-section");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
        setErrorMessage(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setSubmitted(true);
            } else {
                setErrorMessage(data.error || "Failed to send message. Please try again.");
            }
        } catch (err) {
            console.error("Submission error:", err);
            setErrorMessage("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
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
                                <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center text-[#0B65C6] text-2xl font-bold">✓</div>
                                <h3 className="text-xl font-semibold text-slate-900">Message Sent!</h3>
                                <p className="text-slate-500 text-sm">Our team will get back to you shortly.</p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSubmitted(false);
                                        setForm({ fullName: "", phone: "", email: "", message: "" });
                                    }}
                                    className="mt-2 text-xs font-semibold text-[#0B65C6] hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {errorMessage && (
                                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center justify-between">
                                        <span>{errorMessage}</span>
                                        <button
                                            type="button"
                                            onClick={() => setErrorMessage(null)}
                                            className="text-red-500 hover:text-red-800 font-bold text-sm ml-2"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                )}

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
                                        disabled={isSubmitting}
                                        value={form.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B65C6]/30 focus:border-[#0B65C6] transition-all disabled:opacity-60"
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
                                        disabled={isSubmitting}
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="e.g. 9876543210"
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B65C6]/30 focus:border-[#0B65C6] transition-all disabled:opacity-60"
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
                                        disabled={isSubmitting}
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="e.g. joe@gmail.com"
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B65C6]/30 focus:border-[#0B65C6] transition-all disabled:opacity-60"
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
                                        disabled={isSubmitting}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Share your questions or details here..."
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B65C6]/30 focus:border-[#0B65C6] transition-all resize-none disabled:opacity-60"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#0B65C6] hover:bg-sky-600 text-white text-sm font-semibold transition-all shadow-md shadow-sky-500/20 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Sending Message...</span>
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
