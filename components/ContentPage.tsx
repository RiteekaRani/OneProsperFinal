import type { ContentPage as ContentPageSpec } from "@/lib/spec";

type ContentPageProps = {
  data: ContentPageSpec;
};

export function ContentPage({ data }: ContentPageProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">{data.title}</h1>
      <div className="mt-8 space-y-8">
        {data.sections.map((section) => (
          <section key={section.id} id={section.id} className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
            <p className="text-slate-600">{section.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
