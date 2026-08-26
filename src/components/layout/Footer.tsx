import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/constants/siteConfig";
import { ContactForm } from "@/components/sections/ContactForm";

// Simple inline social icon components (using SVGs)
function XIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}
function FbIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.313 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
        </svg>
    );
}
function IgIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.228.415a4.48 4.48 0 011.625 1.057 4.48 4.48 0 011.058 1.625c.166.423.361 1.058.415 2.228.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.415 2.228a4.48 4.48 0 01-1.058 1.625 4.48 4.48 0 01-1.625 1.058c-.423.166-1.058.361-2.228.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.228-.415a4.48 4.48 0 01-1.625-1.058 4.48 4.48 0 01-1.057-1.625c-.166-.423-.361-1.058-.415-2.228C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.249-1.805.415-2.228a4.48 4.48 0 011.057-1.625A4.48 4.48 0 015.33 2.24c.423-.166 1.058-.361 2.228-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.902.333 4.14.63a6.638 6.638 0 00-2.398 1.562A6.638 6.638 0 00.18 4.59C-.117 5.354-.32 6.227-.378 7.504-.436 8.784-.45 9.193-.45 12.45c0 3.258.014 3.667.072 4.947.058 1.277.261 2.15.558 2.912a6.638 6.638 0 001.562 2.398 6.638 6.638 0 002.398 1.563c.762.297 1.635.5 2.912.558 1.28.058 1.689.072 4.947.072s3.667-.014 4.947-.072c1.277-.058 2.15-.261 2.912-.558a6.638 6.638 0 002.398-1.563 6.638 6.638 0 001.563-2.398c.297-.762.5-1.635.558-2.912C23.986 15.117 24 14.708 24 11.45s-.014-3.667-.072-4.947c-.058-1.277-.261-2.15-.558-2.912a6.638 6.638 0 00-1.563-2.398A6.638 6.638 0 0019.41.63c-.762-.297-1.635-.5-2.912-.558C15.218.014 14.809 0 11.55 0H12v.001z" />
            <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
    );
}
function YtIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a2.958 2.958 0 00-2.08-2.092C19.505 3.6 12 3.6 12 3.6s-7.505 0-9.418.494A2.958 2.958 0 00.502 6.186 31.02 31.02 0 000 12a31.02 31.02 0 00.502 5.814 2.958 2.958 0 002.08 2.092C4.495 20.4 12 20.4 12 20.4s7.505 0 9.418-.494a2.958 2.958 0 002.08-2.092A31.02 31.02 0 0024 12a31.02 31.02 0 00-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    );
}


