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
      case "Facebook":
        return (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6"
            fill="currentColor"
          >
            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.3c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12H18l-.5 3h-2v7A10 10 0 0 0 22 12z" />
          </svg>
        );
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
      case "Twitter":
        return (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6"
            fill="currentColor"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14.86A4.48 4.48 0 0 0 22.4.36a9.09 9.09 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.86 4.12A12.83 12.83 0 0 1 1.64 2.16a4.52 4.52 0 0 0 1.4 6.04 4.48 4.48 0 0 1-2.05-.57v.06a4.53 4.53 0 0 0 3.63 4.44 4.5 4.5 0 0 1-2.04.08 4.53 4.53 0 0 0 4.23 3.14A9.06 9.06 0 0 1 1 19.54 12.79 12.79 0 0 0 7 21c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.02-.58A9.22 9.22 0 0 0 23 3z" />
          </svg>
        );
      default:
        return <span className="text-sm">{label}</span>;
    }
  };

  return (
    <footer className="border-t border-[#ffd966] bg-[#ffeea5]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[#6b7280]">{data.relationshipLine}</p>
          <Link
            href={donateHref}
            className="inline-flex w-fit rounded-full bg-[#f59e0b] px-5 py-2 text-sm font-semibold text-[#1f2937] hover:bg-[#d97706] transition-colors shadow-sm"
          >
            {donateLabel}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="flex flex-wrap gap-4 text-sm text-[#6b7280]">
            {data.links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="hover:text-[#f59e0b] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[#6b7280] md:justify-end">
            {data.social.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.label}
                className="transition hover:text-[#f59e0b]"
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
