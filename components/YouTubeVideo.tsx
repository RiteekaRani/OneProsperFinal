import Image from "next/image";

type YouTubeVideoProps = {
  /**
   * YouTube video URL or ID
   * Examples:
   * - Full URL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
   * - Short URL: "https://youtu.be/dQw4w9WgXcQ"
   * - Just ID: "dQw4w9WgXcQ"
   */
  videoIdOrUrl: string;
  
  /**
   * Optional thumbnail image path
   * If not provided, YouTube's default thumbnail will be used
   * To replace: upload an image to /public/images/ and reference it here
   * Example: "/images/video-thumbnail.jpg"
   */
  thumbnail?: string;
  
  /**
   * Optional title for accessibility
   */
  title?: string;
  
  /**
   * Optional aspect ratio (default: 16/9)
   */
  aspectRatio?: "16/9" | "4/3" | "1/1";
};

/**
 * Reusable YouTube Video Component
 * 
 * HOW TO USE:
 * 1. Get your YouTube video URL or ID
 * 2. Paste it in the videoIdOrUrl prop
 * 3. (Optional) Add a custom thumbnail by uploading to /public/images/
 * 
 * EXAMPLE:
 * <YouTubeVideo 
 *   videoIdOrUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
 *   thumbnail="/images/my-video-thumb.jpg"
 *   title="Our Mission Video"
 * />
 */
export function YouTubeVideo({
  videoIdOrUrl,
  thumbnail,
  title = "Video",
  aspectRatio = "16/9"
}: YouTubeVideoProps) {
  // Extract video ID from various YouTube URL formats
  const extractVideoId = (input: string): string => {
    // If it's already just an ID, return it
    if (!input.includes("youtube.com") && !input.includes("youtu.be")) {
      return input;
    }
    
    // Handle youtu.be short URLs
    if (input.includes("youtu.be/")) {
      return input.split("youtu.be/")[1].split("?")[0];
    }
    
    // Handle full YouTube URLs
    if (input.includes("youtube.com/watch?v=")) {
      return input.split("watch?v=")[1].split("&")[0];
    }
    
    // Handle embed URLs
    if (input.includes("youtube.com/embed/")) {
      return input.split("embed/")[1].split("?")[0];
    }
    
    return input;
  };

  const videoId = extractVideoId(videoIdOrUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const aspectRatioClasses = {
    "16/9": "aspect-video",
    "4/3": "aspect-4/3",
    "1/1": "aspect-square"
  };

  return (
    <div className={`w-full ${aspectRatioClasses[aspectRatio]} rounded-lg overflow-hidden shadow-lg`}>
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
      />
    </div>
  );
}

/**
 * Alternative: YouTube Video with Thumbnail Preview (click to play)
 * Use this if you want a thumbnail that opens the video in a modal or new tab
 */
export function YouTubeVideoThumbnail({
  videoIdOrUrl,
  thumbnail,
  title = "Video"
}: Omit<YouTubeVideoProps, "aspectRatio">) {
  const extractVideoId = (input: string): string => {
    if (!input.includes("youtube.com") && !input.includes("youtu.be")) {
      return input;
    }
    if (input.includes("youtu.be/")) {
      return input.split("youtu.be/")[1].split("?")[0];
    }
    if (input.includes("youtube.com/watch?v=")) {
      return input.split("watch?v=")[1].split("&")[0];
    }
    if (input.includes("youtube.com/embed/")) {
      return input.split("embed/")[1].split("?")[0];
    }
    return input;
  };

  const videoId = extractVideoId(videoIdOrUrl);
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // Use regular img for YouTube thumbnails (external), Next.js Image for local thumbnails
  const isLocalThumbnail = thumbnail && !thumbnail.startsWith('http');

  return (
    <a
      href={watchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
      aria-label={`Watch ${title} on YouTube`}
    >
      <div className="relative w-full h-full">
        {thumbnail && isLocalThumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <img
            src={thumbnail || defaultThumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
            <svg
              className="w-8 h-8 text-[#f59e0b] ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}
