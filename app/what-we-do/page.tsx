import { loadSiteSpec } from "@/lib/spec-server";
import Link from "next/link";
import { SiteImage } from "@/components/SiteImage";

export default async function WhatWeDoPage() {
  const spec = await loadSiteSpec();
  const data = spec.content.whatWeDo;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#ffeea5] py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1f2937] mb-6">
            {data.title}
          </h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[#1f2937] mb-4">
                {data.mission.title}
              </h2>
              <p className="text-lg text-[#6b7280] leading-relaxed">
                {data.mission.body}
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <SiteImage
                assetId={data.mission.imageAssetId}
                alt={data.mission.title}
                fill
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-[#1f2937] mb-12 text-center">
            Our Services & Initiatives
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
                  <SiteImage
                    assetId={service.imageAssetId}
                    alt={service.title}
                    fill
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1f2937] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6b7280] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl space-y-16">
          {data.initiatives.map((initiative, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <h3 className="text-2xl font-semibold text-[#1f2937] mb-4">
                  {initiative.title}
                </h3>
                <p className="text-lg text-[#6b7280] leading-relaxed">
                  {initiative.description}
                </p>
              </div>
              <div className={`relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <SiteImage
                  assetId={initiative.imageAssetId}
                  alt={initiative.title}
                  fill
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ffeea5] py-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-[#1f2937] mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-[#6b7280] mb-8">
            Join our community of Buddies and help transform lives through education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-[#1f2937] hover:bg-[#d97706] transition-colors shadow-sm"
            >
              Become a Buddy
            </Link>
            <Link
              href="/how-to-help"
              className="inline-flex items-center justify-center rounded-full border border-[#e5e7eb] px-6 py-3 text-sm font-semibold text-[#1f2937] hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors"
            >
              Learn More Ways to Help
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
