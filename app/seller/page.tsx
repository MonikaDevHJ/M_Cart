import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SellerSidebar from "../component/seller/dashboard/SellerSidebar";
import SellerNavbar from "../component/seller/dashboard/SellerNavbar";
import SellerGraph from "../component/seller/dashboard/SellerGraph";
import SellerRecentOrder from "../component/seller/dashboard/SellerRecentOrder";
import SellerCard from "../component/seller/dashboard/SellerCard";

export default async function Seller() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="p-5">
      <div className="grid grid-cols-5 ">
        <div className="grid col-span-1">
          <SellerSidebar />
        </div>

        <div className="grid cols-span-4">
          <SellerNavbar />
          <SellerCard />
          <SellerGraph />
          <SellerRecentOrder />
        </div>
      </div>
    </div>
  );
}
