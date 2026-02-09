import type { LogoRow6 as LogoRow6Spec } from "@/lib/spec";
import { Placeholder } from "@/components/Placeholder";

type LogoRow6Props = {
  data: LogoRow6Spec;
};

export function LogoRow6({ data }: LogoRow6Props) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <h3 className="text-center text-2xl font-semibold text-slate-900">
        {data.title}
      </h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {data.logos.map((logo) => (
          <Placeholder
            key={logo.assetId}
            label={logo.alt}
            className="h-16 w-full"
          />
        ))}
      </div>
    </section>
  );
}
