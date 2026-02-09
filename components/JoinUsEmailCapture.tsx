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
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-center text-2xl font-semibold text-slate-900">
          {data.title}
        </h3>
        <p className="mt-2 text-center text-slate-600">{data.body}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={data.emailFieldPlaceholder}
            className="w-full rounded-full border border-slate-300 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
          />
          <button
            type="button"
            onClick={handleContinue}
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            {data.buttonLabel}
          </button>
        </div>
        {error ? <p className="mt-2 text-sm text-rose-600">{error}</p> : null}
      </div>

      {isModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-6">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <h4 className="text-lg font-semibold text-slate-900">
                {data.onSubmit.modalTitle}
              </h4>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-sm font-semibold text-slate-500 hover:text-slate-700"
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
                  className="w-full rounded-full border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400"
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
