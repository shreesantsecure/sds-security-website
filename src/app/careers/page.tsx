"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
    Briefcase,
    MapPin,
    Clock,
    Upload,
    CheckCircle2,
    X,
    FileText,
    Send,
    Building2,
    Users,
    Shield,
    Award,
    Sparkles,
    ChevronRight
} from "lucide-react";

interface JobPosition {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    requirements: string[];
}

const JOB_POSITIONS: JobPosition[] = [
    {
        id: "accounts-finance-executive",
        title: "ACCOUNTS & FINANCE EXECUTIVE",
        department: "Finance & Admin",
        location: "Bengaluru (HQ)",
        type: "Full-Time",
        experience: "2 - 5 Years",
        description: "Manage end-to-end financial operations, client invoicing, tax compliance, GST returns, ledger maintenance, and accounts reconciliation for corporate security projects.",
        requirements: [
            "B.Com / M.Com / MBA in Finance",
            "Proficiency in Tally ERP, Zoho Books, or similar accounting tools",
            "Strong understanding of GST, TDS, and statutory compliance",
            "Experience in vendor payments and ledger auditing"
        ]
    },
    {
        id: "office-admin",
        title: "OFFICE ADMIN",
        department: "Finance & Admin",
        location: "Bengaluru (HQ)",
        type: "Full-Time",
        experience: "1 - 3 Years",
        description: "Oversee daily office operations, visitor management, client communication, document filing, staff attendance coordination, and administrative support.",
        requirements: [
            "Bachelor's Degree in any discipline",
            "Excellent verbal and written communication skills",
            "Proficiency in MS Office (Excel, Word, Outlook)",
            "Strong organizational and multitasking capabilities"
        ]
    },
    {
        id: "purchase-executive",
        title: "PURCHASE EXECUTIVE",
        department: "Procurement",
        location: "Bengaluru (HQ)",
        type: "Full-Time",
        experience: "2 - 4 Years",
        description: "Handle vendor management, procurement of CCTV equipment, access control hardware, networking cables, quotation comparisons, and PO issuance.",
        requirements: [
            "Diploma or Degree in Business / Supply Chain / Engineering",
            "Experience in electronics or security equipment procurement preferred",
            "Strong negotiation skills and vendor relationship management",
            "Inventory control and supply chain logistics experience"
        ]
    },
    {
        id: "senior-electrician",
        title: "SENIOR ELECTRICIAN",
        department: "Electrical & Technical",
        location: "Bengaluru & Site Projects",
        type: "Full-Time",
        experience: "4 - 7 Years",
        description: "Lead commercial low & high voltage electrical installations, main panel wiring, UPS systems, power distribution, and technical troubleshooting for enterprise clients.",
        requirements: [
            "ITI / Diploma in Electrical Engineering",
            "Valid Wireman License preferred",
            "In-depth knowledge of electrical safety standards and circuit schematics",
            "Ability to lead site installation teams effectively"
        ]
    },
    {
        id: "junior-electrician",
        title: "JUNIOR ELECTRICIAN",
        department: "Electrical & Technical",
        location: "Bengaluru & Field Operations",
        type: "Full-Time",
        experience: "1 - 3 Years",
        description: "Assist senior technicians in electrical wiring, conduit laying, power supply connections, equipment testing, and routine site maintenance.",
        requirements: [
            "ITI Electrical certification",
            "Basic knowledge of electrical circuits and safety protocols",
            "Willingness to travel for local project site deployments",
            "Good team spirit and eagerness to learn"
        ]
    },
    {
        id: "senior-network-engineer",
        title: "SENIOR NETWORK ENGINEER",
        department: "Network & Infrastructure",
        location: "Bengaluru & Enterprise Sites",
        type: "Full-Time",
        experience: "4 - 8 Years",
        description: "Design, configure, and maintain enterprise IP networks, managed switches, routers, firewalls, VLANs, and VPN backbones for large surveillance installations.",
        requirements: [
            "B.E. / B.Tech / Diploma in CS, IT, or Electronics",
            "CCNA / CCNP or equivalent certification preferred",
            "Expertise in L2/L3 managed switches, Subnetting, Router configuration",
            "Hands-on experience with VPN, Firewall, and Network Security"
        ]
    },
    {
        id: "senior-cctv-network-technician",
        title: "SENIOR CCTV NETWORK TECHNICIAN",
        department: "CCTV & Security",
        location: "Bengaluru & Project Sites",
        type: "Full-Time",
        experience: "3 - 6 Years",
        description: "Specialist in IP & Analog CCTV installation, NVR/DVR configuration, Video Management Software (VMS) integration, PTZ calibration, and surveillance network setup.",
        requirements: [
            "Diploma or Technical Certification in Electronics/Networking",
            "Hands-on experience with Hikvision, Dahua, CP Plus, Axis, or Honeywell systems",
            "Expertise in IP addressing, POE switches, and remote access setup",
            "Proven track record in site commissioning and customer handovers"
        ]
    },
    {
        id: "junior-cctv-network-technician",
        title: "JUNIOR CCTV NETWORK TECHNICIAN",
        department: "CCTV & Security",
        location: "Bengaluru & Field Sites",
        type: "Full-Time",
        experience: "1 - 2 Years",
        description: "Assist in CCTV cabling, camera mounting, patch panel termination, basic NVR settings, physical inspection, and field troubleshooting.",
        requirements: [
            "ITI / Diploma in Hardware & Networking or Electronics",
            "Basic understanding of IP networks and surveillance hardware",
            "Field cabling and tool usage proficiency",
            "Strong work ethic and commitment to quality installation"
        ]
    }
];

