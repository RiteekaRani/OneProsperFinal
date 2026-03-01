import type { LegalPage as LegalPageSpec } from "@/lib/spec";

type LegalPageProps = {
  data: LegalPageSpec;
};

export function LegalPage({ data }: LegalPageProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-[#1f2937]">{data.title}</h1>
      <div className="mt-6 rounded-2xl border border-[#ffd966] bg-white p-6 shadow-sm">
        <p className="text-[#6b7280] leading-relaxed">{data.body}</p>
      </div>
    </main>
  );
}
