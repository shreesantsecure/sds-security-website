"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
    {
        src: "/images/blog_2_banner.png",
        alt: "SDS Security - Electronic Security",
    },
    {
        src: "/images/blog_3_banner.png",
        alt: "SDS Security - Cyber Security",
    },
    {
        src: "/images/blog_detail_img.png",
        alt: "SDS Security - Manpower Security",
    },
];

export function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4500);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[82vh] min-h-[580px] flex items-center overflow-hidden bg-slate-900">
            {/* Sliding Background Images */}
            {slides.map((slide, index) => (
                <div
                    key={slide.src}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
                    style={{
                        backgroundImage: `url('${slide.src}')`,
                        opacity: index === current ? 1 : 0,
                        zIndex: index === current ? 1 : 0,
                    }}
                    aria-hidden={index !== current}
                />
            ))}

            {/* Dark Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/40" />
            <div className="absolute inset-0 z-10 bg-black/25" />

            {/* Hero Content Container matching reference screenshot */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl space-y-6 text-left">
                    {/* Heading */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.1]">
                        Sreesecure Design Solutions Pvt. Ltd. <br />
                        <span className="font-bold text-white">Your Trust, Our Protection.</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg text-slate-300 font-normal max-w-xl leading-relaxed">
                        Secure solutions designed with precision, backed by integrity.
                    </p>

                    {/* Single Outline Button */}
                    <div className="pt-2">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-white/50 bg-white/5 hover:bg-white/15 text-white text-sm font-normal backdrop-blur-sm transition-all"
                        >
                            Get a quote
                        </Link>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1 rounded-full transition-all duration-500 ${i === current ? "w-10 bg-white" : "w-4 bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
