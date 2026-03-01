import { cn } from "@/lib/utils";

type PlaceholderProps = {
  label: string;
  className?: string;
};

export function Placeholder({ label, className }: PlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md border border-dashed border-[#ffd966] bg-[#fff9d6] text-xs font-medium text-[#6b7280]",
        className
      )}
    >
      {label}
    </div>
  );
}
