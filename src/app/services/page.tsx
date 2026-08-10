import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
    Camera,
    Fingerprint,
    BellRing,
    Video,
    Home,
    ShieldAlert,
    Lock,
    FileCheck,
    Cpu,
    Terminal,
    UserCheck,
    Building2,
    Users,
    Shield,
    Award,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    ChevronRight,
    PhoneCall,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Security Services | Electronic, Cyber & Manpower Solutions | SDS Security",
    description:
        "Explore SDS Security's comprehensive security services: Electronic Security, Cyber Security, and Manpower Security. Tailored solutions for home, office, and enterprise protection.",
};

const serviceHighlights = [
    {
        id: "electronic-security",
        name: "Electronic Security Solutions",
        tagline: "CCTV, Biometrics & Smart Automation",
        icon: Camera,
        color: "from-sky-500 to-blue-600",
        badgeBg: "bg-sky-500/10 text-sky-600 border-sky-200",
    },
    {
        id: "cyber-security",
        name: "Cyber Security Services",
        tagline: "Firewalls, Ethical Hacking & Compliance",
        icon: ShieldAlert,
        color: "from-blue-600 to-indigo-700",
        badgeBg: "bg-blue-600/10 text-blue-600 border-blue-200",
    },
    {
        id: "manpower-security",
        name: "Manpower Security Services",
        tagline: "Guards, Bodyguards & Event Staff",
        icon: UserCheck,
        color: "from-emerald-500 to-teal-700",
        badgeBg: "bg-emerald-600/10 text-emerald-600 border-emerald-200",
    },
];

const electronicOfferings = [
    {
        title: "CCTV & IP Camera Installations",
        description: "High-definition 4K surveillance cameras with remote live monitoring, night vision, and motion alerts.",
        icon: Camera,
    },
    {
        title: "Biometric & RFID Access Systems",
        description: "Touchless facial recognition, fingerprint scanners, and smart card access control for secure entry points.",
        icon: Fingerprint,
    },
    {
        title: "Alarm Systems",
        description: "Intrusion detection sensors, panic alarms, and perimeter breach notification systems for instant alerts.",
        icon: BellRing,
    },
    {
        title: "Smart Video Door Phones",
        description: "HD video intercoms with smartphone connectivity to talk to visitors and grant door access remotely.",
        icon: Video,
    },
    {
        title: "Home/Office Automation for Security",
        description: "Integrated smart lighting, automated door locks, sensor triggers, and centralized IoT security hubs.",
        icon: Home,
    },
];

const cyberOfferings = [
    {
        title: "Network Vulnerability Assessment",
        description: "In-depth network scanning and audit to detect security loopholes before malicious hackers exploit them.",
        icon: Terminal,
    },
    {
        title: "Firewall & Endpoint Security",
        description: "Next-generation firewalls, antivirus management, and endpoint detection & response (EDR) for workstations.",
        icon: ShieldAlert,
    },
    {
        title: "Data Protection & Encryption",
        description: "Robust data loss prevention (DLP), database encryption, and cloud security protocols to keep sensitive info safe.",
        icon: Lock,
    },
    {
        title: "Security Compliance (ISO, GDPR, etc.)",
        description: "End-to-end guidance to ensure full compliance with ISO 27001, GDPR, HIPAA, and industry security frameworks.",
        icon: FileCheck,
    },
    {
        title: "Penetration Testing & Ethical Hacking",
        description: "Simulated cyberattacks by certified ethical hackers to test system resilience and eliminate threats.",
        icon: Cpu,
    },
];

