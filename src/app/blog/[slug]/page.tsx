import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/data/blogs";
import { ArrowLeft, Calendar, Clock, Share2, ArrowUpRight, ShieldCheck } from "lucide-react";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) {
        return {
            title: "Article Not Found | SDS Security",
        };
    }
    return {
        title: `${post.title} | SDS Security Blog`,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
            <Navbar />

            <main className="flex-grow py-10 sm:py-16">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                    {/* Back Link & Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-1 hover:text-[#0B65C6] transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to Blogs</span>
                        </Link>
                        <span>/</span>
                        <span className="text-slate-400 truncate max-w-xs">{post.category}</span>
                    </div>

                    {/* Article Header */}
                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="px-3.5 py-1 rounded-full border border-sky-200 text-sky-700 text-xs font-semibold">
                                {post.category}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                                <Calendar className="w-3.5 h-3.5" />
                                {post.date}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                                <Clock className="w-3.5 h-3.5" />
                                {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.25] tracking-tight">
                            {post.title}
                        </h1>

                        {/* Author Info */}
                        <div className="flex items-center justify-between pt-4 border-t border-b border-slate-100 py-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#0B65C6] font-bold text-sm">
                                    SDS
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-900">
                                        {post.author.name}
                                    </div>
                                    <div className="text-xs text-slate-500">
                                        {post.author.role}
                                    </div>
                                </div>
                            </div>

                            <button className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#0B65C6] font-medium border border-slate-200 px-3 py-1.5 rounded-full transition-colors">
                                <Share2 className="w-3.5 h-3.5" />
                                <span>Share</span>
                            </button>
                        </div>
                    </div>

                    {/* Hero Featured Image */}
                    <div className="w-full h-[320px] sm:h-[420px] rounded-3xl overflow-hidden shadow-lg bg-slate-100">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Article Body Content */}
                    <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
                        {/* Intro Paragraphs */}
                        {post.content.intro.map((p, idx) => (
                            <p key={idx}>{p}</p>
                        ))}

                        {/* Highlight Callout Box */}
                        <div className="my-8 p-6 bg-gradient-to-r from-blue-50 to-sky-50 border-l-4 border-[#0B65C6] rounded-r-2xl space-y-2">
                            <div className="flex items-center gap-2 text-[#0B65C6] font-bold text-sm uppercase tracking-wide">
                                <ShieldCheck className="w-5 h-5" />
                                <span>Sreesecure Design Solutions Pvt Ltd</span>
                            </div>
                            <p className="text-slate-800 font-medium text-base sm:text-lg italic">
                                &quot;We combine Next-gen electronic surveillance, AI-led analytics, and expert technical support to deliver customized 24/7 security systems for Indian enterprises and smart homes.&quot;
                            </p>
                        </div>

                        {/* Sections */}
                        {post.content.sections?.map((sec, idx) => (
                            <div key={idx} className="space-y-3 pt-4">
                                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                                    {sec.title}
                                </h2>
                                {sec.text.split("\n\n").map((paragraph, pIdx) => (
                                    <p key={pIdx}>{paragraph}</p>
                                ))}
                            </div>
                        ))}

                        {/* Conclusion */}
                        {post.content.conclusion && (
                            <div className="space-y-4 pt-6 border-t border-slate-200">
                                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                                    The Future of Security
                                </h2>
                                {post.content.conclusion.map((p, idx) => (
                                    <p key={idx}>{p}</p>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* CTA Banner at Bottom of Post */}
                    <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                        <div className="space-y-2 max-w-xl">
                            <h3 className="text-2xl font-bold">
                                Upgrade Your Security Infrastructure Today
                            </h3>
                            <p className="text-slate-300 text-sm">
                                Talk with our expert engineers at Sreesecure Design Solutions for a customized CCTV, Cyber, or Access Control assessment.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="px-6 py-3 bg-[#0B65C6] hover:bg-blue-600 text-white font-medium text-sm rounded-xl transition-colors shrink-0 shadow-md"
                        >
                            Get Free Quote
                        </Link>
                    </div>

                    {/* Related Posts */}
                    <div className="pt-12 border-t border-slate-200 space-y-6">
                        <h3 className="text-2xl font-bold text-slate-900">
                            Related Articles
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((rel) => (
                                <Link
                                    key={rel.id}
                                    href={`/blog/${rel.slug}`}
                                    className="group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-all flex flex-col bg-white"
                                >
                                    <div className="h-40 overflow-hidden bg-slate-100">
                                        <img
                                            src={rel.image}
                                            alt={rel.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                                        <span className="text-xs font-semibold text-sky-700">
                                            {rel.category}
                                        </span>
                                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0B65C6] transition-colors line-clamp-2">
                                            {rel.title}
                                        </h4>
                                        <span className="inline-flex items-center gap-1 text-xs text-[#0B65C6] font-semibold pt-2">
                                            Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