export function Footer() {
    return (
        <>
            <ContactForm />
            <footer className="bg-slate-100 text-slate-700 border-t border-slate-200">
                {/* ── Top section: Logo + Nav columns ── */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Logo */}
                        <div className="lg:col-span-1 flex items-start">
                            <Link href="/">
                                <Image
                                    src="/logos/SDS Logo FNL-02 2-1.png"
                                    alt="SDS Security"
                                    width={180}
                                    height={80}
                                    className="h-20 w-auto object-contain"
                                />
                            </Link>
                        </div>

                        {/* Categories */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-slate-900 tracking-wide">Categories</h4>
                            <ul className="space-y-2.5 text-sm text-slate-600">
                                <li>
                                    <Link href={ROUTES.PRODUCTS} className="hover:text-[#0B65C6] transition-colors">
                                        View All
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-slate-900 tracking-wide">Company</h4>
                            <ul className="space-y-2.5 text-sm text-slate-600">
                                <li><Link href="/" className="hover:text-[#0B65C6] transition-colors">Home</Link></li>
                                <li><Link href={ROUTES.ABOUT} className="hover:text-[#0B65C6] transition-colors">About us</Link></li>
                                <li><Link href={ROUTES.CAREERS} className="hover:text-[#0B65C6] transition-colors">Careers</Link></li>
                                <li><Link href={ROUTES.PRODUCTS} className="hover:text-[#0B65C6] transition-colors">Products</Link></li>
                                <li><Link href={ROUTES.SERVICES.ELECTRONIC_SECURITY} className="hover:text-[#0B65C6] transition-colors">Services</Link></li>
                                <li><Link href={ROUTES.BLOG} className="hover:text-[#0B65C6] transition-colors">Blog</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-slate-900 tracking-wide">Contact</h4>
                            <ul className="space-y-2.5 text-sm text-slate-600">
                                <li>
                                    <Link href={ROUTES.CONTACT} className="hover:text-[#0B65C6] transition-colors flex items-center gap-2">
                                        <span>💬</span> Contact us
                                    </Link>
                                </li>
                                <li>
                                    <a href="mailto:office@sreesecure.com" className="hover:text-[#0B65C6] transition-colors flex items-center gap-2">
                                        <span>✉️</span> office@sreesecure.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+919900097078" className="hover:text-[#0B65C6] transition-colors flex items-center gap-2">
                                        <span>📞</span> 9900097078
                                    </a>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-[#0B65C6] transition-colors flex items-center gap-2">
                                        <span>📋</span> Register a complaint
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ── Address row ── */}
                <div className="border-t border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-slate-600">
                            <div className="space-y-1.5">
                                <p className="font-semibold text-slate-900 text-[13px]">Headquarters</p>
                                <p className="leading-relaxed">Novel Tech Park, Ground Floor, Room No.9,Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, H.S, R Extension, Bengaluru, Karnataka 560068</p>
                            </div>
                            <div className="space-y-1.5">
                                <p className="font-semibold text-slate-900 text-[13px]">Chennai</p>
                                <p className="leading-relaxed">#14, W Jones Rd, West Saidapet, Saidapet, Chennai, Tamil Nadu 600015</p>
                            </div>
                            <div className="space-y-1.5">
                                <p className="font-semibold text-slate-900 text-[13px]">Hyderabad</p>
                                <p className="leading-relaxed">Aditya Mist, Green Hamlet, Hanuman Nagar, Silpa Park, Kondapur, Hyderabad–500084</p>
                            </div>
                            <div className="space-y-1.5">
                                <p className="font-semibold text-slate-900 text-[13px]">Our Presence in</p>
                                <p className="leading-relaxed">Manglore, Kochi, Noida</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Bottom bar: social + copyright + legal ── */}
                <div className="border-t border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <a href="#" aria-label="X / Twitter" className="text-slate-500 hover:text-[#0B65C6] transition-colors">
                                <XIcon />
                            </a>
                            <a href="#" aria-label="Facebook" className="text-slate-500 hover:text-[#0B65C6] transition-colors">
                                <FbIcon />
                            </a>
                            <a href="#" aria-label="Instagram" className="text-slate-500 hover:text-[#0B65C6] transition-colors">
                                <IgIcon />
                            </a>
                            <a href="#" aria-label="YouTube" className="text-slate-500 hover:text-[#0B65C6] transition-colors">
                                <YtIcon />
                            </a>
                        </div>

                        {/* Copyright */}
                        <p className="text-xs text-slate-500 text-center">
                            © {new Date().getFullYear()} SDS All rights reserved
                        </p>

                        {/* Legal links */}
                        <div className="flex items-center gap-3 text-xs text-slate-500 flex-wrap justify-center">
                            <Link href={ROUTES.PRIVACY_POLICY} className="hover:text-[#0B65C6] transition-colors">Privacy Policy</Link>
                            <span>•</span>
                            <Link href={ROUTES.TERMS} className="hover:text-[#0B65C6] transition-colors">Terms &amp; Conditions</Link>
                            <span>•</span>
                            <Link href={ROUTES.REFUND_POLICY} className="hover:text-[#0B65C6] transition-colors">Refund Policy</Link>
                            <span>•</span>
                            <Link href={ROUTES.SHIPPING_POLICY} className="hover:text-[#0B65C6] transition-colors">Shipping &amp; Delivery</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
