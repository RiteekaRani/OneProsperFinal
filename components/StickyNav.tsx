import Link from "next/link";
import type { StickyNav as StickyNavSpec } from "@/lib/spec";
import { cn } from "@/lib/utils";

type StickyNavProps = {
  nav: StickyNavSpec;
};

const kindStyles: Record<string, string> = {
  logo: "text-xl font-semibold tracking-tight text-slate-900",
  link: "text-sm font-medium text-slate-700 hover:text-slate-900",
  ctaSecondary:
    "rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-slate-400",
  ctaPrimary:
    "rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
};

export function StickyNav({ nav }: StickyNavProps) {
  const logoItem = nav.items.find((item) => item.kind === "logo");
  const rightItems = nav.items.filter((item) => item.kind !== "logo");
  const logoLabel = logoItem?.label ?? "";

  return (
    <header
      className={cn(
        "z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur",
        nav.sticky ? "sticky top-0" : "relative"
      )}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-end gap-4 px-6 py-4">
        {logoItem ? (
          <Link
            key={`${logoItem.href}-${logoItem.label}`}
            href={logoItem.href}
            className={cn("transition", kindStyles[logoItem.kind] ?? kindStyles.link)}
          >
            {logoLabel === "OneProsper" ? (
              <>
                <span>One</span>
                <span className="text-teal-600">Prosper</span>
              </>
            ) : (
              logoItem.label
            )}
          </Link>
        ) : null}
        <div className="ml-auto flex items-center gap-6">
          {rightItems.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              className={cn("transition", kindStyles[item.kind] ?? kindStyles.link)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
