import { loadSiteSpec } from "@/lib/spec-server";
import Link from "next/link";

export default async function HowToHelpPage() {
  const spec = await loadSiteSpec();
  const data = spec.content.howToHelp;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#ffeea5] py-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1f2937] mb-6">
            {data.title}
          </h1>
          <p className="text-xl text-[#6b7280] leading-relaxed">
            {data.intro}
          </p>
        </div>
      </section>

      {/* Ways to Help Cards */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {data.waysToHelp.map((way, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow border border-[#ffd966]"
              >
                {/* Icon Placeholder */}
                <div className="w-16 h-16 rounded-full bg-[#fef3c7] flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-[#f59e0b]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-semibold text-[#1f2937] mb-4">
                  {way.title}
                </h2>
                <p className="text-[#6b7280] leading-relaxed mb-6">
                  {way.description}
                </p>
                <Link
                  href={way.ctaHref}
                  className="inline-flex items-center justify-center rounded-full bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-[#1f2937] hover:bg-[#d97706] transition-colors shadow-sm w-full"
                >
                  {way.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-[#1f2937] mb-4">
                Why Your Support Matters
              </h2>
              <p className="text-[#6b7280] leading-relaxed mb-4">
                Every contribution, whether time or resources, helps us reach more learners and create more opportunities for growth and connection. Your support enables us to:
              </p>
              <ul className="space-y-2 text-[#6b7280]">
                <li className="flex items-start">
                  <span className="text-[#f59e0b] mr-2">✓</span>
                  <span>Provide quality learning materials and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f59e0b] mr-2">✓</span>
                  <span>Support our matching and coordination efforts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f59e0b] mr-2">✓</span>
                  <span>Expand our reach to more schools and learners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f59e0b] mr-2">✓</span>
                  <span>Maintain and improve our program infrastructure</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[#1f2937] mb-4">
                Get Started Today
              </h2>
              <p className="text-[#6b7280] leading-relaxed mb-6">
                Ready to make a difference? Choose the option that works best for you. Whether you're a student looking to volunteer, a school administrator interested in partnering, or someone who wants to support our mission financially, we're here to help you get started.
              </p>
              <div className="space-y-4">
                <Link
                  href="/signup"
                  className="block w-full rounded-full bg-[#f59e0b] px-6 py-3 text-center text-sm font-semibold text-[#1f2937] hover:bg-[#d97706] transition-colors shadow-sm"
                >
                  Sign Up to Volunteer
                </Link>
                <Link
                  href="/donate"
                  className="block w-full rounded-full border-2 border-[#f59e0b] px-6 py-3 text-center text-sm font-semibold text-[#f59e0b] hover:bg-[#f59e0b] hover:text-[#1f2937] transition-colors"
                >
                  Make a Donation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
