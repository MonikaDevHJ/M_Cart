"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditProduct = () => {
  const { id } = useParams();

  const [product, setProducts] = useState<any>(null);
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: ""
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();

      setProducts(data);

      //   Fill Form here
      setForm({
        name: data.name,
        price: data.price,
        stock: data.stock
      });
    };
    if (id) fetchProducts();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          price: form.price,
          stock: form.stock
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert("Update Failed ❌");
        return;
      }

      alert("Product Updated ✅");
    } catch (error) {
      console.log(error);
      alert("Error ❌");
    }
  };

  return (
    <div className="p-5">
      <h1>Edit Your This Page</h1>

      {!product ? (
        <p>Loading..........</p>
      ) : (
        <div className="p-6 max-w-xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Edit Product</h1>

          {!product ? (
            <p>Loading...</p>
          ) : (
            <div className="bg-white shadow rounded-xl p-6 space-y-4">
              {/* Name */}
              <div>
                <label className="block font-medium mb-1">Product Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block font-medium mb-1">Price</label>
                <input
                  type="number"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              {/* Stock */}
              <div>
                <label className="block font-medium mb-1">Stock</label>
                <input
                  type="number"
                  value={form.stock}
                  onChange={(e) => setForm({ ...form, stock: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              <button
                onClick={handleUpdate}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
              >
                Update Product
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default EditProduct;
