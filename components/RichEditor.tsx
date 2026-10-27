"use client";

import { useRef, useState } from "react";
import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { RICH } from "./richClass";

async function uploadImage(file: File): Promise<string> {
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch("/api/upload", { method: "POST", body: fd });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error ?? "Upload failed");
  return data.url as string;
}

const isImage = (f: File) => f.type.startsWith("image/");

export default function RichEditor({ onChange }: { onChange: (html: string) => void }) {
  const editorRef = useRef<Editor | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState("");
  const [uploading, setUploading] = useState(false);
  const [dragging, setDragging] = useState(false);

  async function insertFiles(files: File[]) {
    const ed = editorRef.current;
    if (!ed) return;
    setMsg("");
    setUploading(true);
    try {
      for (const f of files) {
        const src = await uploadImage(f);
        ed.chain().focus().setImage({ src, alt: f.name.replace(/\.[^.]+$/, "") }).run();
      }
    } catch (e) {
      setMsg(e instanceof Error ? e.message : "Upload failed");
    }
    setUploading(false);
  }

  const editor = useEditor({
    immediatelyRender: false, // avoids SSR hydration mismatch in Next.js
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Link.configure({ openOnClick: false, autolink: true }),
      Image,
    ],
    content: "",
    editorProps: {
      attributes: { class: `${RICH} min-h-[320px] px-4 py-3 focus:outline-none` },
      handleDrop(view, event, _slice, moved) {
        const files = Array.from(event.dataTransfer?.files ?? []).filter(isImage);
        if (moved || !files.length) return false;
        event.preventDefault();
        setDragging(false);
        const pos = view.posAtCoords({ left: event.clientX, top: event.clientY });
        if (pos) editorRef.current?.commands.setTextSelection(pos.pos);
        insertFiles(files);
        return true;
      },
      handlePaste(_view, event) {
        const files = Array.from(event.clipboardData?.files ?? []).filter(isImage);
        if (!files.length) return false;
        event.preventDefault();
        insertFiles(files);
        return true;
      },
    },
    onUpdate: ({ editor }) => onChange(editor.isEmpty ? "" : editor.getHTML()),
  });
  editorRef.current = editor;

  if (!editor) return <div className="border border-[#c3d0d2] bg-white min-h-[380px]" />;

  function setLink() {
    const prev = editor!.getAttributes("link").href as string | undefined;
    const url = window.prompt("Link URL (https://…)", prev ?? "https://");
    if (url === null) return;
    const chain = editor!.chain().focus().extendMarkRange("link");
    if (url.trim() === "") chain.unsetLink().run();
    else chain.setLink({ href: url.trim() }).run();
  }

  const Btn = ({ label, active, onClick, title }: { label: React.ReactNode; active?: boolean; onClick: () => void; title: string }) => (
    <button
      type="button"
      title={title}
      aria-label={title}
      onMouseDown={(e) => e.preventDefault()} // keep text selection
      onClick={onClick}
      className={`px-2.5 py-1.5 text-sm border ${
        active ? "bg-[#10262e] text-white border-[#10262e]" : "bg-white text-[#37535e] border-[#c3d0d2] hover:border-[#17787a]"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      className={`border bg-white ${dragging ? "border-[#17787a] ring-2 ring-[#17787a]/30" : "border-[#c3d0d2]"}`}
      onDragOver={() => setDragging(true)}
      onDragLeave={() => setDragging(false)}
      onDrop={() => setDragging(false)}
    >
      <div className="flex flex-wrap gap-1.5 p-2 border-b border-[#c3d0d2] bg-[#fbfbf9]">
        <Btn title="Bold" label={<b>B</b>} active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()} />
        <Btn title="Italic" label={<i>I</i>} active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()} />
        <Btn title="Heading 2" label="H2" active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} />
        <Btn title="Heading 3" label="H3" active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} />
        <Btn title="Bullet list" label="• List" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()} />
        <Btn title="Numbered list" label="1. List" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()} />
        <Btn title="Quote" label="“ ”" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()} />
        <Btn title="Add / edit link" label="🔗 Link" active={editor.isActive("link")} onClick={setLink} />
        <Btn title="Upload image" label={uploading ? "Uploading…" : "🖼 Image"} onClick={() => fileRef.current?.click()} />
        <input
          ref={fileRef}
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          multiple
          hidden
          onChange={(e) => {
            const files = Array.from(e.target.files ?? []);
            e.target.value = "";
            if (files.length) insertFiles(files);
          }}
        />
      </div>

      <EditorContent editor={editor} />

      <p className="px-4 py-2 text-[12px] text-[#37535e] border-t border-[#c3d0d2]">
        Drag &amp; drop or paste images (JPG, PNG, WebP, GIF · max 2 MB). Select text, then 🔗 to add a link.
        {msg && <span className="text-red-700 ml-2">{msg}</span>}
      </p>
    </div>
  );
}
