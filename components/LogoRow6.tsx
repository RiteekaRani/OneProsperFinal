import type { LogoRow6 as LogoRow6Spec } from "@/lib/spec";
import { SiteImage } from "@/components/SiteImage";

type LogoRow6Props = {
  data: LogoRow6Spec;
};

export function LogoRow6({ data }: LogoRow6Props) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <h3 className="text-center text-2xl font-semibold text-[#1f2937]">
        {data.title}
      </h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {data.logos.map((logo) => (
          <div key={logo.assetId} className="relative h-16 w-full">
            <SiteImage
              assetId={logo.assetId}
              alt={logo.alt}
              className="object-contain"
              fill
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
