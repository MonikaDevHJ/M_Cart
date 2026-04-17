"use client";

import { Delete } from "lucide-react";
import { useEffect, useState } from "react";

const SellerProducts = () => {
  //     price: 1499,
  //     stock: 25,
  //     image: "https://via.placeholder.com/50"
  //   },
  //   {
  //     id: 2,
  //     name: "Wireless Earbuds",
  //     price: 2499,
  //     stock: 40,
  //     image: "https://via.placeholder.com/50"
  //   },
  //   {
  //     id: 3,
  //     name: "Smartwatch",
  //     price: 3999,
  //     stock: 15,
  //     image: "https://via.placeholder.com/50"
  //   },
  //   {
  //     id: 4,
  //     name: "Cotton T-Shirt",
  //     price: 499,
  //     stock: 0,
  //     image: "https://via.placeholder.com/50"
  //   },
  //   {
  //     id: 5,
  //     name: "Leather Wallet",
  //     price: 799,
  //     stock: 8,
  //     image: "https://via.placeholder.com/50"
  //   }
  // ];

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Delete Function
  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/products/${id}`, {
        method: "DELETE"
      });
      // Remove from UI Instantly
      setProducts((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
        {/* Glass Card */}
        <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 flex flex-col items-center">
          {/* Animated Gradient Spinner */}
          <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin"></div>

          {/* Image */}
          <div className="mt-6 relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="loading"
              className="w-20 h-20 rounded-full object-cover shadow-md"
            />

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 blur-xl animate-pulse"></div>
          </div>

          {/* Text */}
          <p className="mt-6 text-gray-700 font-semibold text-lg">
            Loading Products
          </p>

          <p className="text-sm text-gray-500 mt-1">Please wait a moment...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-6">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
        Products
      </h1>

      {/* Top Bar */}
      <div className="mt-5 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Add Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium shadow">
          + Add New
        </button>

        {/* Search + Icons */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search..."
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

      {/* Table */}
      <div className="mt-6 bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            {/* Head */}
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="text-gray-700">
              {products.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  {/* Image */}
                  <td className="px-4 py-3">
                    <img
                      src={item.image_url}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </td>

                  {/* Name */}
                  <td className="px-4 py-3 font-semibold">{item.name}</td>

                  {/* Price */}
                  <td className="px-4 py-3 font-semibold">
                    ₹ {item.price.toLocaleString()}
                  </td>

                  {/* Stock */}
                  <td className="px-4 py-3 font-semibold">{item.stock}</td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-3 rounded-full text-xs font-semibold ${
                        item.stock === 0
                          ? "bg-red-100 text-red-600"
                          : "bg-green-300 text-green-800"
                      }`}
                    >
                      {item.stock === 0 ? "Out of Stock" : "Active"}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-2">
                      <button className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-md text-semibold">
                        ✏️ Edit
                      </button>

                      <button className="bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded-md text-semibold"
                      onClick={()=> handleDelete(item.id)}
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-4 text-sm text-gray-500 border-t">
          <p>
            Showing {products.length} of {products.length} products
          </p>

          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded-md bg-gray-100">
              ‹
            </button>
            <button className="px-3 py-1 border rounded-md bg-blue-600 text-white">
              1
            </button>
            <button className="px-3 py-1 border rounded-md bg-gray-100">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProducts;
