import { NetWorthCard } from "@/components/dashboard/net-worth-card";
export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-full">
          <NetWorthCard
            totalAmount={62085.69}
            changeAmount={1234.56}
            changeType="increase"
          />
        </div>
      </div>
    </div>
  );
}
