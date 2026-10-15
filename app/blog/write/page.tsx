import BlogForm from "@/components/BlogForm";

export const metadata = {
  title: "Write for us",
  description: "Submit a blog post. Posts are reviewed by our team before publishing.",
};

export default function WritePage() {
  return (
    <main className="max-w-[760px] mx-auto px-6 py-12">
      <h1 className="font-serif text-3xl text-[#10262e] mb-2">Write for us</h1>
      <p className="text-[#37535e] mb-8">Every submission is reviewed before it appears on the site.</p>
      <BlogForm endpoint="/api/blogs" />
    </main>
  );
}
