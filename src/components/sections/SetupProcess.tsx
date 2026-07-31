"use client";

import { ClipboardCheck, ShieldCheck, Wrench, Headset } from "lucide-react";

const steps = [
    {
        step: "01",
        title: "Consultation – Understanding Your Security Needs",
        description:
            "Our experts assess your property, identify vulnerabilities, and understand your unique requirements to craft a security plan that meets your specific needs.",
        icon: ClipboardCheck,
    },
    {
        step: "02",
        title: "Custom Plan – Tailored Security Solution",
        description:
            "We design a personalized security strategy using state-of-the-art technology, ensuring comprehensive protection for your home or business.",
        icon: ShieldCheck,
    },
    {
        step: "03",
        title: "Installation – Smooth and Hassle-Free Setup",
        description:
            "Our certified technicians install and configure your system with precision, ensuring optimal performance and seamless integration.",
        icon: Wrench,
    },
    {
        step: "04",
        title: "Monitoring – 24/7 Support and Maintenance",
        description:
            "Stay protected around the clock with real-time monitoring, instant alerts, and expert support to handle any security threats.",
        icon: Headset,
    },
];

export function SetupProcess() {
    return (
        <section className="py-20 bg-white border-y border-slate-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
                {/* Header matching reference screenshot 2 */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight">
                        Fast and Simple Security Setup
                    </h2>
                    <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-normal">
                        Get protected quickly with our easy setup process. From consultation to installation, we handle everything to ensure your security system is up and running smoothly.
                    </p>
                </div>

                {/* 4 Process Cards matching screenshot 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {steps.map((item, index) => {
                        const isEven = index % 2 === 1;
                        const cardBg = isEven ? "bg-[#F5F9F0] border-lime-100/80" : "bg-[#F0F7FF] border-sky-100/80";
                        const numberColor = isEven ? "text-lime-300" : "text-sky-200";
                        const titleColor = isEven ? "text-[#65A30D]" : "text-[#0284C7]";

                        return (
                            <div
                                key={item.step}
                                className={`rounded-2xl p-8 sm:p-10 border transition-all duration-300 flex flex-col justify-between space-y-6 ${cardBg}`}
                            >
                                {/* Large Step Number */}
                                <div className="text-5xl sm:text-6xl font-light tracking-tight transition-colors">
                                    <span className={numberColor}>{item.step}</span>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className={`text-xl sm:text-2xl font-medium leading-snug ${titleColor}`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
