import { cn } from "@/lib/utils";
import Link from "next/link";

export default function AppFooter({ className }: { className?: string }) {
  return (
    <footer className="text-muted-foreground border-t bg-zinc-900">
      <div
        className={cn(
          "container flex flex-col-reverse lg:flex-row py-7 min-h-16 shrink-0 items-center gap-2",
          className
        )}
      >
        <span className="text-sm text-center grow">
          <span>Made with &#9829; by</span>
          <Link
            href={`https://github.com/phyohtetarkar`}
            target="_blank"
            className="ms-1 font-semibold text-foreground hover:opacity-70"
          >
            Phyo Htet Arkar
          </Link>
        </span>
      </div>
    </footer>
  );
}
