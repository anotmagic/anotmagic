import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { connectDB } from "@/lib/mongodb";
import Blog from "../../models/Blog";
import { serialize } from "@/lib/blogs";
import RichContent from "../../../components/RichContent";

export const revalidate = 60;

const getBlog = cache(async (slug: string) => {
  await connectDB();
  const doc = await Blog.findOne({ slug, status: "approved" }).lean();
  return doc ? serialize(doc) : null;
});

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlog((await params).slug);
  if (!blog) return {};
  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords,
    authors: [{ name: blog.authorName }],
    alternates: { canonical: `/blog/${blog.slug}` },
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.description,
      images: blog.image ? [blog.image] : [],
      publishedTime: blog.createdAt,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: blog.image ? [blog.image] : [],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const blog = await getBlog((await params).slug);
  if (!blog) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: blog.image || undefined,
    keywords: blog.keywords.join(", "),
    author: { "@type": "Person", name: blog.authorName },
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt,
  };

  return (
    <article className="max-w-[720px] mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="font-serif text-4xl text-[#10262e] leading-tight">
        {blog.title}
      </h1>
      <p className="text-[#37535e] mt-3 text-lg">{blog.description}</p>
      <p className="text-sm text-[#17787a] mt-4">
        By {blog.authorName} ·{" "}
        {new Date(blog.createdAt).toLocaleDateString("en-IN", {
          dateStyle: "long",
        })}
      </p>
      {blog.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full mt-8 object-cover max-h-[420px]"
        />
      )}
      <div className="mt-8">
        <RichContent html={blog.content} />
      </div>
      {blog.keywords.length > 0 && (
        <div className="mt-10 flex gap-2 flex-wrap">
          {blog.keywords.map((k) => (
            <span
              key={k}
              className="text-[12px] border border-[#c3d0d2] px-2.5 py-1 text-[#37535e]"
            >
              {k}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