const manpowerOfferings = [
    {
        title: "Corporate Security Guards",
        description: "Professional, uniform-clad guards trained in receptionist duties, visitor logs, and perimeter surveillance.",
        icon: Building2,
    },
    {
        title: "Residential Society Guards",
        description: "Disciplined security teams for gated communities, apartments, and private residences with 24/7 vigil.",
        icon: Shield,
    },
    {
        title: "Event Security Staff",
        description: "Crowd management experts, bouncers, and perimeter control teams for corporate conferences and VIP events.",
        icon: Users,
    },
    {
        title: "Bodyguards & Personal Security Officers",
        description: "Ex-military and elite trained personal protection officers (PPOs) for executives, celebrities, and VIPs.",
        icon: Award,
    },
    {
        title: "Bouncers for Clubs & High-End Venues",
        description: "Vigilant, well-built bouncers trained in conflict resolution, de-escalation, and high-energy venue safety.",
        icon: UserCheck,
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col justify-between">
            <Navbar />
            <main className="flex-1 scroll-smooth">
                {/* ─── Hero Banner Section ────────────────────────────────────────── */}
                <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 bg-gradient-to-br from-[#0A2E5C] via-[#082042] to-[#041229] text-white overflow-hidden">
                    {/* Background Ambient Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0B65C6]/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-4xl mx-auto space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sky-300 text-sm font-semibold backdrop-blur-md">
                                <Sparkles className="w-4 h-4 text-sky-400" />
                                <span>Comprehensive 360° Protection Solutions</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                                Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-100 to-white">Security Services</span>
                            </h1>

                            <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
                                From next-generation electronic hardware and elite cyber defense to disciplined on-ground manpower, SDS Security delivers trusted protection tailored for your peace of mind.
                            </p>
                        </div>

                        {/* Quick Highlight Navigation Pills */}
                        <div className="mt-14 max-w-5xl mx-auto">
                            <p className="text-center text-xs uppercase tracking-widest font-semibold text-sky-300/80 mb-6">
                                Jump Directly To Service Section
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                                {serviceHighlights.map((service) => {
                                    const Icon = service.icon;
                                    return (
                                        <a
                                            key={service.id}
                                            href={`#${service.id}`}
                                            className="group relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-sky-400/50 transition-all duration-300 backdrop-blur-md shadow-lg"
                                        >
                                            <div className={`p-3.5 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors truncate">
                                                    {service.name}
                                                </h3>
                                                <p className="text-xs text-slate-300 truncate mt-0.5">
                                                    {service.tagline}
                                                </p>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-sky-400 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>


                {/* ─── Service 1: Electronic Security Solutions ─────────────────── */}
                <section
                    id="electronic-security"
                    className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200 scroll-mt-20"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                            {/* Content Header & Intro */}
                            <div className="lg:col-span-6 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-[#0B65C6] text-xs font-bold uppercase tracking-wider border border-sky-200">
                                    <Camera className="w-4 h-4" />
                                    <span>01. Hardware & Automation</span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                    Electronic Security Solutions
                                </h2>

                                <p className="text-slate-600 text-lg leading-relaxed font-normal">
                                    From CCTV Surveillance to Access Control and Smart Alarms, we deploy next-gen security infrastructure for homes, offices, and enterprises.
                                </p>

                                {/* Service Offerings List */}
                                <div className="space-y-4 pt-2">
                                    {electronicOfferings.map((item, idx) => {
                                        const Icon = item.icon;
                                        return (
                                            <div
                                                key={idx}
                                                className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-sky-500/50 hover:shadow-md transition-all group flex items-start gap-4"
                                            >
                                                <div className="p-2.5 rounded-lg bg-sky-50 text-[#0B65C6] group-hover:bg-[#0B65C6] group-hover:text-white transition-colors">
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0B65C6] transition-colors">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="pt-4 flex flex-wrap gap-4 items-center">
                                    <Link
                                        href="/#contact-form"
                                        className="inline-flex items-center gap-2 bg-[#0B65C6] text-white hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
                                    >
                                        <span>Get Electronic Security Quote</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <a
                                        href="tel:+919876543210"
                                        className="inline-flex items-center gap-2 bg-white text-slate-700 hover:text-[#0B65C6] border border-slate-300 px-5 py-3 rounded-xl font-semibold transition-all hover:bg-slate-50"
                                    >
                                        <PhoneCall className="w-4 h-4 text-sky-600" />
                                        <span>Speak with Tech Expert</span>
                                    </a>
                                </div>
                            </div>

                            {/* Visual Image Banner & Feature Card */}
                            <div className="lg:col-span-6 relative">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group">
                                    <img
                                        src="/images/electronic_security_banner.png"
                                        alt="Electronic Security Solutions"
                                        className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E5C]/90 via-[#0A2E5C]/30 to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white space-y-2">
                                        <div className="flex items-center gap-2 text-xs font-bold text-sky-300 uppercase tracking-widest">
                                            <CheckCircle2 className="w-4 h-4" />
                                            <span>Next-Gen Infrastructure</span>
                                        </div>
                                        <h3 className="text-xl font-bold">24/7 Smart Monitoring & Automation</h3>
                                        <p className="text-xs text-slate-200 leading-relaxed">
                                            Fully integrated CCTV arrays, intelligent RFID locks, and real-time mobile push notifications for instant alert response.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ─── Service 2: Cyber Security Services ────────────────────────── */}
                <section
                    id="cyber-security"
                    className="py-20 lg:py-28 bg-[#071933] text-white relative overflow-hidden scroll-mt-20 border-b border-slate-800"
                >
                    {/* Background Accent Gradients */}
                    <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                            {/* Visual Banner Left */}
                            <div className="lg:col-span-6 order-2 lg:order-1 relative">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sky-500/30 group">
                                    <img
                                        src="/images/cyber_security_banner.png"
                                        alt="Cyber Security Services"
                                        className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#041229] via-transparent to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#092244]/80 backdrop-blur-md border border-sky-500/40 text-white space-y-2">
                                        <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-widest">
                                            <ShieldAlert className="w-4 h-4 text-blue-400" />
                                            <span>Proactive Cyber Shield</span>
                                        </div>
                                        <h3 className="text-xl font-bold">Advanced Threat Intelligence & Response</h3>
                                        <p className="text-xs text-slate-300 leading-relaxed">
                                            Automated vulnerability scanning, AI threat intelligence, and ISO/GDPR compliant encryption standards.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Content Right */}
                            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                                    <ShieldAlert className="w-4 h-4 text-blue-400" />
                                    <span>02. Digital Defense</span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                                    Cyber Security Services
                                </h2>

                                <p className="text-slate-300 text-lg leading-relaxed font-normal">
                                    We help you fight back against hackers, data breaches, and digital threats with elite cybersecurity services for businesses of all sizes.
                                </p>

                                {/* Cyber Offerings Grid */}
                                <div className="space-y-4 pt-2">
                                    {cyberOfferings.map((item, idx) => {
                                        const Icon = item.icon;
                                        return (
                                            <div
                                                key={idx}
                                                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/60 hover:bg-white/10 transition-all group flex items-start gap-4"
                                            >
                                                <div className="p-2.5 rounded-lg bg-blue-600/30 text-sky-300 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="pt-4 flex flex-wrap gap-4 items-center">
                                    <Link
                                        href="/#contact-form"
                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white hover:opacity-95 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
                                    >
                                        <span>Request Security Audit</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ─── Service 3: Manpower Security Services ──────────────────────── */}
                <section
                    id="manpower-security"
                    className="py-20 lg:py-28 bg-white scroll-mt-20"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                            {/* Content Left */}
                            <div className="lg:col-span-6 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                                    <UserCheck className="w-4 h-4" />
                                    <span>03. On-Ground Protection</span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                    Manpower Security Services
                                </h2>

                                <p className="text-slate-600 text-lg leading-relaxed font-normal">
                                    Highly trained, reliable, and vigilant — our security personnel bring peace of mind through on-ground presence, discipline, and alertness.
                                </p>

                                {/* Manpower Personnel Offerings List */}
                                <div className="space-y-4 pt-2">
                                    {manpowerOfferings.map((item, idx) => {
                                        const Icon = item.icon;
                                        return (
                                            <div
                                                key={idx}
                                                className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-emerald-500/50 hover:shadow-md transition-all group flex items-start gap-4"
                                            >
                                                <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="pt-4 flex flex-wrap gap-4 items-center">
                                    <Link
                                        href="/#contact-form"
                                        className="inline-flex items-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3 rounded-xl font-semibold shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02]"
                                    >
                                        <span>Deploy Guard Staff</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Visual Image Banner Right */}
                            <div className="lg:col-span-6 relative">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group">
                                    <img
                                        src="/images/manpower_security_banner.png"
                                        alt="Manpower Security Services"
                                        className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#092244]/90 via-[#092244]/30 to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white space-y-2">
                                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-widest">
                                            <Award className="w-4 h-4" />
                                            <span>Disciplined & Background Verified</span>
                                        </div>
                                        <h3 className="text-xl font-bold">24/7 Vigilant Guarding Presence</h3>
                                        <p className="text-xs text-slate-200 leading-relaxed">
                                            Thoroughly vetted personnel trained in emergency response, access control procedures, and high-end protocol.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ─── Bottom CTA Banner ─────────────────────────────────────────── */}
                <section className="py-16 bg-gradient-to-r from-[#0A2E5C] via-[#0B65C6] to-[#0A2E5C] text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            Need a Customized Security Package?
                        </h2>
                        <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal">
                            Combine electronic surveillance, cybersecurity monitoring, and on-ground guarding for comprehensive 360-degree security.
                        </p>
                        <div className="pt-2 flex justify-center gap-4">
                            <Link
                                href="/#contact-form"
                                className="bg-white text-[#0B65C6] hover:bg-slate-100 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-[1.03]"
                            >
                                Get Free Consultation & Quote
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

