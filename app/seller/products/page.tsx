"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SellerProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletedId, setDeletedId] = useState<string | null>(null);

  // 🔥 Fetch Products
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

  const confirmDelete = async () => {
    if (!deletedId) return;

    try {
      const res = await fetch(`/api/products/${deletedId}`, {
        method: "DELETE"
      });

      if (!res.ok) {
        alert("Delete Failed 😢");
        return;
      }

      // ✅ remove from UI
      setProducts((prev) => prev.filter((item) => item.id !== deletedId));

      setDeletedId(null);
      alert("Deleted Successfully ✅");
    } catch (error) {
      console.log(error);
    }
  };
  // 🔥 Loading UI
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Loading Products...</p>
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
        {/* Button */}
        <Link
          href={"/seller/addproduct"}
          className="bg-blue-600 hover:bg-blue-400 text-white px-2 py-2 rounded-lg  font-medium shadow"
        >
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
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.stock === 0
                          ? "bg-red-100 text-red-600"
                          : "bg-green-200 text-green-800"
                      }`}
                    >
                      {item.stock === 0 ? "Out of Stock" : "Active"}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-2">
                      <Link  href={`/seller/editproduct/${item.id}`}   className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-md">
                        ✏️ Edit
                      </Link>

                      <button
                        onClick={() => setDeletedId(item.id)}
                        className="bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded-md"
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {deletedId && (
            <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/20">
              <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-2xl w-80 transition-all duration-300 scale-100">
                <h2 className="text-lg font-semibold text-gray-800">
                  Confirm Delete
                </h2>

                <p className="text-sm text-gray-700 mt-2">
                  Are you sure you want to delete this product?
                </p>

                <div className="flex justify-end gap-3 mt-5">
                  <button
                    onClick={() => setDeletedId(null)}
                    className="px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 transition"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={confirmDelete}
                    className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-4 text-sm text-gray-500 border-t">
          <p>
            Showing {products.length} of {products.length} products
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerProducts;
