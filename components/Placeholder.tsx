import { cn } from "@/lib/utils";

type PlaceholderProps = {
  label: string;
  className?: string;
};

export function Placeholder({ label, className }: PlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-100 text-xs font-medium text-slate-500",
        className
      )}
    >
      {label}
    </div>
  );
}
