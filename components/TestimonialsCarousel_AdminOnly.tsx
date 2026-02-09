import type {
  TestimonialsCarousel as TestimonialsCarouselSpec,
  TestimonialsCarouselAdminOnly
} from "@/lib/spec";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

type TestimonialsCarouselAdminOnlyProps = {
  data: TestimonialsCarouselAdminOnly;
};

export function TestimonialsCarousel_AdminOnly({
  data
}: TestimonialsCarouselAdminOnlyProps) {
  const normalizedData: TestimonialsCarouselSpec = {
    ...data,
    type: "TestimonialsCarousel"
  };

  return (
    <div className="relative">
      <div className="mx-auto w-full max-w-6xl px-6 pt-10">
        <span className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Admin perspectives
        </span>
      </div>
      <TestimonialsCarousel data={normalizedData} />
    </div>
  );
}
