"use client";

import { useMemo, useState } from "react";
import type { TestimonialsCarousel as TestimonialsCarouselSpec } from "@/lib/spec";
import { Placeholder } from "@/components/Placeholder";

type TestimonialsCarouselProps = {
  data: TestimonialsCarouselSpec;
};

export function TestimonialsCarousel({ data }: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data.items[activeIndex];
  const count = data.items.length;

  const controls = useMemo(
    () => ({
      prev: () => setActiveIndex((index) => (index - 1 + count) % count),
      next: () => setActiveIndex((index) => (index + 1) % count)
    }),
    [count]
  );

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <h3 className="text-2xl font-semibold text-slate-900">{data.title}</h3>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={controls.prev}
            className="rounded-full border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 hover:border-slate-400"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={controls.next}
            className="rounded-full border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 hover:border-slate-400"
          >
            Next
          </button>
        </div>
      </div>
      {activeItem ? (
        <div className="mt-6 grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[160px_1fr]">
          <Placeholder label={activeItem.mediaAssetId} className="h-32 w-full" />
          <div className="space-y-4">
            <p className="text-lg text-slate-700">“{activeItem.quote}”</p>
            <p className="text-sm font-semibold text-slate-900">
              {activeItem.attribution}
            </p>
          </div>
        </div>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
        {data.items.map((item, index) => (
          <button
            key={`${item.attribution}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={
              index === activeIndex ? "font-semibold text-slate-700" : ""
            }
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
