import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import SellerGraph from "../component/seller/dashboard/SellerGraph";
import SellerRecentOrder from "../component/seller/dashboard/SellerRecentOrder";
import SellerCard from "../component/seller/dashboard/SellerCard";
import SellerNavbar from "../component/seller/dashboard/SellerNavbar";
export default async function Seller() {
const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="">
      <div className="">
        <SellerNavbar />
      </div>

      <div className="mt-4 bg-gray-200 p-2  rounded-2xl  ">
        <SellerCard />
        <SellerGraph />
        <SellerRecentOrder />
      </div>
    </div>
  );
}
