"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RichEditor from "./RichEditor";

const input =
  "w-full border border-[#c3d0d2] bg-white px-3 py-2.5 text-[15px] text-[#10262e] focus:outline-none focus:border-[#17787a]";

export default function BlogForm({ endpoint, admin = false }: { endpoint: string; admin?: boolean }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [content, setContent] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!content) return setError("Write something in the editor first.");
    setBusy(true);
    setError("");
    const body = { ...Object.fromEntries(new FormData(e.currentTarget)), content };
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) return setError(data.error ?? "Something went wrong");
    if (admin) return router.push("/admin");
    setDone(true);
  }

  if (done)
    return (
      <div className="border border-[#17787a] bg-white p-8 text-center">
        <h2 className="font-serif text-2xl text-[#10262e] mb-2">Submitted for review</h2>
        <p className="text-[#37535e]">Our team will review your post. It goes live once approved.</p>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <label className="block text-sm text-[#37535e]">
          Author name
          <input name="authorName" required className={input} />
        </label>
        <label className="block text-sm text-[#37535e]">
          Author email {admin ? "" : "(not shown publicly)"}
          <input name="authorEmail" type="email" required className={input} />
        </label>
      </div>
      <label className="block text-sm text-[#37535e]">
        Title (SEO title, 5–120 chars)
        <input name="title" required maxLength={120} className={input} />
      </label>
      <label className="block text-sm text-[#37535e]">
        Meta description (20–200 chars)
        <textarea name="description" required maxLength={200} rows={2} className={input} />
      </label>
      <label className="block text-sm text-[#37535e]">
        Cover image URL (https://… or an uploaded /api/images/… link)
        <input name="image" placeholder="https://" className={input} />
      </label>
      <label className="block text-sm text-[#37535e]">
        Keywords (comma separated)
        <input name="keywords" placeholder="water, treatment, industry" className={input} />
      </label>

      <div className="text-sm text-[#37535e]">
        <span className="block mb-1">Content (min 200 characters)</span>
        <RichEditor onChange={setContent} />
      </div>

      {/* Honeypot – hidden from humans, bots fill it */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {error && <p className="text-red-700 text-sm">{error}</p>}
      <button
        disabled={busy}
        className="bg-[#10262e] text-white px-6 py-3 hover:bg-[#17787a] transition-colors disabled:opacity-50"
      >
        {busy ? "Saving…" : admin ? "Publish" : "Submit for review"}
      </button>
    </form>
  );
}