export default function CareersPage() {
    const [selectedPosition, setSelectedPosition] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [attachedFile, setAttachedFile] = useState<File | null>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const formRef = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        position: "",
        message: ""
    });

    const openApplicationForm = (positionTitle?: string) => {
        const defaultPos = positionTitle || JOB_POSITIONS[0].title;
        setSelectedPosition(defaultPos);
        setFormData((prev) => ({ ...prev, position: defaultPos }));
        setIsModalOpen(true);
        setFormSubmitted(false);
        setErrorMessage(null);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            // Basic validation for file size (< 10MB)
            if (file.size > 10 * 1024 * 1024) {
                alert("File size exceeds 10MB limit. Please upload a smaller file.");
                return;
            }
            setAttachedFile(file);
        }
    };

    const removeFile = () => {
        setAttachedFile(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
        setErrorMessage(null);

        try {
            const payload = new FormData();
            payload.append("position", formData.position);
            payload.append("fullName", formData.fullName);
            payload.append("email", formData.email);
            payload.append("phone", formData.phone);
            payload.append("experience", formData.experience);
            payload.append("message", formData.message);

            if (attachedFile) {
                payload.append("file", attachedFile);
            }

            const res = await fetch("/api/careers", {
                method: "POST",
                body: payload,
            });

            let data;
            try {
                data = await res.json();
            } catch {
                data = null;
            }

            if (res.ok && data?.success) {
                setFormSubmitted(true);
            } else {
                setErrorMessage(data?.error || "Failed to submit application. Please try again.");
            }
        } catch (err) {
            console.error("Career application submission error:", err);
            setErrorMessage("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* ── HERO SECTION ── */}
                <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 bg-white border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center max-w-3xl mx-auto space-y-5">
                            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#0B65C6] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100/60">
                                <Sparkles className="w-3.5 h-3.5 text-[#0B65C6]" />
                                <span>Join SDS Security Team</span>
                            </div>
                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-[1.15]">
                                Build Your Career in <br />
                                <span className="font-semibold text-[#0B65C6]">Next-Gen Security Engineering</span>
                            </h1>
                            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                                We are looking for talented, passionate professionals to join India&apos;s leading electronic, cyber, and manpower security team. Explore our current openings below and apply today.
                            </p>
                            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                                <a
                                    href="#openings"
                                    className="px-7 py-3 bg-[#0B65C6] hover:bg-blue-700 text-white font-medium text-sm rounded-md shadow-sm transition-colors duration-200"
                                >
                                    View Openings
                                </a>
                                <button
                                    onClick={() => openApplicationForm()}
                                    className="px-7 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-sm rounded-md transition-colors duration-200 flex items-center gap-2"
                                >
                                    <span>Submit Resume</span>
                                    <Upload className="w-4 h-4 text-slate-600" />
                                </button>
                            </div>
                        </div>

                        {/* Value Highlights Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14 pt-10 border-t border-slate-100">
                            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0B65C6] flex items-center justify-center shrink-0">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-900">Enterprise Projects</h4>
                                    <p className="text-xs text-slate-500 mt-1">Work on pan-India corporate security & IT infrastructure deployments.</p>
                                </div>
                            </div>
                            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0B65C6] flex items-center justify-center shrink-0">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-900">Collaborative Culture</h4>
                                    <p className="text-xs text-slate-500 mt-1">Join an experienced team of engineers, administrators, and specialists.</p>
                                </div>
                            </div>
                            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0B65C6] flex items-center justify-center shrink-0">
                                    <Award className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-900">Growth & Recognition</h4>
                                    <p className="text-xs text-slate-500 mt-1">Accelerate your career with skill training and leadership opportunities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── JOB OPENINGS LISTINGS ── */}
                <section id="openings" className="py-16 sm:py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                            <div>
                                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#0B65C6] uppercase bg-blue-50 px-3 py-1 rounded-md mb-2">
                                    <Briefcase className="w-3.5 h-3.5" />
                                    <span>Current Opportunities</span>
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">Explore Open Positions</h2>
                            </div>
                            <p className="text-sm text-slate-500 max-w-md">
                                Find the role that matches your skills. Click &ldquo;Apply Now&rdquo; on any position to attach your resume and send your application.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                            {JOB_POSITIONS.map((job) => (
                                <div
                                    key={job.id}
                                    className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between gap-4 group"
                                >
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0B65C6] transition-colors leading-snug">
                                            {job.title}
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => openApplicationForm(job.title)}
                                        className="px-5 py-2.5 bg-[#0B65C6] hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all duration-200 shrink-0 flex items-center gap-1.5"
                                    >
                                        <span>Apply Now</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── GENERAL APPLICATION BANNER ── */}
                <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                            Don&apos;t See a Role That Fits You?
                        </h2>
                        <p className="mt-3 text-sm sm:text-base text-slate-300">
                            We are always looking for passionate talent. Submit your resume to our general candidate pool and we&apos;ll contact you when a matching position opens.
                        </p>
                        <div className="mt-7">
                            <button
                                onClick={() => openApplicationForm("General Application")}
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0B65C6] hover:bg-blue-600 text-white font-semibold text-sm rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
                            >
                                <Upload className="w-4 h-4" />
                                <span>Submit General Resume</span>
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            {/* ── APPLICATION FORM MODAL ── */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200">
                        {/* Modal Header */}
                        <div className="p-6 sm:p-7 border-b border-slate-100 flex items-center justify-between bg-slate-50/80 sticky top-0 z-10">
                            <div>
                                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B65C6] uppercase tracking-wider mb-1">
                                    <Briefcase className="w-3.5 h-3.5" />
                                    <span>Job Application</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">
                                    Apply for Position
                                </h3>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 sm:p-7">
                            {formSubmitted ? (
                                <div className="text-center py-10 space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                                        <CheckCircle2 className="w-10 h-10" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900">Application Submitted!</h4>
                                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                                        Thank you for applying for the <strong className="text-slate-900">{formData.position}</strong> position at SDS Security. Our HR recruitment team will review your resume and contact you soon.
                                    </p>
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="mt-6 px-6 py-2.5 bg-[#0B65C6] text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Close Window
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

                                    {/* Position Applied For */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                            Position Applied For <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            required
                                            disabled={isSubmitting}
                                            value={formData.position}
                                            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0B65C6] focus:border-[#0B65C6] text-sm text-slate-800 bg-white disabled:opacity-60"
                                        >
                                            <option value="General Application">General Application (All Roles)</option>
                                            {JOB_POSITIONS.map((pos) => (
                                                <option key={pos.id} value={pos.title}>
                                                    {pos.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Full Name & Email */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                disabled={isSubmitting}
                                                placeholder="e.g. Rahul Sharma"
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0B65C6] focus:border-[#0B65C6] text-sm text-slate-800 disabled:opacity-60"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                disabled={isSubmitting}
                                                placeholder="rahul@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0B65C6] focus:border-[#0B65C6] text-sm text-slate-800 disabled:opacity-60"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone & Experience */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                disabled={isSubmitting}
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0B65C6] focus:border-[#0B65C6] text-sm text-slate-800 disabled:opacity-60"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                                Total Experience (Years)
                                            </label>
                                            <input
                                                type="text"
                                                disabled={isSubmitting}
                                                placeholder="e.g. 3 Years"
                                                value={formData.experience}
                                                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0B65C6] focus:border-[#0B65C6] text-sm text-slate-800 disabled:opacity-60"
                                            />
                                        </div>
                                    </div>

                                    {/* Resume Upload Attachment Section */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                            Attach Resume / CV (PDF, DOC, DOCX) <span className="text-red-500">*</span>
                                        </label>
                                        {!attachedFile ? (
                                            <label className={`border-2 border-dashed border-slate-300 hover:border-[#0B65C6] rounded-xl p-6 flex flex-col items-center justify-center transition-colors bg-slate-50 hover:bg-blue-50/50 group ${isSubmitting ? "opacity-60 pointer-events-none" : "cursor-pointer"}`}>
                                                <Upload className="w-8 h-8 text-slate-400 group-hover:text-[#0B65C6] mb-2 transition-colors" />
                                                <span className="text-sm font-semibold text-slate-700 group-hover:text-[#0B65C6]">
                                                    Click to upload or drag &amp; drop
                                                </span>
                                                <span className="text-xs text-slate-400 mt-1">
                                                    PDF, DOC, DOCX up to 10MB
                                                </span>
                                                <input
                                                    type="file"
                                                    required
                                                    disabled={isSubmitting}
                                                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                />
                                            </label>
                                        ) : (
                                            <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-xl">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                                                        <FileText className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-slate-900 truncate max-w-xs">
                                                            {attachedFile.name}
                                                        </p>
                                                        <p className="text-xs text-slate-500">
                                                            {(attachedFile.size / (1024 * 1024)).toFixed(2)} MB
                                                        </p>
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    disabled={isSubmitting}
                                                    onClick={removeFile}
                                                    className="p-1.5 rounded-md hover:bg-blue-100 text-slate-500 hover:text-red-600 transition-colors disabled:opacity-50"
                                                    title="Remove File"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {/* Cover Note / Additional Info */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                            Cover Note / Message (Optional)
                                        </label>
                                        <textarea
                                            rows={3}
                                            disabled={isSubmitting}
                                            placeholder="Tell us briefly about your skills or relevant experience..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0B65C6] focus:border-[#0B65C6] text-sm text-slate-800 disabled:opacity-60"
                                        />
                                    </div>

                                    {/* Form Submit Button */}
                                    <div className="pt-3">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-3.5 px-6 bg-[#0B65C6] hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    <span>Submitting Application...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4" />
                                                    <span>Submit Application &amp; Resume</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
