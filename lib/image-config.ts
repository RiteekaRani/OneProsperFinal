export type ImageConfig = Record<string, string>;

/**
 * Returns the public path for an image (e.g. /images/hero.jpg) if the asset is in config, else null.
 */
export function getImagePath(assetId: string, config: ImageConfig): string | null {
  const filename = config[assetId];
  if (!filename) return null;
  return `/images/${filename}`;
}
