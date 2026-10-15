import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Blog, { BlogDTO } from "../models/Blog";
import { serialize } from "@/lib/blogs";
import AdminActions from "@/components/AdminActions";
import LogoutButton from "@/components/LogoutButton";

export const dynamic = "force-dynamic";
export const metadata = { robots: { index: false, follow: false } };

const TABS = ["pending", "approved", "rejected"] as const;

export default async function AdminDashboard({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  if (!(await isAdmin())) redirect("/admin/login");

  const { status } = await searchParams;
  const active = (TABS as readonly string[]).includes(status ?? "")
    ? status!
    : "pending";

  await connectDB();
  const [docs, counts] = await Promise.all([
    Blog.find({ status: active }).sort({ createdAt: -1 }).lean(),
    Promise.all(TABS.map((t) => Blog.countDocuments({ status: t }))),
  ]);
  const blogs: BlogDTO[] = docs.map(serialize);

  return (
    <main className="max-w-[1000px] mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
        <h1 className="font-serif text-3xl text-[#10262e]">Blog dashboard</h1>
        <div className="flex gap-3">
          <Link
            href="/admin/write"
            className="bg-[#10262e] text-white px-4 py-2 hover:bg-[#17787a] transition-colors"
          >
            Write a post
          </Link>
          <LogoutButton />
        </div>
      </div>

      <div className="flex gap-2 mb-6 border-b border-[#c3d0d2]">
        {TABS.map((t, i) => (
          <Link
            key={t}
            href={`/admin?status=${t}`}
            className={`px-4 py-2 capitalize border-b-2 -mb-px ${
              active === t
                ? "border-[#17787a] text-[#10262e]"
                : "border-transparent text-[#37535e]"
            }`}
          >
            {t} ({counts[i]})
          </Link>
        ))}
      </div>

      {blogs.length === 0 && <p className="text-[#37535e]">Nothing here.</p>}

      <ul className="space-y-4">
        {blogs.map((b) => (
          <li key={b._id} className="border border-[#c3d0d2] bg-white p-5">
            <div className="flex justify-between gap-4 flex-wrap">
              <div className="min-w-0">
                <h2 className="font-serif text-xl text-[#10262e]">{b.title}</h2>
                <p className="text-sm text-[#37535e] mt-1">{b.description}</p>
                <p className="text-[13px] text-[#37535e] mt-2">
                  By <strong>{b.authorName}</strong> · {b.authorEmail}
                  {b.isAdminPost && " · admin post"} ·{" "}
                  {new Date(b.createdAt).toLocaleDateString()}
                </p>
                {b.keywords.length > 0 && (
                  <p className="text-[12px] text-[#17787a] mt-1">
                    {b.keywords.join(" · ")}
                  </p>
                )}
              </div>
              <AdminActions id={b._id} status={b.status} />
            </div>
            <details className="mt-3">
              <summary className="cursor-pointer text-sm text-[#17787a]">
                Preview content
              </summary>
              <p className="whitespace-pre-wrap text-sm text-[#37535e] mt-2">
                {b.content}
              </p>
            </details>
            {b.status === "approved" && (
              <Link
                href={`/blog/${b.slug}`}
                className="text-sm text-[#17787a] mt-3 inline-block"
              >
                View live →
              </Link>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
