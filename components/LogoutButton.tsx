"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  return (
    <button
      className="border border-[#c3d0d2] px-4 py-2 text-[#37535e]"
      onClick={async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
      }}
    >
      Log out
    </button>
  );
}
