import { it } from "node:test";

const SellerProducts = () => {
  const Products = [
    {
      id: 1,
      Name: "Running Shoes",
      Price: 1466,
      Stock: 25,
      Status: "Active",
      Image: "https://via.placeholder.com/50"
    },
    {
      id: 2,
      Name: "Cooton T-Shirt",
      Price: "499",
      Stock: 0,
      Status: "Out Of Stock",
      Image: "https://via.placeholder.com/50"
    },

    {
      id: 3,
      Name: "Upper",
      Price: "699",
      Stock: 6,
      Status: "Out Of Stock",
      Image: "https://via.placeholder.com/50"
    }
  ];

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

          <input
            type="text"
            placeholder="Search..."
            className="border px-3 py-2 rounded-lg "
          />
        </div>
      </div>

      {/* Tables */}
      <div className="mt-6 bg-white rounded-xl shadow p-4">
        <table className="w-full text-left">
          <thead className="">
            <tr className="text-gray-600 border-b bg-gray-100">
              <th className="py-2">Image</th>
              <th className="">Name</th>
              <th className="">Price</th>
              <th className="">Stock</th>
              <th className="">Status</th>
              <th className="">Action</th>
              <th className="">Action</th>
            </tr>
          </thead>

          <tbody className="">
            {Products.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-3">
                  <img src={item.Image} className="w-12 h-12 rounded" />
                </td>
                <td>{item.Name}</td>
                <td>{item.Price}</td>
                <td>{item.Stock}</td>

                <td>
                  <span
                    className={`px-2 py-1 rounded text-sm    ${item.Stock === 0 ? "bg-red-100 text-red-600" : "bg-green-500 text-black"}   `}
                  >
                    {item.Stock === 0 ? "Out Of Stock " : "Active"}
                  </span>
                </td>

                <td>
                  <span className="px-2 py-1 rounded text-sm bg-purple-500 text-white ">Edit</span>
                </td>

                <td>
                  <span className="px-2 py-1 rounded text-sm bg-red-500 text-white">Delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerProducts;
