const SellerRecentOrder = () => {
  const Order = [
    {
      id: "#01",
      Customer: "John Doe",
      status: "Delivered",
      Amount: "₹1,200",
      Date: "Apr 20, 2025"
    },
    {

    }
  ];

  return (
    <div className="bg-white mt-10 rounded-xl p-5 shadow-sm ">
      <div className="">
        <p className="font-bold text-xl">Recent Order</p>
      </div>

      {/* Tables Started */}
      <div className="oberflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="w-full text-left  border-collapse">
            <tr className="text-gray-500 border-b">
              <th className="py-3">Order ID</th>
              <th className="py-3">Customer</th>
              <th className="py-3">Status</th>
              <th className="py-3">Amount</th>
              <th className="py-3">Date</th>
            </tr>
          </thead>

          <tbody>{}</tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerRecentOrder;
