import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import BlogForm from "@/components/BlogForm";

export const metadata = { robots: { index: false, follow: false } };

export default async function AdminWrite() {
  if (!(await isAdmin())) redirect("/admin/login");
  return (
    <main className="max-w-[760px] mx-auto px-6 py-12">
      <h1 className="font-serif text-3xl text-[#10262e] mb-8">Write a post (publishes immediately)</h1>
      <BlogForm endpoint="/api/admin/blogs" admin />
    </main>
  );
}
