import Link from "next/link";
import type { Footer as FooterSpec } from "@/lib/spec";

type FooterProps = {
  data: FooterSpec;
  donateLabel: string;
  donateHref: string;
};

export function Footer({ data, donateLabel, donateHref }: FooterProps) {
  const renderSocialIcon = (label: string) => {
    switch (label) {
      case "Instagram":
        return (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6"
            fill="currentColor"
          >
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" />
            <path
              d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.2a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4zM17.2 7.3a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              fill="#fff"
            />
          </svg>
        );
      case "LinkedIn":
        return (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6"
            fill="currentColor"
          >
            <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
            <path
              d="M8 9.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zM7 11h2v7H7v-7zM12 11h2v1.1c.4-.7 1.3-1.3 2.6-1.3 2 0 2.4 1.3 2.4 3.2V18h-2v-3.4c0-1-.2-2-1.3-2-1.2 0-1.7.8-1.7 2V18h-2v-7z"
              fill="#fff"
            />
          </svg>
        );
      case "TikTok":
        return (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6"
            fill="currentColor"
          >
            <path d="M15 3h2c.3 2 1.9 3.8 4 4v2.2c-1.4 0-2.7-.4-4-1.2v5.2a5 5 0 1 1-5-5c.4 0 .8 0 1.2.1v2.4a2.6 2.6 0 1 0 1.8 2.5V3z" />
          </svg>
        );
      default:
        return <span className="text-sm">{label}</span>;
    }
  };

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
          <div className="flex flex-wrap items-center gap-4 text-slate-600 md:justify-end">
            {data.social.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.label}
                className="transition hover:text-slate-900"
              >
                {renderSocialIcon(link.label)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
