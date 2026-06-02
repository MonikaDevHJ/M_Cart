import SellerGraph from "../component/seller/dashboard/SellerGraph";
import SellerRecentOrder from "../component/seller/dashboard/SellerRecentOrder";
import SellerCard from "../component/seller/dashboard/SellerCard";
import SellerNavbar from "../component/seller/dashboard/SellerNavbar";
import { redirect } from "next/navigation";
import { getUserRole } from "@/lib/getUserRole";
export default async function Seller() {
 const user = await getUserRole();

 if(!user){
  redirect("/seller-signup")
 }

 if(user.role !== "seller"){
  redirect("/buyer")
 }

 return (
    <div className="">
      <div className="">
        <SellerNavbar/>
      </div>

      <div className="mt-4 bg-gray-200 p-2  rounded-2xl  ">
        <SellerCard/>
        <SellerGraph/>
        <SellerRecentOrder/>
      </div>
    </div>
  );
}
