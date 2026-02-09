import type { DonateSection as DonateSectionSpec } from "@/lib/spec";

type DonateSectionProps = {
  data: DonateSectionSpec;
};

export function DonateSection({ data }: DonateSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <h3 className="text-center text-2xl font-semibold text-slate-900">
          {data.title}
        </h3>
        <p className="mt-3 text-center text-slate-600">{data.body}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={data.donately.url}
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            {data.ctaLabel}
          </a>
          <span className="text-xs text-slate-500">
            Donately embed available later.
          </span>
        </div>
      </div>
    </section>
  );
}
