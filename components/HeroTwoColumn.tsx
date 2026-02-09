"use client";

import type { HeroTwoColumn as HeroTwoColumnSpec } from "@/lib/spec";
import { Placeholder } from "@/components/Placeholder";

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
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center">
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            {data.lhs.h1}
          </h1>
          <p className="text-lg text-slate-600">{data.lhs.subhead}</p>
          {data.lhs.bridgeLine ? (
            <p className="text-sm text-slate-500">{data.lhs.bridgeLine}</p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onPrimaryAction}
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            {data.lhs.primaryCTA.label}
          </button>
          {data.lhs.secondaryCTA ? (
            <button
              type="button"
              onClick={onSecondaryAction}
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400"
            >
              {data.lhs.secondaryCTA.label}
            </button>
          ) : null}
        </div>
      </div>
      <div className="flex-1">
        <Placeholder label={data.rhs.media.assetId} className="h-64 w-full" />
      </div>
    </section>
  );
}
