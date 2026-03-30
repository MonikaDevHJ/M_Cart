import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import SellerGraph from "../component/seller/dashboard/SellerGraph";
import SellerRecentOrder from "../component/seller/dashboard/SellerRecentOrder";
import SellerCard from "../component/seller/dashboard/SellerCard";

export default async function Seller() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="p-2 bg-gray-100 rounded-2xl ">
      <SellerCard />
      <SellerGraph />
      <SellerRecentOrder />
    </div>
  );
}
