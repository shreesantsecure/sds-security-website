"use client";

import Link from "next/link";
import { Cpu, ShieldAlert, UserCheck, ArrowRight } from "lucide-react";

const services = [
    {
        id: "electronic-security",
        title: "Electronic Security Solutions",
        tagline: "Safety is smarter with Sreesecure. Let us fortify your space.",
        description:
            "From CCTV Surveillance to Access Control and Smart Alarms, we deploy next-gen security infrastructure for homes, offices, and enterprises.",
        href: "/services/electronic-security",
        icon: Cpu,
        badgeColor: "bg-sky-500",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "cyber-security",
        title: "Cyber Security Services",
        tagline: "Your data is valuable. We make sure it stays safe.",
        description:
            "We help you fight back against hackers, data breaches, and digital threats with elite cybersecurity services for businesses of all sizes.",
        href: "/services/cyber-security",
        icon: ShieldAlert,
        badgeColor: "bg-blue-600",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "manpower-security",
        title: "Manpower Security Services",
        tagline: "People you can trust, protection you can see.",
        description:
            "Highly trained, reliable, and vigilant — our security personnel bring peace of mind through on-ground presence, discipline, and alertness.",
        href: "/services/manpower-security",
        icon: UserCheck,
        badgeColor: "bg-emerald-600",
        image: "/images/ChatGPT Image Jul 31, 2026, 07_48_11 PM.png",
    },
];

export function ServicesOverview() {
    return (
        <section className="py-24 bg-gradient-to-br from-[#0A2E5C] via-[#082042] to-[#041229] text-white relative overflow-hidden">
            {/* Ambient Logo Brand Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0B65C6]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                {/* Header without capsule badge */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight">
                        Providing Security Services <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-100 to-white font-normal">
                            That Work for You
                        </span>
                    </h2>
                    <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                        Explore smart security solutions designed to protect your home and business with advanced technology, ensuring safety and peace of mind.
                    </p>
                </div>

                {/* Services Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="group relative rounded-2xl bg-[#092244]/80 border border-sky-800/40 overflow-hidden flex flex-col justify-between hover:border-sky-400/60 transition-all duration-300 shadow-2xl hover:shadow-sky-500/20 backdrop-blur-sm"
                            >
                                {/* Image Banner */}
                                <div className="relative h-48 w-full overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#092244] via-[#092244]/40 to-transparent" />

                                    {/* Floating Icon Badge */}
                                    <div className={`absolute bottom-4 left-6 p-3 rounded-xl ${service.badgeColor} text-white shadow-lg`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-xs font-semibold text-sky-400">
                                            {service.tagline}
                                        </p>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="pt-4">
                                        <Link
                                            href={service.href}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-[#0B65C6] px-5 py-2.5 rounded-xl border border-white/10 transition-all group-hover:border-sky-500/40"
                                        >
                                            <span>Show More</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
