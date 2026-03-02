import { loadSiteSpec } from "@/lib/spec-server";
import { SiteImage } from "@/components/SiteImage";

export default async function OurImpactPage() {
  const spec = await loadSiteSpec();
  const data = spec.content.ourImpact;

  return (
    <main className="min-h-screen bg-[var(--color-surface)]">
      {/* Hero Section */}
      <section className="bg-[#ffeea5] py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1f2937] mb-6">
            {data.title}
          </h1>
          <p className="text-xl text-[#6b7280] leading-relaxed">
            Together, we're creating meaningful change in the lives of learners and mentors around the world.
          </p>
        </div>
      </section>

      {/* Stats Section - Enhanced Cards */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 text-center border border-[#ffd966] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f59e0b] to-[#ffd966]"></div>
                
                <div className="text-5xl md:text-6xl font-bold text-[#f59e0b] mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-[#1f2937] mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-[#6b7280] leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced Cards */}
      <section className="py-20 px-6 bg-[var(--color-surface-muted)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1f2937] mb-16 text-center">
            Stories from Our Community
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#ffd966]/30 relative"
              >
                {/* Quote decoration */}
                <div className="absolute top-4 left-4 text-6xl text-[#f59e0b]/10 font-serif leading-none">"</div>
                
                <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden mx-auto ring-4 ring-[#ffd966]/30 group-hover:ring-[#f59e0b]/50 transition-all duration-300">
                  <SiteImage
                    assetId={testimonial.imageAssetId}
                    alt={testimonial.attribution}
                    fill
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <blockquote className="text-[#6b7280] leading-relaxed mb-6 italic relative z-10 text-center min-h-[120px] flex items-center">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm font-semibold text-[#1f2937] text-center pt-4 border-t border-[#ffd966]/30">
                  — {testimonial.attribution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Changes Everything Section - Video Only */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1f2937] mb-12 text-center">
            Education Changes Everything
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border-4 border-[#ffd966]">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/HY2LtwTdt4I?si=TcKYq1u4589SUBGt"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Testimonial Section */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1f2937] mb-4">
              Impact Through Education
            </h2>
            <p className="text-lg text-[#6b7280] leading-relaxed max-w-3xl mx-auto">
              Hear from educators who have witnessed firsthand the transformative power of our English Learning Buddy Program. See how this initiative creates meaningful connections and lasting impact in classrooms across India.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border-4 border-[#ffd966]">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/lPwMpH_LOAE?si=DruIG9g1z_c3yn1l"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* English Learning Buddy Program Section */}
      <section className="bg-[var(--color-surface)] py-20 px-6">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 text-[var(--color-primary)]">
            English Learning Buddy Program
          </h2>
          <div className="prose prose-lg max-w-none text-center text-[var(--color-text-muted)] mb-10">
            <p className="text-lg leading-relaxed mb-4">
              OneProsper's English Learning Buddy Program is a volunteer opportunity available to English-speaking middle and high school girls in the United States and Canada. If you or someone you know fits that criteria, read below to learn more.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Already have an account, or interested in getting involved? Click the button below and fill out our form today!
            </p>
          </div>
          <div className="flex justify-center mb-20">
            <a
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--color-highlight)] px-8 py-4 text-base font-semibold text-[var(--color-primary-contrast)] hover:bg-[var(--color-accent-hover)] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Sign Up
            </a>
          </div>

          {/* Girls Educating Girls Subsection */}
          <div className="mb-20">
            <div className="bg-[var(--color-surface-muted)] rounded-2xl p-10 border border-[#ffd966]/30 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-6 text-center">
                Girls Educating Girls
              </h3>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed max-w-4xl mx-auto text-center">
                We developed the English Learning Buddy Program to provide girls in India with the opportunity to practice their English speaking skills. The program connects girls from low-income families in India ("Learners") with tutors — girls in the United States and Canada ("Buddies"). Participants' grade levels range from 7 to 12.
              </p>
            </div>
          </div>

          {/* How It Works Subsection */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-12 text-center">
              How It Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f59e0b] to-[#ffd966]"></div>
                <div className="mb-4 text-3xl">📚</div>
                <h4 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
                  10 Weeks of Tutoring
                </h4>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  We pair up Buddies and Learners of similar ages. Each pair meets weekly via 30-minute video calls to follow a structured lesson plan and read stories together.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f59e0b] to-[#ffd966]"></div>
                <div className="mb-4 text-3xl">🏆</div>
                <h4 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
                  Valuable Volunteer Experience
                </h4>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  After Buddies complete their 10-week commitment, we provide volunteer service hours and a Certificate of Completion to include on resumes and college applications.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f59e0b] to-[#ffd966]"></div>
                <div className="mb-4 text-3xl">💝</div>
                <h4 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
                  Connections that Last a Lifetime
                </h4>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  In addition to following the lesson plan and reading stories, many Buddies and Learners share their experiences and form lasting bonds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-20 px-6 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-br from-[#ffeea5] to-[#fff4c4] rounded-3xl p-12 shadow-xl border border-[#ffd966]">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1f2937] mb-4">
              Be Part of Our Impact
            </h2>
            <p className="text-lg text-[#6b7280] mb-10 max-w-2xl mx-auto">
              Join thousands of Buddies and learners making a difference every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-xl bg-[#f59e0b] px-8 py-4 text-base font-semibold text-[#1f2937] hover:bg-[#d97706] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Join as a Buddy
              </a>
              <a
                href="/donate"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#1f2937] border-2 border-[#f59e0b] hover:bg-[#f59e0b] hover:text-[#1f2937] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Support Our Mission
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
