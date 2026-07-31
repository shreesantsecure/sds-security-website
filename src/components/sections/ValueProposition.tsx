"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Video, Camera, Fingerprint, BellRing, ChevronLeft, ChevronRight } from "lucide-react";

const features = [
    {
        id: 1,
        title: "Smart Video Door Phones",
        description:
            "View and communicate with visitors before granting access using user-friendly smart video door phones.",
        icon: Video,
    },
    {
        id: 2,
        title: "CCTV Camera Installation",
        description:
            "Ensure the safety of your home or business with professional CCTV installation that offers 24/7 real-time surveillance.",
        icon: Camera,
    },
    {
        id: 3,
        title: "Biometrics and RFID Access Systems",
        description:
            "Manage access effectively with cutting-edge biometric and RFID systems designed for secure and intelligent entry control.",
        icon: Fingerprint,
    },
    {
        id: 4,
        title: "Alarm Systems",
        description:
            "Safeguard your premises with dependable fire, theft, and intrusion alarm systems that notify you immediately.",
        icon: BellRing,
    },
];

export function ValueProposition() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const total = features.length;

    const nextCard = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % total);
    }, [total]);

    const prevCard = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + total) % total);
    }, [total]);

    // Auto-slide every 3.5 seconds unless hovered
    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            nextCard();
        }, 3500);
        return () => clearInterval(timer);
    }, [isHovered, nextCard]);

    // Calculate relative positioning for 3D stack orbit layout
    const getCardStyle = (index: number) => {
        const relIndex = (index - activeIndex + total) % total;

        switch (relIndex) {
            case 0:
                // Front Center (Active / Focused Card)
                return {
                    x: "0%",
                    y: 65,
                    scale: 1,
                    opacity: 1,
                    zIndex: 30,
                    filter: "blur(0px)",
                    borderColor: "rgba(56, 189, 248, 0.6)", // sky-400
                    bgClass: "bg-sky-50/95 border-2 border-sky-400/80 shadow-2xl shadow-sky-500/20",
                    iconBg: "bg-[#0B65C6] text-white shadow-lg shadow-sky-600/30",
                    titleColor: "text-[#0B65C6]",
                    active: true,
                };
            case 1:
                // Right Card
                return {
                    x: "82%",
                    y: -10,
                    scale: 0.88,
                    opacity: 0.75,
                    zIndex: 20,
                    filter: "blur(0.5px)",
                    bgClass: "bg-sky-50/50 border border-sky-100/90 shadow-md hover:bg-sky-50/80",
                    iconBg: "bg-[#0B65C6]/90 text-white",
                    titleColor: "text-slate-800",
                    active: false,
                };
            case 2:
                // Top / Back Center Card (Positioned higher up to peek out prominently behind front card)
                return {
                    x: "0%",
                    y: -105,
                    scale: 0.78,
                    opacity: 0.55,
                    zIndex: 10,
                    filter: "blur(0.5px)",
                    bgClass: "bg-sky-50/40 border border-sky-100/70 shadow-sm hover:bg-sky-50/70",
                    iconBg: "bg-[#0B65C6]/75 text-white",
                    titleColor: "text-slate-700",
                    active: false,
                };
            case 3:
                // Left Card
                return {
                    x: "-82%",
                    y: -10,
                    scale: 0.88,
                    opacity: 0.75,
                    zIndex: 20,
                    filter: "blur(0.5px)",
                    bgClass: "bg-sky-50/50 border border-sky-100/90 shadow-md hover:bg-sky-50/80",
                    iconBg: "bg-[#0B65C6]/90 text-white",
                    titleColor: "text-slate-800",
                    active: false,
                };
            default:
                return {
                    x: "0%",
                    y: 0,
                    scale: 0.7,
                    opacity: 0,
                    zIndex: 0,
                    filter: "blur(2px)",
                    bgClass: "bg-sky-50/30",
                    iconBg: "bg-[#0B65C6]",
                    titleColor: "text-slate-700",
                    active: false,
                };
        }
    };

    return (
        <section className="py-20 md:py-28 bg-slate-50/50 overflow-hidden relative select-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Your Protection, Our Promise <br />
                        <span className="text-[#0B65C6]">Always There for You</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        We're committed to keeping you safe with reliable, tailored security solutions. Trust us to protect what matters most, anytime, anywhere.
                    </p>
                </div>

                {/* 3D Orbit Card Stack Container */}
                <div
                    className="relative w-full max-w-5xl mx-auto h-[440px] sm:h-[480px] flex items-center justify-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const style = getCardStyle(index);

                        return (
                            <motion.div
                                key={feature.id}
                                initial={false}
                                animate={{
                                    x: style.x,
                                    y: style.y,
                                    scale: style.scale,
                                    opacity: style.opacity,
                                    zIndex: style.zIndex,
                                    filter: style.filter,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 180,
                                    damping: 24,
                                    mass: 0.8,
                                }}
                                onClick={() => setActiveIndex(index)}
                                className={`absolute w-[300px] sm:w-[380px] md:w-[440px] rounded-2xl p-6 sm:p-8 cursor-pointer transition-colors duration-300 ${style.bgClass}`}
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    top: "22%",
                                    transformOrigin: "center center",
                                    translateX: "-50%",
                                }}
                            >
                                <div className="space-y-5 sm:space-y-6 text-center">
                                    {/* Icon Badge */}
                                    <div
                                        className={`mx-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${style.iconBg}`}
                                    >
                                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className={`text-lg sm:text-xl font-bold leading-snug transition-colors duration-300 ${style.titleColor}`}
                                    >
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[48px]">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Controls & Pagination Indicators */}
                <div className="flex items-center justify-center gap-6 mt-8 sm:mt-12">
                    <button
                        onClick={prevCard}
                        className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-sky-50 hover:text-[#0B65C6] hover:border-sky-300 shadow-sm transition-all duration-200"
                        aria-label="Previous card"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-2">
                        {features.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex
                                    ? "w-8 bg-[#0B65C6]"
                                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextCard}
                        className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-sky-50 hover:text-[#0B65C6] hover:border-sky-300 shadow-sm transition-all duration-200"
                        aria-label="Next card"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}

