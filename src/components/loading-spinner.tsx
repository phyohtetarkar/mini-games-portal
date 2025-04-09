import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <div className="flex items-center justify-center py-8">
      <LoaderCircle className={cn("size-8 animate-spin", className)} />
    </div>
  );
};

export { LoadingSpinner };
