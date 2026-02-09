"use client";

import { cn } from "@/lib/utils";
import type { AudienceToggle as AudienceToggleSpec } from "@/lib/spec";

type AudienceToggleProps = {
  data: AudienceToggleSpec;
  activeTab: string;
  onChange: (tab: string) => void;
};

export function AudienceToggle({ data, activeTab, onChange }: AudienceToggleProps) {
  const displayLabel = (tab: string) => {
    if (tab === "Students") {
      return "I am a student";
    }
    if (tab === "Schools") {
      return "I am a School Admin";
    }
    return tab;
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-xl font-semibold text-slate-900">{data.label}</h2>
        <div className="flex rounded-full border border-slate-200 bg-slate-50 p-1">
          {data.tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => onChange(tab)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                {displayLabel(tab)}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
