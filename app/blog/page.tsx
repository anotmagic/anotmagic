import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import Blog from "../models/Blog";
import { serialize } from "@/lib/blogs";

export const revalidate = 60;
export const metadata = {
  title: "Blog",
  description: "Articles and insights from our team and contributors.",
};

export default async function BlogIndex() {
  await connectDB();
  const blogs = (
    await Blog.find({ status: "approved" }).sort({ createdAt: -1 }).lean()
  ).map(serialize);

  return (
    <main className="max-w-[1100px] mx-auto px-6 py-12">
      <div className="flex justify-between items-end mb-10 flex-wrap gap-3">
        <h1 className="font-serif text-4xl text-[#10262e]">Blog</h1>
        <Link href="/blog/write" className="text-[#17787a]">
          Write for us →
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((b) => (
          <Link
            key={b._id}
            href={`/blog/${b.slug}`}
            className="border border-[#c3d0d2] bg-white block hover:border-[#17787a] transition-colors"
          >
            {b.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-44 object-cover"
              />
            )}
            <div className="p-5">
              <h2 className="font-serif text-xl text-[#10262e]">{b.title}</h2>
              <p className="text-sm text-[#37535e] mt-2">{b.description}</p>
              <p className="text-[12px] text-[#17787a] mt-3">{b.authorName}</p>
            </div>
          </Link>
        ))}
      </div>
      {blogs.length === 0 && <p className="text-[#37535e]">No posts yet.</p>}
    </main>
  );
}
