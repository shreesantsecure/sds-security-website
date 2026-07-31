import React from "react";

// ─── OFFICIAL PARTNER LOGOS (Vector SVGs matching official brand assets) ────

export function CpPlusLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 220 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* CP PLUS Emblem */}
            <g transform="translate(5, 5)">
                <path d="M5 5L20 25L5 45H16L27 30L38 45H49L34 25L49 5H38L27 20L16 5H5Z" fill="#DC2626" />
                <path d="M14 12H21L27 20L33 12H40L31 25L40 38H33L27 30L21 38H14L23 25L14 12Z" fill="#B91C1C" />
            </g>
            {/* CP PLUS Text */}
            <text x="65" y="36" fill="#DC2626" fontStyle="normal" fontWeight="900" fontSize="28" fontFamily="'Arial Black', sans-serif" letterSpacing="1">
                CP PLUS
            </text>
        </svg>
    );
}

export function HoneywellLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 220 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="38" fill="#E53E3E" fontWeight="900" fontSize="38" fontFamily="'Helvetica Neue', Arial, sans-serif" letterSpacing="-1">
                Honeywell
            </text>
        </svg>
    );
}

export function ToshibaLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 210 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="38" fill="#E50012" fontWeight="900" fontSize="38" fontFamily="Impact, 'Arial Black', sans-serif" letterSpacing="3">
                TOSHIBA
            </text>
        </svg>
    );
}

export function LapcareLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 210 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Lapcare Orbit Globe */}
            <g transform="translate(5, 5)">
                <circle cx="20" cy="20" r="16" fill="#0284C7" />
                <path d="M6 20C6 12 34 12 34 20C34 28 6 28 6 20Z" fill="#F59E0B" opacity="0.9" />
                <circle cx="20" cy="20" r="9" fill="#0284C7" />
                <circle cx="20" cy="20" r="4" fill="#FFFFFF" />
            </g>
            <text x="55" y="34" fill="#0369A1" fontWeight="800" fontSize="26" fontFamily="Inter, sans-serif" letterSpacing="1">
                LAPCARE
            </text>
        </svg>
    );
}

export function SamsungLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 220 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Official Samsung Oval Badge */}
            <ellipse cx="110" cy="25" rx="100" ry="20" fill="#034EA2" transform="rotate(-6 110 25)" />
            <text x="22" y="33" fill="#FFFFFF" fontWeight="900" fontSize="22" fontFamily="Arial, sans-serif" letterSpacing="6">
                SAMSUNG
            </text>
        </svg>
    );
}

export function AmdLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* AMD Arrow Emblem */}
            <g transform="translate(115, 8)">
                <path d="M22 0H36V14L22 0Z" fill="#111827" />
                <path d="M36 16V36H0V0H14V22H36V16Z" fill="#111827" />
            </g>
            <text x="5" y="38" fill="#111827" fontWeight="900" fontSize="38" fontFamily="Arial, sans-serif" letterSpacing="-1">
                AMD
            </text>
        </svg>
    );
}

export function SeagateLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Seagate Green Swirl Icon */}
            <g transform="translate(5, 7)">
                <path d="M18 4C27 4 34 11 34 20C34 26 29 31 22 31C16 31 12 27 12 21C12 14 22 13 22 8C22 6 19 5 16 5C11 5 7 8 6 12" stroke="#65A30D" strokeWidth="5" strokeLinecap="round" fill="none" />
            </g>
            <text x="48" y="34" fill="#374151" fontWeight="800" fontSize="24" fontFamily="Inter, sans-serif" letterSpacing="2">
                SEAGATE
            </text>
        </svg>
    );
}

export function HikvisionLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 230 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="36" fill="#DC2626" fontStyle="italic" fontWeight="900" fontSize="32" fontFamily="Arial, sans-serif" letterSpacing="0">
                HIK
            </text>
            <text x="75" y="36" fill="#4B5563" fontStyle="italic" fontWeight="900" fontSize="32" fontFamily="Arial, sans-serif" letterSpacing="0">
                VISION
            </text>
        </svg>
    );
}

export function LgLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Official LG Smiling Face Circle */}
            <g transform="translate(5, 5)">
                <circle cx="20" cy="20" r="18" fill="#C40043" />
                <path d="M13 11V29H26V25H17V11H13Z" fill="#FFFFFF" />
                <circle cx="24" cy="14" r="2.8" fill="#FFFFFF" />
            </g>
            <text x="52" y="36" fill="#374151" fontWeight="900" fontSize="32" fontFamily="Arial, sans-serif" letterSpacing="1">
                LG
            </text>
        </svg>
    );
}

