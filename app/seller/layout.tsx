import SellerSidebar from "../component/seller/dashboard/SellerSidebar";
import SellerNavbar from "../component/seller/dashboard/SellerNavbar";

export default function SellerLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-1 sm:p-5">
      
      <div className="flex flex-col md:flex-row">
        
        {/* Sidebar */}
        <div className="md:w-1/4 lg:w-1/5">
          <SellerSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1  mt-4 md:mt-0">
          <SellerNavbar />
          {children}
        </div>

      </div>

    </div>
  );
}