import  Link  from "next/link";

const Orders = () => {
  const Orders = [
    {
      id: 1022,
      CustomerName: "John",
      Status: "Pending",
      Amount: 1900,
      Date: "Apr 19, 2024",
      Action: "View"
    },
    {
      id: 1023,
      CustomerName: "Smith",
      Status: "Rejected",
      Amount: 1899,
      Date: "June 8 2000",
      Action: "View"
    },
    {
      id: 1024,
      CustomerName: "Faris",
      Status: "Deliveried",
      Amount: 1699,
      Date: "March 19 2026",
      Action: "View"
    },
     {
      id: 1025,
      CustomerName: "Chaii",
      Status: "Pending",
      Amount: 1999,
      Date: "March 20 2022",
      Action: "View"
    },
    {
      id: 1026,
      CustomerName: "Naduu",
      Status: "Deliveried",
      Amount: 1599,
      Date: "Jan 29 2026",
      Action: "View"
    },
    {
      id: 1027,
      CustomerName: "Guna",
      Status: "Deliveried",
      Amount: 1699,
      Date: "Feb 28 2026",
      Action: "View"
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-6">
      {/* Title */}
      <div>
        <p className="text-2xl md:text-3xl font-semibold  text-gray-800">
          No Of Orders
        </p>
      </div>

      {/* Top Bar */}
      <div className="mt-5 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Button */}
        <Link   href={"/seller/addproduct"} className="bg-blue-600 hover:bg-blue-400 text-white px-2 py-2 rounded-lg  font-medium shadow">
          +ADD NEW
        </Link>

        {/* Search Icons */}
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Search Product"
            id=""
            className="border rounded-lg px-3 py-2 w-full md:w-64 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
            ⚙️
          </button>
          <button className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600">
            ⬛
          </button>
        </div>
      </div>

      {/* Tables */}
      <div className="mt-6 bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            {/* Head */}
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="text-gray-700">
              {Orders.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 font-medium">#{item.id}</td>
                  <td className="px-4 py-3 font-medium">{item.CustomerName}</td>

                  <td className="px-4 py-3 font-medium">
                    <span
                      className={`px-3 py-3 rounded-full text-xs font-semibold  ${
                        item.Status === "Deliveried"
                          ? "bg-green-300 text-green-800"
                          : item.Status === "Rejected"
                            ? "bg-red-100 text-red-700"
                            : item.Status === "Pending"
                              ? "bg-orange-100 text-orange-500"
                              : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {item.Status}
                    </span>
                  </td>

                  <td className="px-4 py-3 font-medium"> ₹ {item.Amount}</td>
                  <td className="px-4 py-3 font-semibold">{item.Date}</td>
                  <td className="px-4 py-3 font-semibold">
                    <button className="border rounded-lg px-3 py-2 bg-purple-800 text-white">
                      {" "}
                      {item.Action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
