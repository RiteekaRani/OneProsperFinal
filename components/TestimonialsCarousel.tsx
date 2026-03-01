"use client";

import { useMemo, useState } from "react";
import type { TestimonialsCarousel as TestimonialsCarouselSpec } from "@/lib/spec";
import { SiteImage } from "@/components/SiteImage";

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
        <h3 className="text-2xl font-semibold text-[#1f2937]">
          {data.title}
        </h3>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={controls.prev}
            className="rounded-full border border-[#ffd966] px-3 py-1 text-sm font-medium text-[#1f2937] hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors"
          >
            Previous
          </button>

          <button
            type="button"
            onClick={controls.next}
            className="rounded-full border border-[#ffd966] px-3 py-1 text-sm font-medium text-[#1f2937] hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors"
          >
            Next
          </button>
        </div>
      </div>

      {activeItem ? (
        <div className="mt-6 grid gap-6 rounded-2xl border border-[#ffd966] bg-white p-6 shadow-sm md:grid-cols-[160px_1fr]">
          <div className="relative h-32 w-full rounded-lg overflow-hidden">
            <SiteImage
              assetId={activeItem.mediaAssetId}
              alt={activeItem.attribution}
              className="rounded-lg"
              fill
              objectFit="contain"
            />
          </div>

          <div className="space-y-4">
            <p className="text-lg text-slate-700">
              “{activeItem.quote}”
            </p>

            <p className="text-sm font-semibold text-[#1f2937]">
              {activeItem.attribution}
            </p>

            {/* ✅ Watch Video Link */}
            {activeItem.videoUrl && (
              <a
                href={activeItem.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#2a7dbf] underline hover:text-[#1d4ed8] transition-colors"
              >
                Watch video →
              </a>
            )}
          </div>
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#6b7280]">
        {data.items.map((item, index) => (
          <button
            key={`${item.attribution}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={
              index === activeIndex
                ? "font-semibold text-[#f59e0b]"
                : ""
            }
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}