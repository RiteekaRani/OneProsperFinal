import { loadSiteSpec } from "@/lib/spec-server";
import { SiteImage } from "@/components/SiteImage";

export default async function OurImpactPage() {
  const spec = await loadSiteSpec();
  const data = spec.content.ourImpact;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#ffeea5] py-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1f2937] mb-6">
            {data.title}
          </h1>
          <p className="text-xl text-[#6b7280] leading-relaxed">
            Together, we're creating meaningful change in the lives of learners and mentors around the world.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            {data.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow border border-[#ffd966]"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#f59e0b] mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-[#1f2937] mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-[#6b7280]">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-[#1f2937] mb-12 text-center">
            Stories from Our Community
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full aspect-square mb-4 rounded-full overflow-hidden mx-auto max-w-[120px]">
                  <SiteImage
                    assetId={testimonial.imageAssetId}
                    alt={testimonial.attribution}
                    fill
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <blockquote className="text-[#6b7280] leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm font-semibold text-[#1f2937]">
                  — {testimonial.attribution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl space-y-16">
          {data.stories.map((story, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <h3 className="text-2xl font-semibold text-[#1f2937] mb-4">
                  {story.title}
                </h3>
                <p className="text-lg text-[#6b7280] leading-relaxed">
                  {story.body}
                </p>
              </div>
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                {/* YOUTUBE VIDEO EMBED */}
                {/* Replace YOUTUBE_VIDEO_ID_PLACEHOLDER with your actual YouTube video URL or ID */}
                {/* Example: <YouTubeVideo videoIdOrUrl="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" /> */}
                {/* Or use a local image if you prefer: */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe]">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-[#6b7280] text-sm">
                      {/* PASTE YOUR YOUTUBE LINK HERE */}
                      {/* Example: Replace story.videoIdOrUrl with actual video ID */}
                      Video Placeholder - Add YouTube URL
                    </span>
                  </div>
                </div>
                {/* Uncomment and use when you have a YouTube URL:
                <YouTubeVideo 
                  videoIdOrUrl={story.videoIdOrUrl}
                  title={story.title}
                />
                */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-[#ffeea5] py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold text-[#1f2937] mb-12 text-center">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#dbeafe]"></div>
            
            <div className="space-y-12">
              {data.timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 rounded-full bg-[#f59e0b] border-4 border-white shadow-md"></div>
                  
                  <div className="ml-16">
                    <div className="text-2xl font-bold text-[#f59e0b] mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1f2937] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#6b7280] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-[#1f2937] mb-4">
            Be Part of Our Impact
          </h2>
          <p className="text-lg text-[#6b7280] mb-8">
            Join thousands of Buddies and learners making a difference every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-[#1f2937] hover:bg-[#d97706] transition-colors shadow-sm"
            >
              Join as a Buddy
            </a>
            <a
              href="/donate"
              className="inline-flex items-center justify-center rounded-full bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-[#1f2937] hover:bg-[#d97706] transition-colors shadow-sm"
            >
              Support Our Mission
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
