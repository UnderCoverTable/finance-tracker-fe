import { Card } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";

interface NetWorthCardProps {
  totalAmount: number;
  changeAmount: number;
  changeType: "increase" | "decrease";
}

export function NetWorthCard({
  totalAmount,
  changeAmount,
  changeType,
}: NetWorthCardProps) {
  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalAmount);

  const formattedChange = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(changeAmount);

  return (
    <Card className="relative overflow-hidden border-none bg-gradient-to-br from-emerald-400 to-emerald-600 p-6 text-white shadow-lg">
      <div className="relative z-10 flex flex-col gap-1">
        <span className="text-sm font-medium text-emerald-50">Net Worth</span>
        <h2 className="text-4xl font-bold tracking-tight">{formattedTotal}</h2>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
            {changeType === "increase" ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            <span>
              {changeType === "increase" ? "+" : "-"}
              {formattedChange} this month
            </span>
          </div>
        </div>
      </div>

      {/* Decorative background circle/shape for the gradient effect */}
      <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-emerald-300/20 blur-2xl" />
    </Card>
  );
}
