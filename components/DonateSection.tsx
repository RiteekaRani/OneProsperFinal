import type { DonateSection as DonateSectionSpec } from "@/lib/spec";

type DonateSectionProps = {
  data: DonateSectionSpec;
};

export function DonateSection({ data }: DonateSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-2xl border border-[#ffd966] bg-[#ffeea5] p-8 shadow-sm">
        <h3 className="text-center text-2xl font-semibold text-[#1f2937]">
          {data.title}
        </h3>

        <p className="mt-3 text-center text-[#6b7280] leading-relaxed">
          {data.body}
        </p>

        {/* Centered Donate Button */}
        <div className="mt-6 flex justify-center">
          <a
            href={data.donately.url}
            className="rounded-full bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-[#1f2937] hover:bg-[#d97706] transition-colors shadow-sm"
          >
            {data.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}