"use client";

import { useEffect, useState } from "react";

const SellerProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  // 🔥 Delete Product
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE"
      });

      if (!res.ok) {
        alert("Deleted Failed Bro 😢");
        return;
      }
      if(res.ok){
        alert("Are u Sure want To delete! This data");
        return;
      }

      // Remove from UI
      setProducts((prev) => prev.filter((item) => item.id !== id));
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
                      <button className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-md">
                        ✏️ Edit
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
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
