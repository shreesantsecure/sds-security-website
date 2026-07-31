"use client";

import Image from "next/image";

export function PartnersClients() {
    return (
        <section className="py-16 bg-white border-b border-slate-100 overflow-hidden">
            <div className="space-y-14">
                {/* ─── Our Partners (Sliding LEFT - Frame SVG Architecture) ────── */}
                <div className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight text-center">
                        Our Partners
                    </h2>

                    {/* Marquee Track Container with Edge Gradient Fades */}
                    <div className="relative w-full overflow-hidden py-4">
                        {/* Left & Right Gradient Overlay Masks */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                        {/* Infinite Marquee Track (Left Direction) */}
                        <div className="flex w-max animate-marquee-left gap-12 items-center">
                            <div className="relative h-14 w-auto shrink-0 flex items-center">
                                <Image
                                    src="/logos/partners-frame.svg"
                                    alt="Our Partners"
                                    width={2400}
                                    height={50}
                                    className="h-12 w-auto object-contain max-w-none"
                                    priority
                                />
                            </div>
                            <div className="relative h-14 w-auto shrink-0 flex items-center">
                                <Image
                                    src="/logos/partners-frame.svg"
                                    alt="Our Partners Duplicate"
                                    width={2400}
                                    height={50}
                                    className="h-12 w-auto object-contain max-w-none"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider line */}
                <div className="w-full max-w-4xl mx-auto border-t border-slate-100" />

                {/* ─── Our Recent Clients (Sliding RIGHT - Frame SVG Architecture) ─ */}
                <div className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight text-center">
                        Our Recent Clients
                    </h2>

                    {/* Marquee Track Container with Edge Gradient Fades */}
                    <div className="relative w-full overflow-hidden py-4">
                        {/* Left & Right Gradient Overlay Masks */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                        {/* Infinite Marquee Track (Right Direction) */}
                        <div className="flex w-max animate-marquee-right gap-12 items-center">
                            <div className="relative h-14 w-auto shrink-0 flex items-center">
                                <Image
                                    src="/logos/clients-frame.svg"
                                    alt="Our Recent Clients"
                                    width={2400}
                                    height={50}
                                    className="h-12 w-auto object-contain max-w-none"
                                    priority
                                />
                            </div>
                            <div className="relative h-14 w-auto shrink-0 flex items-center">
                                <Image
                                    src="/logos/clients-frame.svg"
                                    alt="Our Recent Clients Duplicate"
                                    width={2400}
                                    height={50}
                                    className="h-12 w-auto object-contain max-w-none"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
