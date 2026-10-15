import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Blog from "../../../../models/Blog";

type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Ctx) {
  if (!(await isAdmin()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const { status } = await req.json().catch(() => ({}));
  if (!["approved", "rejected", "pending"].includes(status))
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  await connectDB();
  await Blog.findByIdAndUpdate(id, { status });
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  if (!(await isAdmin()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  await connectDB();
  await Blog.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}
