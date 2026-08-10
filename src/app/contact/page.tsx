import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Contact | SDS Security",
    description: "Get in touch with Sreesecure Design Solutions Pvt. Ltd. for custom security solutions, inquiries, or support.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col justify-between">
            <Navbar />
            <div className="flex-1">
                {/* Hero / Header banner for Contact Page */}
                <div className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-normal tracking-tight">Contact Us</h1>
                    <p className="text-slate-400 mt-3 text-base max-w-xl mx-auto font-normal">
                        Reach out to our security experts for personalized assistance, product inquiries, or site assessments.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
