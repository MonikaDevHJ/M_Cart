import SellerSidebar from "../component/seller/dashboard/SellerSidebar";
import SellerNavbar from "../component/seller/dashboard/SellerNavbar";

export default function SellerLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-5">

   
    <div className="grid grid-cols-5 ">
      <div className=" grid col-span-1">
        <SellerSidebar />
      </div>

      <div className="grid col-span-4">
        <SellerNavbar />
        {children}
      </div>
    </div>
     </div>
  );
}
