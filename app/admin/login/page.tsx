"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const password = new FormData(e.currentTarget).get("password");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) router.push("/admin");
    else setError("Wrong password");
  }

  return (
    <main className="max-w-sm mx-auto px-6 py-24">
      <h1 className="font-serif text-3xl text-[#10262e] mb-6">Admin login</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          name="password"
          type="password"
          required
          placeholder="Password"
          className="w-full border border-[#c3d0d2] px-3 py-2.5"
        />
        {error && <p className="text-red-700 text-sm">{error}</p>}
        <button className="w-full bg-[#10262e] text-white py-3 hover:bg-[#17787a] transition-colors">Sign in</button>
      </form>
    </main>
  );
}
