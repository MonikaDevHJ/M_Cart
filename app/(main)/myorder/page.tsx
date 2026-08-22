const myOrderPage = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4  lg:p-10 sm:p-5">
      {/* Headers */}
      <div className="text-center">
        <p className="font-extrabold text-2xl text-fuchsia-800">My Order's</p>
      </div>

      {/* Table Header*/}
      <div className="mt-5">
        <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-gray-50 rounded-lg text-xs font-semibold text-gray-500 uppercase tracking-wide">
          <div className="col-span-5">Product</div>

          <div className="col-span-2">Price</div>

          <div className="col-span-2">Status</div>

          <div className="col-span-2">Date</div>

          <div className="col-span-1 text-center">View</div>
        </div>
      </div>
    </div>
  );
};
export default myOrderPage;
