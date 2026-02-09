import type { Stats3Boxes as Stats3BoxesSpec } from "@/lib/spec";

type Stats3BoxesProps = {
  data: Stats3BoxesSpec;
};

export function Stats3Boxes({ data }: Stats3BoxesProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <h3 className="text-center text-2xl font-semibold text-slate-900">
        {data.title}
      </h3>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {data.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
          >
            <div className="text-2xl font-semibold text-slate-900">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
