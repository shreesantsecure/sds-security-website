"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blogs";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts =
        selectedCategory === "All"
            ? BLOG_POSTS
            : BLOG_POSTS.filter((post) => post.category === selectedCategory);

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
            <Navbar />

            <main className="flex-grow py-10 sm:py-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    {/* Header Section */}
                    <div className="space-y-2">
                        <span className="text-sm font-medium text-slate-500 block">
                            Blogs
                        </span>
                        <h1 className="text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight">
                            News &amp; Insights on Modern Security
                        </h1>
                    </div>

                    {/* Filter Categories Bar & Sort Dropdown */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                            {BLOG_CATEGORIES.map((cat) => {
                                const isActive = selectedCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-4 py-1.5 text-sm rounded-full transition-all whitespace-nowrap border ${isActive
                                                ? "border-[#0B65C6] text-[#0B65C6] font-medium bg-blue-50/50"
                                                : "border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="relative inline-block self-end md:self-auto shrink-0">
                            <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 font-medium px-3 py-1.5 rounded-md hover:bg-slate-100 transition-colors">
                                <span>Most recent</span>
                                <ChevronDown className="w-4 h-4 text-slate-500" />
                            </button>
                        </div>
                    </div>

                    {/* Blog Posts List (Horizontal Cards) */}
                    <div className="space-y-10 pt-4">
                        {filteredPosts.map((post) => (
                            <article
                                key={post.id}
                                className="flex flex-col md:flex-row gap-6 md:gap-8 items-start border-b border-slate-100 pb-10 group"
                            >
                                {/* Thumbnail Image */}
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="w-full md:w-72 lg:w-80 h-52 sm:h-56 rounded-2xl overflow-hidden shrink-0 bg-slate-100 block"
                                >
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </Link>

                                {/* Article Info */}
                                <div className="flex-1 flex flex-col justify-between space-y-3 py-1 w-full">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="inline-block px-3.5 py-1 rounded-full border border-sky-200 text-sky-700 text-xs font-medium">
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-slate-400 font-medium">
                                            {post.date}
                                        </span>
                                    </div>

                                    <div className="space-y-2">
                                        <Link href={`/blog/${post.slug}`}>
                                            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 group-hover:text-[#0B65C6] transition-colors leading-snug">
                                                {post.title}
                                            </h2>
                                        </Link>

                                        <p className="text-slate-500 text-sm sm:text-base line-clamp-2 sm:line-clamp-3 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="pt-2">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-1.5 text-[#0B65C6] font-semibold text-sm hover:gap-2.5 transition-all"
                                        >
                                            <span>Read More</span>
                                            <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}

                        {filteredPosts.length === 0 && (
                            <div className="text-center py-16 text-slate-500">
                                No blog posts found in this category.
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