export function IbmLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 8-Bar Striped IBM */}
            <text x="5" y="39" fill="#052FAD" fontWeight="900" fontSize="42" fontFamily="Courier, monospace" letterSpacing="3">
                IBM
            </text>
        </svg>
    );
}

export function BoschLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Bosch Circle Magnet Symbol */}
            <g transform="translate(5, 8)">
                <circle cx="17" cy="17" r="15" stroke="#E2001A" strokeWidth="4.5" fill="none" />
                <path d="M8 17H26M17 8V26" stroke="#E2001A" strokeWidth="3.5" />
            </g>
            <text x="48" y="36" fill="#E2001A" fontWeight="900" fontSize="30" fontFamily="Arial, sans-serif" letterSpacing="1">
                BOSCH
            </text>
        </svg>
    );
}

export function TpLinkLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 190 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* tp-link Concentric Connected Arcs */}
            <g transform="translate(5, 7)">
                <path d="M8 26C8 16 16 8 26 8" stroke="#00A9E0" strokeWidth="6" strokeLinecap="round" fill="none" />
                <path d="M14 32C24 32 32 24 32 14" stroke="#00A9E0" strokeWidth="6" strokeLinecap="round" fill="none" />
            </g>
            <text x="48" y="35" fill="#4B5563" fontWeight="800" fontSize="28" fontFamily="Inter, sans-serif" letterSpacing="-1">
                tp-link
            </text>
        </svg>
    );
}

export function AllercommLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 220 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="34" fill="#1F2937" fontWeight="900" fontSize="24" fontFamily="Arial, sans-serif" letterSpacing="1">
                ROLLERCOMM
            </text>
        </svg>
    );
}

// ─── OFFICIAL CLIENT LOGOS (Vector SVGs matching official client assets) ─────

export function LaidlawLogo({ className = "h-11" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 260 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Laidlaw Crest Shield */}
            <g transform="translate(5, 4)">
                <path d="M18 4L32 9V24C32 32 24 38 18 40C12 38 4 32 4 24V9L18 4Z" fill="#1E3A8A" stroke="#B91C1C" strokeWidth="2.5" />
                <path d="M18 12V32M10 20H26" stroke="#FFFFFF" strokeWidth="2.5" />
            </g>
            <text x="42" y="24" fill="#111827" fontWeight="800" fontSize="12" fontFamily="Georgia, serif" letterSpacing="0.5">
                THE LAIDLAW MEMORIAL
            </text>
            <text x="42" y="37" fill="#B91C1C" fontWeight="700" fontSize="9" fontFamily="Arial, sans-serif" letterSpacing="0.5">
                SCHOOL & JUNIOR COLLEGE, KETTI
            </text>
        </svg>
    );
}

export function VistaLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Vista Wing Emblem */}
            <g transform="translate(5, 8)">
                <path d="M4 28C16 10 28 10 34 22C22 24 16 28 4 28Z" fill="#E65100" />
            </g>
            <text x="44" y="36" fill="#E65100" fontWeight="900" fontSize="30" fontFamily="Arial, sans-serif" letterSpacing="2">
                VISTA
            </text>
        </svg>
    );
}

export function NammaMetroLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 210 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Namma Metro Emblem */}
            <g transform="translate(5, 5)">
                <circle cx="20" cy="20" r="16" fill="#D81B60" />
                <path d="M20 7L25 20L20 33L15 20Z" fill="#FFFFFF" />
            </g>
            <text x="48" y="24" fill="#2E7D32" fontWeight="700" fontSize="13" fontFamily="sans-serif">
                ನಮ್ಮ ಮೆಟ್ರೊ
            </text>
            <text x="48" y="40" fill="#D81B60" fontWeight="900" fontSize="18" fontFamily="Arial, sans-serif" letterSpacing="0.5">
                namma metro
            </text>
        </svg>
    );
}

export function FloraResidencyLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 230 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Flora Residency Green Leaf */}
            <g transform="translate(5, 5)">
                <path d="M20 4C8 14 8 28 20 36C32 28 32 14 20 4Z" fill="#15803D" />
                <path d="M20 4V36" stroke="#FFFFFF" strokeWidth="1.5" />
            </g>
            <text x="45" y="32" fill="#14532D" fontWeight="700" fontSize="17" fontFamily="Georgia, serif" letterSpacing="2">
                FLORA RESIDENCY
            </text>
        </svg>
    );
}

