//app/api/admin/login/route.ts
import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { createAdminSession } from "@/lib/auth";

export async function POST(req: Request) {
  if (!process.env.ADMIN_PASSWORD || !process.env.JWT_SECRET) {
    return NextResponse.json(
      {
        error:
          "Server misconfigured: ADMIN_PASSWORD or JWT_SECRET is missing. Check .env.local and restart the dev server.",
      },
      { status: 500 },
    );
  }

  const { password } = await req.json().catch(() => ({ password: "" }));
  const a = Buffer.from(String(password));
  const b = Buffer.from(process.env.ADMIN_PASSWORD);
  const ok = a.length === b.length && timingSafeEqual(a, b);
  if (!ok)
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });

  try {
    await createAdminSession();
  } catch (e) {
    console.error("Session error:", e);
    return NextResponse.json(
      { error: "Could not create session. Check JWT_SECRET." },
      { status: 500 },
    );
  }
  return NextResponse.json({ ok: true });
}
