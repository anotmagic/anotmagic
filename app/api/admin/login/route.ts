import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { createAdminSession } from "@/lib/auth";

export async function POST(req: Request) {
  const { password } = await req.json().catch(() => ({ password: "" }));
  const expected = process.env.ADMIN_PASSWORD ?? "";
  const a = Buffer.from(String(password));
  const b = Buffer.from(expected);
  const ok = expected.length > 0 && a.length === b.length && timingSafeEqual(a, b);
  if (!ok) return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  await createAdminSession();
  return NextResponse.json({ ok: true });
}
