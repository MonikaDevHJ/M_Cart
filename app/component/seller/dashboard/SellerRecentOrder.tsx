const SellerRecentOrder = () => {
  const Order = [
    {
      id: "#1021  ",
      Customer: "John Doe",
      status: "Delivered",
      Amount: "₹1,200",
      Date: "Apr 20, 2025"
    },
    {
      id: "#1022",
      Customer: "Emma Smith",
      status: "Pending",
      Amount: "₹850",
      Date: "Apr 18, 2024"
    },
    {
      id: "#1021",
      Customer: "Michael Lee",
      status: "Shipped",
      Amount: "₹2,500",
      Date: "Apr 17, 2024"
    },
    {
      id: "#1020",
      Customer: "Sarah Khan",
      status: "Cancelled",
      Amount: "₹1,100",
      Date: "Apr 15, 2024"
    }
  ];

  const getStatusStyle = (status: any) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Shipped":
        return "bg-blue-100 text-blue-600";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      default:
        return "";
    }
  };

  return (
    <div className="bg-white mt-10 rounded-xl p-2 shadow-sm ">
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

          <tbody>
            {Order.map((order, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 font-medium">{order.id}</td>
                <td className="py-3 font-medium">{order.Customer}</td>

                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(order.status)} `}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="py-3">{order.Amount}</td>
                <td className="py-3">{order.Date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );  
};

export default SellerRecentOrder;
