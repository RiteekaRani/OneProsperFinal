import type { DonatePage as DonatePageSpec } from "@/lib/spec";

type DonatePageProps = {
  data: DonatePageSpec;
};

export function DonatePage({ data }: DonatePageProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">{data.title}</h1>
      <p className="mt-4 text-slate-600">{data.body}</p>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-sm text-slate-600">
            Donately embed available later.
          </div>
          <a
            href={data.donately.url}
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Donate via Donately
          </a>
        </div>
      </div>
    </main>
  );
}
