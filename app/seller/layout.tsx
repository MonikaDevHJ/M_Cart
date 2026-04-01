import SellerSidebar from "../component/seller/dashboard/SellerSidebar";

export default function SellerLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lg:p-0.5 sm:p-5 ">
      <div className="flex flex-col md:flex-row gap-1">
        {/* Sidebar */}
        <div className="md:w-1/4 lg:w-1/5">
          <SellerSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1  mt-4 md:mt-0 ">
        

          <div className="p-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
