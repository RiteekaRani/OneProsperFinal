import { loadSiteSpec } from "@/lib/spec-server";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteImage } from "@/components/SiteImage";

export default async function BlogPostPage({
  params
}: {
  params: { id: string };
}) {
  const spec = await loadSiteSpec();
  const data = spec.content.blogs;
  const post = data.posts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <section className="relative w-full aspect-video">
        <SiteImage
          assetId={post.imageAssetId}
          alt={post.title}
          fill
          objectFit="cover"
        />
      </section>

      {/* Article Content */}
      <article className="py-12 px-6">
        <div className="mx-auto max-w-3xl">
          {/* Back Link */}
          <Link
            href="/blogs"
            className="inline-flex items-center text-[#f59e0b] hover:text-[#d97706] mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blogs
          </Link>

          {/* Category Badge */}
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#f59e0b] bg-[#fef3c7] rounded-full mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1f2937] mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-[#6b7280] mb-8 pb-8 border-b border-[#e5e7eb]">
            <span className="font-medium">{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </time>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {/* PLACEHOLDER CONTENT - Replace with your actual blog post content */}
            {/* You can structure this however you like - paragraphs, headings, images, etc. */}
            <div className="space-y-6 text-[#6b7280] leading-relaxed">
              <p className="text-xl text-[#1f2937] font-medium">
                {post.excerpt}
              </p>
              
              <p>
                This is where your blog post content would go. You can add multiple paragraphs,
                headings, images, lists, and more. Replace this placeholder text with your actual
                blog post content.
              </p>
              
              <h2 className="text-2xl font-semibold text-[#1f2937] mt-8 mb-4">
                Section Heading
              </h2>
              
              <p>
                Continue writing your blog post here. You can add as much content as needed.
                The layout is designed to be clean and readable, with proper spacing and
                typography that matches the calm wellness theme.
              </p>
              
              {/* Optional in-article image: add "blog_content_image" to content/imageConfig.json and upload to /public/images/ */}
              <div className="my-8 relative w-full aspect-video rounded-lg overflow-hidden">
                <SiteImage
                  assetId="blog_content_image"
                  alt="Blog content"
                  fill
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              
              <p>
                You can continue adding more paragraphs and sections as needed. The design
                supports a clean, modern reading experience that keeps visitors engaged.
              </p>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-[#ffd966]">
            <h3 className="text-lg font-semibold text-[#1f2937] mb-4">
              Share this post
            </h3>
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-full border border-[#ffd966] text-[#6b7280] hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors">
                Twitter
              </button>
              <button className="px-4 py-2 rounded-full border border-[#ffd966] text-[#6b7280] hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors">
                Facebook
              </button>
              <button className="px-4 py-2 rounded-full border border-[#ffd966] text-[#6b7280] hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors">
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-[#ffeea5] py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-[#1f2937] mb-8 text-center">
            More Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.posts
              .filter((p) => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blogs/${relatedPost.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-full aspect-video">
                    <SiteImage
                      assetId={relatedPost.imageAssetId}
                      alt={relatedPost.title}
                      fill
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#1f2937] mb-2 hover:text-[#f59e0b] transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-[#6b7280] line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
