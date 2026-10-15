"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminActions({ id, status }: { id: string; status: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function call(method: "PATCH" | "DELETE", status?: string) {
    if (method === "DELETE" && !confirm("Delete this post permanently?")) return;
    setBusy(true);
    await fetch(`/api/admin/blogs/${id}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: status ? JSON.stringify({ status }) : undefined,
    });
    setBusy(false);
    router.refresh();
  }

  const btn = "px-3 py-1.5 text-[13px] border disabled:opacity-50";
  return (
    <div className="flex gap-2 flex-wrap">
      {status !== "approved" && (
        <button disabled={busy} onClick={() => call("PATCH", "approved")} className={`${btn} bg-[#17787a] text-white border-[#17787a]`}>
          Approve
        </button>
      )}
      {status !== "rejected" && (
        <button disabled={busy} onClick={() => call("PATCH", "rejected")} className={`${btn} border-[#c3d0d2] text-[#37535e]`}>
          Reject
        </button>
      )}
      <button disabled={busy} onClick={() => call("DELETE")} className={`${btn} border-red-300 text-red-700`}>
        Delete
      </button>
    </div>
  );
}
