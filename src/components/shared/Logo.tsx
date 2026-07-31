import Link from "next/link";

interface LogoProps {
    className?: string;
}

export function Logo({ className = "" }: LogoProps) {
    return (
        <Link href="/" className={`inline-flex items-center group ${className}`}>
            <img
                src="/logos/SDS Logo FNL-02 2-1.png"
                alt="SDS Security - Sreesecure Design Solutions Pvt. Ltd."
                className="h-12 sm:h-16 lg:h-20 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
        </Link>
    );
}

