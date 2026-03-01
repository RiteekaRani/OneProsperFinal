import "./globals.css";
import type { ReactNode } from "react";
import { loadSiteSpec } from "@/lib/spec-server";
import { loadImageConfig } from "@/lib/image-config-server";
import { ImageConfigProvider } from "@/components/ImageConfigProvider";
import { StickyNav } from "@/components/StickyNav";
import { Footer } from "@/components/Footer";

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  const [spec, imageConfig] = await Promise.all([
    loadSiteSpec(),
    loadImageConfig()
  ]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-[#1f2937]">
        <ImageConfigProvider config={imageConfig}>
          <StickyNav nav={spec.globals.nav} />
          {children}
          <Footer
            data={spec.content.home.footer}
            donateLabel={spec.globals.donateCTA.label}
            donateHref={spec.globals.donateCTA.href}
          />
        </ImageConfigProvider>
      </body>
    </html>
  );
}
