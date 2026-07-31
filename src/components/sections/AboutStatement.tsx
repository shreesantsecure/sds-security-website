"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Logo } from "@/components/shared/Logo";

export function AboutStatement() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                {/* Paragraph Statement matching reference screenshot 2 */}
                <div className="w-full">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-600 leading-relaxed tracking-normal text-left">
                        <span className="font-normal text-slate-800">Sreesecure Design Solutions Pvt. Ltd.</span>{" "}
                        is a next-generation security company offering electronic security, cybersecurity, and manpower security services across India. We blend technology, strategy, and experience to build end-to-end protection systems that are intelligent, responsive, and future-ready.
                    </p>
                </div>

                {/* Corporate Conference Room Image matching full width in reference screenshot */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 w-full">
                    <img
                        src="/images/conf_room.png"
                        alt="Sreesecure Design Solutions Team Meeting"
                        className="w-full h-[420px] sm:h-[540px] object-cover"
                    />
                </div>

                {/* Stats Row matching image_5 */}
                <div
                    ref={ref}
                    className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-100 px-2"
                >
                    {/* Left: Logo & Coverage Label */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                        <Logo />
                        <span className="hidden sm:block text-slate-300 font-light text-2xl">|</span>
                        <h3 className="text-xl font-bold text-[#0B65C6]">Residential Coverage</h3>
                    </div>

                    {/* Right: Counter 800+ */}
                    <div className="text-center sm:text-right">
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-lime-600 tracking-tight">
                            {inView ? <CountUp end={800} duration={2.5} /> : "0"} +
                        </div>
                        <p className="text-sm font-medium text-slate-500 mt-1">
                            Resident (properties covered)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
