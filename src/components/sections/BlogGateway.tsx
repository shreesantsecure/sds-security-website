"use client";

import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

import { BLOG_POSTS } from "@/data/blogs";

const samplePosts = BLOG_POSTS.slice(0, 3).map((post, idx) => ({
    id: idx + 1,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    author: post.author.name,
    category: post.category,
    image: post.image,
    slug: post.slug,
}));

export function BlogGateway() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-100 pb-8">
                    <div className="space-y-3 max-w-2xl">
                        <span className="text-xs font-bold text-[#0B65C6] uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full inline-block">
                            Latest Insights
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            News, Articles & Security Advice
                        </h2>
                        <p className="text-slate-600 text-base">
                            Stay informed with expert tips and industry news from Sreesecure Design Solutions.
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#0B65C6] hover:text-sky-700 transition-colors group"
                    >
                        <span>View All Blogs</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Sample Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {samplePosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-slate-50/70 border border-slate-200/70 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span className="absolute top-4 left-4 bg-[#0B65C6] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                                    {post.category}
                                </span>
                            </div>

                            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-4 text-xs text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5 text-sky-600" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <User className="w-3.5 h-3.5 text-sky-600" />
                                            {post.author}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0B65C6] transition-colors leading-snug line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-slate-200/60">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B65C6] group-hover:text-sky-800"
                                    >
                                        <span>Read Article</span>
                                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
