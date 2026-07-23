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
    <div className="bg-gray-200 p-5 border rounded-xl">
      <div className="">
        <BuyerNavbar />
      </div>
      <div className="">
        <BuyerCard />
        <RecentOrder />
      </div>
    </div>
  );
}
