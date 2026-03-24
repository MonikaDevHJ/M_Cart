import SellerSidebar from "../component/seller/dashboard/SellerSidebar";
import SellerNavbar from "../component/seller/dashboard/SellerNavbar";

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-5 min-h-screen">
      
      <div className="col-span-1">
        <SellerSidebar />
      </div>

      <div className="col-span-4">
        <SellerNavbar />
      </div>

    </div>
  );
}