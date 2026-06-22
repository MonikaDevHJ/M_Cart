import { redirect } from "next/navigation";
import { getUserRole } from "@/lib/getUserRole";
import BuyerNavbar from "../component/buyer/dashboard/BuyerNavbar";
import BuyerCard from "../component/buyer/dashboard/BuyerCard";
import RecentOrder from "../component/buyer/dashboard/RecentOrder";

export default async function Buyer() {
  const user = await getUserRole();

  if (!user) {
    redirect("/buyer-signup");
  }
  if (user.role !== "buyer") {
    redirect("/seller");
  }

  return (
    <div className="">
      <div className="">
        <BuyerNavbar />
      </div>
      <p className="text-black text-2xl font-bold">Buyer Dashboard</p>
      <div className="">
        <BuyerCard />
        <RecentOrder />
      </div>
    </div>
  );
}
