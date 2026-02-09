import "./globals.css";
import type { ReactNode } from "react";
import { loadSiteSpec } from "@/lib/spec-server";
import { StickyNav } from "@/components/StickyNav";
import { Footer } from "@/components/Footer";

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  const spec = await loadSiteSpec();

  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <StickyNav nav={spec.globals.nav} />
        {children}
        <Footer
          data={spec.content.home.footer}
          donateLabel={spec.globals.donateCTA.label}
          donateHref={spec.globals.donateCTA.href}
        />
      </body>
    </html>
  );
}
