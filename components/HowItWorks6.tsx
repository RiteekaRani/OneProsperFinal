import type { HowItWorks6 as HowItWorks6Spec } from "@/lib/spec";
import { Placeholder } from "@/components/Placeholder";

type HowItWorks6Props = {
  data: HowItWorks6Spec;
};

export function HowItWorks6({ data }: HowItWorks6Props) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <h3 className="text-center text-2xl font-semibold text-slate-900">
        {data.title}
      </h3>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {data.steps.map((step, index) => (
          <div
            key={`${step.title}-${index}`}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <Placeholder label={step.iconAssetId} className="h-12 w-12" />
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              {step.title}
            </h4>
            <p className="mt-2 text-sm text-slate-600">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
