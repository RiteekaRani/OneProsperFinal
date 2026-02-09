import fs from "fs/promises";
import path from "path";
import type { SiteSpec } from "@/lib/spec";

export async function loadSiteSpec(): Promise<SiteSpec> {
  const filePath = path.join(process.cwd(), "content", "siteSpec.json");
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw) as SiteSpec;
}
