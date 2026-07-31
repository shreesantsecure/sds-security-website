"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
    {
        id: 1,
        question: "What types of Electronic Security Solutions do you offer?",
        answer:
            "We offer CCTV surveillance, biometric & RFID access control systems, smart video door phones, perimeter security, and intrusion alarm systems tailored for residential, commercial, and enterprise premises.",
    },
    {
        id: 2,
        question: "What types of CCTV cameras do you install?",
        answer:
            "We install high-definition IP cameras, HD analog cameras, indoor dome cameras, outdoor bullet cameras, PTZ (Pan-Tilt-Zoom) cameras, thermal cameras, and wireless smart home security cameras.",
    },
    {
        id: 3,
        question: "Do your security systems support remote monitoring?",
        answer:
            "Yes, all our modern CCTV and alarm systems support 24/7 remote monitoring via secure mobile applications and web dashboards on iOS and Android devices.",
    },
    {
        id: 4,
        question: "How do I know which CCTV system is right for my property?",
        answer:
            "Our security experts perform a comprehensive site evaluation to recommend the optimal camera resolution, lens angle, night-vision capability, and storage capacity tailored to your property layout.",
    },
    {
        id: 5,
        question: "Can I view the CCTV footage remotely on my phone?",
        answer:
            "Absolutely. You can view live video streams, playback recorded footage, and receive instant motion detection alerts directly on your smartphone anywhere in the world.",
    },
    {
        id: 6,
        question: "How long does a typical CCTV installation take?",
        answer:
            "Standard residential installations take 1 to 2 days, while commercial or multi-location setups typically take 3 to 5 business days depending on wiring requirements and camera count.",
    },
];

export function FaqSection() {
    const [openId, setOpenId] = useState<number | null>(1); // Open 1st FAQ by default

    const toggleFaq = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 text-[#0B65C6] text-xs font-bold tracking-wide uppercase">
                        <HelpCircle className="w-4 h-4" />
                        <span>Got Questions?</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Need Help? We've Got You Covered
                    </h2>
                    <p className="text-slate-600 text-base sm:text-lg">
                        Find quick answers to common questions about our security systems, installation, and monitoring services.
                    </p>
                </div>

                {/* Accordions */}
                <div className="space-y-4">
                    {faqs.map((faq) => {
                        const isOpen = openId === faq.id;
                        return (
                            <div
                                key={faq.id}
                                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
                            >
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-sky-50/50 transition-colors"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-base sm:text-lg font-bold text-slate-800">
                                        {faq.question}
                                    </span>
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen
                                                ? "bg-[#0B65C6] text-white rotate-180"
                                                : "bg-slate-100 text-slate-600"
                                            }`}
                                    >
                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
