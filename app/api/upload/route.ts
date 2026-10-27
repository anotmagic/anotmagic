import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ImageModel from "@/models/Image";
import { clientIp, rateLimit } from "@/lib/rateLimit";

const MAX = 2 * 1024 * 1024; // 2 MB

// Trust the file's bytes, not the browser-supplied type. SVG is deliberately NOT allowed (script vector).
function sniff(b: Buffer): string | null {
  if (b.length < 12) return null;
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return "image/jpeg";
  if (b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "image/png";
  if (b.subarray(0, 4).toString("ascii") === "RIFF" && b.subarray(8, 12).toString("ascii") === "WEBP") return "image/webp";
  if (b.subarray(0, 3).toString("ascii") === "GIF") return "image/gif";
  return null;
}

export async function POST(req: Request) {
  if (!rateLimit(`upload:${clientIp(req)}`, 15, 10 * 60 * 1000))
    return NextResponse.json({ error: "Too many uploads. Wait a few minutes." }, { status: 429 });

  const form = await req.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "No file" }, { status: 400 });
  if (file.size > MAX) return NextResponse.json({ error: "Image must be under 2 MB." }, { status: 413 });

  const buf = Buffer.from(await file.arrayBuffer());
  const contentType = sniff(buf);
  if (!contentType) return NextResponse.json({ error: "Only JPG, PNG, WebP or GIF." }, { status: 400 });

  await connectDB();
  const doc = await ImageModel.create({ data: buf, contentType, size: buf.length });
  return NextResponse.json({ url: `/api/images/${doc._id}` });
}
