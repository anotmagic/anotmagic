"use client";

import { FormEvent, useState } from "react";

export default function WhitePaperRequestForm() {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitting(true);
    setMessage("");
    setSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/resources/request-white-paper", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to submit your request.");
      }

      setSuccess(true);

      setMessage(
        "Your request has been received. The M Sciences team will review it and contact you.",
      );

      form.reset();
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="bg-[#eef2f1] border border-[#17787a] p-6">
        <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2">
          Request received
        </div>

        <h3 className="font-serif font-bold text-[23px] text-[#10262e] mb-2">
          Thank you.
        </h3>

        <p className="text-[15px] leading-[1.6] text-[#37535e] mb-0">
          {message}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-[13px] text-[#a9c6c8] mb-1.5"
        >
          Name *
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full bg-white text-[#10262e] border border-[#c3d0d2] px-3 py-2.5 outline-none focus:border-[#17787a]"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-[13px] text-[#a9c6c8] mb-1.5"
        >
          Company *
        </label>

        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          className="w-full bg-white text-[#10262e] border border-[#c3d0d2] px-3 py-2.5 outline-none focus:border-[#17787a]"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-[13px] text-[#a9c6c8] mb-1.5"
        >
          Work email *
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full bg-white text-[#10262e] border border-[#c3d0d2] px-3 py-2.5 outline-none focus:border-[#17787a]"
        />
      </div>

      <div>
        <label
          htmlFor="role"
          className="block text-[13px] text-[#a9c6c8] mb-1.5"
        >
          Role
        </label>

        <input
          id="role"
          name="role"
          type="text"
          autoComplete="organization-title"
          className="w-full bg-white text-[#10262e] border border-[#c3d0d2] px-3 py-2.5 outline-none focus:border-[#17787a]"
        />
      </div>

      {message && !success && (
        <div className="bg-[#f7efe2] border-l-4 border-[#a8600f] p-4">
          <p className="text-[14px] text-[#10262e] m-0">{message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-block bg-[#17787a] text-white font-sans text-[14px] px-[18px] py-[10px] hover:bg-[#2fa9a6] transition-colors border-0 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending request..." : "Request full paper"}
      </button>
    </form>
  );
}
