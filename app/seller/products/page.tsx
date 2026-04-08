const SellerProducts = () => {
  return (
    <div className="">
      <div className="">
        <p className="font-bold text-3xl">Products</p>
      </div>

      {/*  */}
      <div className="mt-5">
        <div className="flex justify-between">
          <button className="border rounded-lg bg-blue-600 p-2 text-white  font-medium hover:bg-blue-700">
            + Add New
          </button>

          <input type="text" placeholder="Search..." className="border px-3 py-2 rounded-lg " />
        </div>
      </div>

      {/* Tables */}
      <div className="mt-6 bg-white rounded-xl shadow p-4">
        <table className="w-full text-left">
          <thead className="">
            <tr className="text-gray-600 border-b">
              <th className="py-2">Image</th>
              <th className="">Name</th>
              <th className="">Stock</th>
              <th className="">Status</th>
              <th className="">Action</th>
            </tr>
          </thead>
          <tbody className="">

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerProducts;
