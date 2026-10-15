import { NextResponse } from "next/server";
import { createBlog } from "@/lib/blogs";

// Public submission → always saved as "pending"
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  // Honeypot: real users never fill this hidden field
  if (body.website) return NextResponse.json({ ok: true });

  const res = await createBlog(body, { isAdmin: false });
  if (res.error) return NextResponse.json({ error: res.error }, { status: 400 });
  return NextResponse.json({ ok: true });
}
