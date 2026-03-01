import type { Cards3WithImages as Cards3WithImagesSpec } from "@/lib/spec";
import { SiteImage } from "@/components/SiteImage";

type Cards3WithImagesProps = {
  data: Cards3WithImagesSpec;
};

export function Cards3WithImages({ data }: Cards3WithImagesProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="space-y-3 text-center">
        <h3 className="text-2xl font-semibold text-[#1f2937]">{data.title}</h3>
        {data.intro ? <p className="text-[#6b7280]">{data.intro}</p> : null}
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {data.cards.map((card) => (
          <div
            key={card.headline}
            className="rounded-2xl border border-[#ffd966] bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-32 w-full rounded-t-lg overflow-hidden">
              <SiteImage
                assetId={card.imageAssetId}
                alt={card.headline}
                className="rounded-t-lg"
                fill
                objectFit="cover"
              />
            </div>
            <h4 className="mt-4 text-lg font-semibold text-[#1f2937]">
              {card.headline}
            </h4>
            <p className="mt-2 text-sm text-[#6b7280] leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
