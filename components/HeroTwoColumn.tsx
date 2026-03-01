"use client";

import type { HeroTwoColumn as HeroTwoColumnSpec } from "@/lib/spec";
import { SiteImage } from "@/components/SiteImage";

type HeroTwoColumnProps = {
  data: HeroTwoColumnSpec;
  onPrimaryAction: () => void;
  onSecondaryAction: () => void;
};

export function HeroTwoColumn({
  data,
  onPrimaryAction,
  onSecondaryAction
}: HeroTwoColumnProps) {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center bg-[#ffeea5]">
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-[#1f2937] sm:text-4xl">
            {data.lhs.h1}
          </h1>
          <p className="text-lg text-[#6b7280]">{data.lhs.subhead}</p>
          {data.lhs.bridgeLine ? (
            <p className="text-sm text-[#6b7280]">{data.lhs.bridgeLine}</p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onPrimaryAction}
            className="rounded-full bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-[#1f2937] hover:bg-[#d97706] transition-colors shadow-sm"
          >
            {data.lhs.primaryCTA.label}
          </button>
          {data.lhs.secondaryCTA ? (
            <button
              type="button"
              onClick={onSecondaryAction}
              className="rounded-full border border-[#ffd966] px-6 py-3 text-sm font-semibold text-[#1f2937] hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors"
            >
              {data.lhs.secondaryCTA.label}
            </button>
          ) : null}
        </div>
      </div>
      <div className="flex-1 relative h-64 w-full rounded-lg overflow-hidden">
        <SiteImage
          assetId={data.rhs.media.assetId}
          alt="Hero"
          className="rounded-lg"
          fill
          objectFit="cover"
        />
      </div>
    </section>
  );
}
