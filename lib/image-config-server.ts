import fs from "fs/promises";
import path from "path";
import type { ImageConfig } from "@/lib/image-config";

/**
 * Loads the image config from content/imageConfig.json (server-only).
 * Each key is an assetId; value is the filename in /public/images/.
 */
export async function loadImageConfig(): Promise<ImageConfig> {
  const filePath = path.join(process.cwd(), "content", "imageConfig.json");
  const raw = await fs.readFile(filePath, "utf-8");
  const parsed = JSON.parse(raw) as Record<string, string>;
  const config: ImageConfig = {};
  for (const [key, value] of Object.entries(parsed)) {
    if (key.startsWith("_")) continue;
    config[key] = value;
  }
  return config;
}
