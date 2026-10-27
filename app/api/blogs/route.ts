import { NextResponse } from "next/server";
import { createBlog } from "@/lib/blogs";
import { clientIp, rateLimit } from "@/lib/rateLimit";

// Public submission → always saved as "pending"
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  if (body.website) return NextResponse.json({ ok: true }); // honeypot

  if (!rateLimit(`blog:${clientIp(req)}`, 5, 60 * 60 * 1000))
    return NextResponse.json({ error: "Too many submissions. Try again later." }, { status: 429 });

  const res = await createBlog(body, { isAdmin: false });
  if (res.error) return NextResponse.json({ error: res.error }, { status: 400 });
  return NextResponse.json({ ok: true });
}
