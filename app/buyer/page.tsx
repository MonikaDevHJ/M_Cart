import { redirect } from "next/navigation";
import { getUserRole } from "@/lib/getUserRole";
import BuyerNavbar from "../component/buyer/dashboard/BuyerNavbar";
import BuyerCard from "../component/buyer/dashboard/BuyerCard";
import RecentOrder from "../component/buyer/dashboard/RecentOrder";
import OrderStatus from "../component/buyer/dashboard/OrderStatus";
import TopCategaries from "../component/buyer/dashboard/TopCategaries";
// import RecommendedProducts from "../component/buyer/dashboard/RecommendedProducts";
// import ExclusiveOffers from "../component/buyer/dashboard/ExclusiveOffers";

export default async function Buyer() {
  const user = await getUserRole();

  if (!user) {
    redirect("/buyer-signup");
  }
  if (user.role !== "buyer") {
    redirect("/seller");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-2 sm:p-4 lg:p-3">
      {/* NAVBAR */}
      <BuyerNavbar />

      {/* TOP CARDS */}
      <BuyerCard />

      {/* MAIN DASHBOARD */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-4">
          <RecentOrder />

          {/* <RecommendedProducts /> */}
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-1 space-y-4">
          <OrderStatus />

          <TopCategaries />

          {/* <ExclusiveOffers /> */}
        </div>

      </div>
    </div>
  );
}
