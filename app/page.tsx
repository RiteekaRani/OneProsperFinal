import { loadSiteSpec } from "@/lib/spec-server";
import { HomePageClient } from "@/components/HomePageClient";

export default async function HomePage() {
  const spec = await loadSiteSpec();
  const home = spec.content.home;

  return (
    <HomePageClient
      hero={home.hero}
      toggle={home.toggle}
      segments={home.segments}
      joinUs={home.joinUs}
      donateSection={home.donateSection}
      donateHref={spec.globals.donateCTA.href}
    />
  );
}
