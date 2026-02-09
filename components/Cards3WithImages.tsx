import type { Cards3WithImages as Cards3WithImagesSpec } from "@/lib/spec";
import { Placeholder } from "@/components/Placeholder";

type Cards3WithImagesProps = {
  data: Cards3WithImagesSpec;
};

export function Cards3WithImages({ data }: Cards3WithImagesProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="space-y-3 text-center">
        <h3 className="text-2xl font-semibold text-slate-900">{data.title}</h3>
        {data.intro ? <p className="text-slate-600">{data.intro}</p> : null}
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {data.cards.map((card) => (
          <div
            key={card.headline}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <Placeholder label={card.imageAssetId} className="h-32 w-full" />
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              {card.headline}
            </h4>
            <p className="mt-2 text-sm text-slate-600">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
