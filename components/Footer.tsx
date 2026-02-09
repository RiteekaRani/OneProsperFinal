import Link from "next/link";
import type { Footer as FooterSpec } from "@/lib/spec";

type FooterProps = {
  data: FooterSpec;
  donateLabel: string;
  donateHref: string;
};

export function Footer({ data, donateLabel, donateHref }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-600">{data.relationshipLine}</p>
          <Link
            href={donateHref}
            className="inline-flex w-fit rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            {donateLabel}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            {data.links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-slate-900">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600 md:justify-end">
            {data.social.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
