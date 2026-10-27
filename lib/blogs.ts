import Blog, { BlogDTO, BlogStatus } from "../app/models/Blog";
import { connectDB } from "./mongodb";
import { cleanHtml, textOf } from "./sanitize";

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

export function serialize(doc: any): BlogDTO {
  return JSON.parse(JSON.stringify({ ...doc, _id: String(doc._id) }));
}

export type BlogInput = {
  title?: string;
  description?: string;
  content?: string;
  image?: string;
  keywords?: string | string[];
  authorName?: string;
  authorEmail?: string;
};

export function validate(b: BlogInput, isAdmin: boolean) {
  const title = (b.title ?? "").trim();
  const description = (b.description ?? "").trim();
  const content = cleanHtml(String(b.content ?? ""), isAdmin);
  const authorName = (b.authorName ?? "").trim();
  const authorEmail = (b.authorEmail ?? "").trim();
  const image = (b.image ?? "").trim();
  const keywords = (
    Array.isArray(b.keywords) ? b.keywords : (b.keywords ?? "").split(",")
  )
    .map((k) => k.trim().toLowerCase())
    .filter(Boolean)
    .slice(0, 15);

  if (title.length < 5 || title.length > 120)
    return { error: "Title must be 5–120 characters." };
  if (description.length < 20 || description.length > 200)
    return { error: "Description must be 20–200 characters." };
  if (textOf(content).length < 200)
    return { error: "Content must be at least 200 characters of text." };
  if (content.length > 200_000) return { error: "Content is too long." };
  if (!authorName) return { error: "Author name is required." };
  if (!/^\S+@\S+\.\S+$/.test(authorEmail))
    return { error: "A valid author email is required." };
  if (image && !/^(https:\/\/|\/api\/images\/[a-f0-9]{24}$)/.test(image))
    return { error: "Cover image must be an https:// URL." };

  return {
    data: {
      title,
      description,
      content,
      authorName,
      authorEmail,
      image,
      keywords,
    },
  };
}

export async function createBlog(input: BlogInput, opts: { isAdmin: boolean }) {
  const v = validate(input, opts.isAdmin);
  if (v.error) return { error: v.error };
  await connectDB();

  let slug = slugify(v.data!.title) || "post";
  if (await Blog.exists({ slug })) slug = `${slug}-${Date.now().toString(36)}`;

  const doc = await Blog.create({
    ...v.data,
    slug,
    isAdminPost: opts.isAdmin,
    status: (opts.isAdmin ? "approved" : "pending") as BlogStatus,
  });
  return { blog: serialize(doc.toObject()) };
}
