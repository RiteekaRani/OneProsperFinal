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
      return "Every Girl Deserves an Education";
    }
    if (tab === "Schools") {
      return "I am a School Admin";
    }
    return tab;
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-xl font-semibold text-[#1f2937]">{data.label}</h2>
        <div className="flex rounded-full border border-[#ffd966] bg-[#ffeea5] p-1">
          {data.tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => onChange(tab)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#f59e0b] text-[#1f2937]"
                    : "text-[#6b7280] hover:text-[#f59e0b]"
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