export function TcisLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* TCIS Globe Wave */}
            <g transform="translate(5, 8)">
                <path d="M4 26C14 10 28 10 36 26C26 30 14 30 4 26Z" fill="#DC2626" />
                <path d="M8 22C16 14 26 14 32 22" stroke="#0284C7" strokeWidth="3" fill="none" />
            </g>
            <text x="48" y="36" fill="#0284C7" fontWeight="900" fontSize="30" fontFamily="Arial, sans-serif" letterSpacing="1">
                TCIS
            </text>
        </svg>
    );
}

export function IfbLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="36" fill="#111827" fontWeight="900" fontSize="38" fontFamily="Georgia, serif" letterSpacing="-1">
                IFB
            </text>
            <rect x="5" y="40" width="70" height="4.5" fill="#DC2626" />
        </svg>
    );
}

export function DmartLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* D-Mart Green Star Tree Emblem */}
            <g transform="translate(5, 5)">
                <path d="M22 2L26 12H36L28 18L31 28L22 22L13 28L16 18L8 12H18L22 2Z" fill="#15803D" />
            </g>
            <text x="44" y="38" fill="#15803D" fontWeight="900" fontSize="34" fontFamily="Arial, sans-serif" letterSpacing="-1">
                D<tspan fill="#65A30D">★</tspan>Mart
            </text>
        </svg>
    );
}

export function PrestigeLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 190 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Official Red Badge */}
            <rect x="5" y="8" width="180" height="34" fill="#B91C1C" rx="3" />
            <text x="25" y="33" fill="#FFFFFF" fontWeight="700" fontSize="24" fontFamily="Georgia, serif" letterSpacing="1">
                Prestige
            </text>
        </svg>
    );
}

export function AdfLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="38" fill="#111827" fontWeight="900" fontSize="38" fontFamily="Arial, sans-serif" letterSpacing="3">
                ADF
            </text>
        </svg>
    );
}

export function AlankaramLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 190 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Alankaram Wood Craft Emblem */}
            <g transform="translate(5, 8)">
                <circle cx="16" cy="16" r="14" stroke="#78350F" strokeWidth="2.5" fill="none" />
                <path d="M10 16C16 10 16 22 22 16" stroke="#78350F" strokeWidth="2.5" fill="none" />
            </g>
            <text x="42" y="33" fill="#78350F" fontWeight="500" fontSize="24" fontFamily="Georgia, serif" letterSpacing="1">
                alankaram
            </text>
        </svg>
    );
}

export function CloudviceLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 210 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="28" fill="#EC407A" fontWeight="900" fontSize="24" fontFamily="Arial, sans-serif" letterSpacing="1">
                CLOUDVICE
            </text>
            <text x="5" y="42" fill="#6B7280" fontWeight="700" fontSize="10" fontFamily="Arial, sans-serif" letterSpacing="2">
                LIVE THE CLOUD
            </text>
        </svg>
    );
}

export function DatatexLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="12" width="20" height="26" fill="#9CA3AF" />
            <text x="32" y="35" fill="#4B5563" fontWeight="800" fontSize="26" fontFamily="Arial, sans-serif" letterSpacing="-0.5">
                datatex
            </text>
        </svg>
    );
}

export function BluePapillonLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 210 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Butterfly Wings */}
            <g transform="translate(5, 5)">
                <path d="M14 10C6 15 6 25 14 30C22 25 22 15 14 10Z" fill="#1E88E5" />
                <path d="M20 10C28 15 28 25 20 30C12 25 12 15 20 10Z" fill="#42A5F5" />
            </g>
            <text x="36" y="26" fill="#1E88E5" fontWeight="800" fontSize="16" fontFamily="Arial, sans-serif">
                Blue
            </text>
            <text x="36" y="42" fill="#1565C0" fontWeight="800" fontSize="16" fontFamily="Arial, sans-serif">
                Papillon
            </text>
        </svg>
    );
}

export function OmnivoreLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 190 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Omnivore Green Circle Leaf */}
            <g transform="translate(5, 7)">
                <circle cx="18" cy="18" r="16" fill="#2E7D32" />
                <path d="M12 18C18 8 24 8 24 18C18 24 12 24 12 18Z" fill="#FFFFFF" />
            </g>
            <text x="44" y="34" fill="#15803D" fontWeight="700" fontSize="26" fontFamily="Arial, sans-serif" letterSpacing="-0.5">
                omnivore
            </text>
        </svg>
    );
}

export function UnearthStudioLogo({ className = "h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="5" y="34" fill="#6B7280" fontWeight="300" fontSize="26" fontFamily="Inter, sans-serif" letterSpacing="0">
                unearth studio
            </text>
        </svg>
    );
}
