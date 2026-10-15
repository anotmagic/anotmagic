import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { createBlog } from "@/lib/blogs";

// Admin's own post → published immediately
export async function POST(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json().catch(() => ({}));
  const res = await createBlog(body, { isAdmin: true });
  if (res.error) return NextResponse.json({ error: res.error }, { status: 400 });
  return NextResponse.json({ ok: true, slug: res.blog!.slug });
}
