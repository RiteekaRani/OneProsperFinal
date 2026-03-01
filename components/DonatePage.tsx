import type { DonatePage as DonatePageSpec } from "@/lib/spec";

type DonatePageProps = {
  data: DonatePageSpec;
};

export function DonatePage({ data }: DonatePageProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-[#1f2937]">{data.title}</h1>
      <p className="mt-4 text-[#6b7280] leading-relaxed">{data.body}</p>
      <div className="mt-6 rounded-2xl border border-[#ffd966] bg-[#ffeea5] p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-sm text-[#6b7280]">
            Are you interested in joining our team? Email us at connect@oneprosper.org to discuss volunteer opportunities or membership on our Board of Directors or Event Committee. You can also donate to help fund our important work.
          </div>
          <a
            href={data.donately.url}
            className="rounded-full bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-[#1f2937] hover:bg-[#d97706] transition-colors shadow-sm"
          >
            Donate via Donately
          </a>
        </div>
      </div>
    </main>
  );
}
