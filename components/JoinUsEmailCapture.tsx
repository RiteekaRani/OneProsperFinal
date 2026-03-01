"use client";

import { useState } from "react";
import type { JoinUsEmailCapture as JoinUsEmailCaptureSpec } from "@/lib/spec";

type JoinUsEmailCaptureProps = {
  data: JoinUsEmailCaptureSpec;
  sectionId?: string;
  onOpen?: () => void;
};

export function JoinUsEmailCapture({
  data,
  sectionId,
  onOpen
}: JoinUsEmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContinue = () => {
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setIsModalOpen(true);
    onOpen?.();
  };

  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  return (
    <section id={sectionId} className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-2xl border border-[#ffd966] bg-white p-8 shadow-sm">
        <h3 className="text-center text-2xl font-semibold text-[#1f2937]">
          {data.title}
        </h3>

        <p className="mt-2 text-center text-[#6b7280]">
          {data.body}
        </p>

        {/* Input */}
        <div className="mt-6">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={data.emailFieldPlaceholder}
            className="w-full rounded-full border border-[#ffd966] px-4 py-3 text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#f59e0b] bg-white"
          />
        </div>

        {/* Centered Bigger Button */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={handleContinue}
            className="rounded-full bg-[#f59e0b] px-12 py-4 text-lg font-semibold text-[#1f2937] hover:bg-[#d97706] transition-colors shadow-md"
          >
            {data.buttonLabel}
          </button>
        </div>

        {error ? (
          <p className="mt-2 text-sm text-rose-600 text-center">
            {error}
          </p>
        ) : null}
      </div>

      {isModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <h4 className="text-lg font-semibold text-[#1f2937]">
                {data.onSubmit.modalTitle}
              </h4>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-sm font-semibold text-[#6b7280] hover:text-[#f59e0b] transition-colors"
              >
                Close
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {data.onSubmit.options.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => handleRedirect(option.redirectUrl)}
                  className="w-full rounded-full border border-[#ffd966] px-4 py-3 text-sm font-semibold text-[#1f2937] hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}