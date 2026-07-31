import type { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    return {
        title: slug
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" "),
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;

    return (
        <main>
            {/* Blog post content for slug: {slug} will be built here */}
        </main>
    );
}
