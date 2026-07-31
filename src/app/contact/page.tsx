import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | SDS Security",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="text-center space-y-4 max-w-md">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full border border-amber-200">
                    🚧 Page Under Construction
                </div>
                <h1 className="text-3xl font-bold text-slate-900">Contact Us</h1>
                <p className="text-slate-500 text-base">We&apos;re working on this page. Check back soon!</p>
                <a href="/" className="inline-block mt-4 text-sm text-[#0B65C6] hover:underline">← Back to Home</a>
            </div>
        </main>
    );
}
