"use client";

import Image from "next/image";
import { useImageConfig } from "@/components/ImageConfigProvider";
import { Placeholder } from "@/components/Placeholder";
import { getImagePath } from "@/lib/image-config";
import { cn } from "@/lib/utils";

type SiteImageProps = {
  /** Asset ID from siteSpec / imageConfig (e.g. "hero_media_placeholder", "mission_image"). */
  assetId: string;
  alt: string;
  className?: string;
  /** Use fill layout (parent must have position relative and size). */
  fill?: boolean;
  /** Use object-fit for fill layout. */
  objectFit?: "cover" | "contain";
  /** Optional override: if you pass a path, it's used instead of imageConfig. */
  srcOverride?: string | null;
};

/**
 * Renders an image from /public/images/ when that asset is configured in content/imageConfig.json.
 * Otherwise shows a placeholder. Upload images to /public/images/ and set the filename in imageConfig.
 */
export function SiteImage({
  assetId,
  alt,
  className,
  fill = false,
  objectFit = "cover",
  srcOverride
}: SiteImageProps) {
  const config = useImageConfig();
  const path = srcOverride ?? (config ? getImagePath(assetId, config) : null);

  if (path) {
    if (fill) {
      return (
        <Image
          src={path}
          alt={alt}
          fill
          className={cn(objectFit === "cover" ? "object-cover" : "object-contain", className)}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      );
    }
    return (
      <Image
        src={path}
        alt={alt}
        width={800}
        height={500}
        className={cn("w-full h-auto", className)}
        sizes="(max-width: 768px) 100vw, 800px"
      />
    );
  }

  return <Placeholder label={assetId} className={className ?? ""} />;
}
