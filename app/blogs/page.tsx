import { loadSiteSpec } from "@/lib/spec-server";
import Link from "next/link";
import { SiteImage } from "@/components/SiteImage";

export default async function BlogsPage() {
  const spec = await loadSiteSpec();
  const data = spec.content.blogs;

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

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.posts.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-[#ffd966] group"
              >
                {/* Featured Image */}
                <div className="relative w-full aspect-video">
                  <SiteImage
                    assetId={post.imageAssetId}
                    alt={post.title}
                    fill
                    objectFit="cover"
                  />
                </div>
                
                <div className="p-6">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-[#f59e0b] bg-[#fef3c7] rounded-full mb-3">
                    {post.category}
                  </span>
                  
                  {/* Title */}
                  <h2 className="text-xl font-semibold text-[#1f2937] mb-3 group-hover:text-[#f59e0b] transition-colors">
                    {post.title}
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-[#6b7280] leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-[#6b7280]">
                    <span>{post.author}</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
