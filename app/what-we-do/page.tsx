export default async function WallOfLovePage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)]">
      {/* Section 1 - Full-width Hero Heading */}
      <section className="bg-[var(--color-surface-muted)] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-[var(--color-primary)]">
            Empower a Girl in 30 Minutes per Week
          </h1>
        </div>
      </section>

      {/* Section 2 - Two Images */}
      <section className="bg-[var(--color-surface)] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image 1 Placeholder */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[var(--color-border)] bg-[var(--color-accent-soft)]">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-[var(--color-text-muted)] text-sm">Image 1 - Replace with actual image</span>
              </div>
            </div>
            
            {/* Image 2 Placeholder */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[var(--color-border)] bg-[var(--color-accent-soft)]">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-[var(--color-text-muted)] text-sm">Image 2 - Replace with actual image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Story Heading */}
      <section className="bg-[var(--color-surface-muted)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[var(--color-primary)]">
            The Power of Confidence: Deepakshi's Story
          </h2>
        </div>
      </section>

      {/* Section 4 - Blog-style Article Body */}
      <section className="bg-[var(--color-surface-muted)] pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Author Credit */}
          <div className="mb-8 text-center">
            <p className="text-sm text-[var(--color-text-muted)] italic">
              By Sophie Brown | Posted January 14, 2023
            </p>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none space-y-6">
            <div className="text-base md:text-lg leading-relaxed text-[var(--color-text)] space-y-6">
              {/* TODO: Paste the full Deepakshi story article text here */}
              {/* Replace this placeholder with the complete article content */}
              <p>
                [Full Deepakshi story article text should be inserted here. 
                Preserve all paragraph breaks and formatting as provided.]
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Section 5 - Embedded YouTube Video */}
      <section className="bg-[var(--color-surface)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-[var(--color-primary)]">
            Sophie's Video Testimonial
          </h3>
          <div className="flex justify-center">
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-[var(--color-border)]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/t1afzE9f-4w?si=JhvxZRBLIgigg4bh"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Full-width Image with Caption */}
      <section className="bg-[var(--color-surface-muted)] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-[var(--color-primary)]">
            Sophia + Rabiya's Experience
          </h3>
          
          {/* Full-width Image Placeholder */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-[var(--color-border)] bg-[var(--color-accent-soft)]">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[var(--color-text-muted)] text-sm">Sophia + Rabiya Image - Replace with actual image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Final Full-width Image */}
      <section className="bg-[var(--color-surface)] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Full-width Image Placeholder */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-[var(--color-border)] bg-[var(--color-accent-soft)]">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[var(--color-text-muted)] text-sm">Final Image - Replace with actual image</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
