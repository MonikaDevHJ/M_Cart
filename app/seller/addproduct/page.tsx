"use client";

import { useState } from "react";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const AddAproduct = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: ""
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      // Add Text Field
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("price", form.price);
      formData.append("category", form.category);
      formData.append("stock", form.stock);

      if (file) {
        formData.append("image", file);
      }

      const res = await fetch("/api/products", {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      console.log(data);
      alert("Product SuscesFully Added ✅");
    } catch (error) {
      console.log(error);
      alert("Error ❌");
    }
  };

  const [file, setFile] = useState<File | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };

  const SearchParams = useSearchParams();
  const id = SearchParams.get("id");

  useEffect(() => {
  if (!id) return; // 👉 only run for edit

  const fetchProduct = async () => {
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();

    setForm({
      name: data.name || "",
      description: data.description || "",
      price: data.price || "",
      category: data.category || "",
      stock: data.stock || ""
    });
  };

  fetchProduct();
}, [id]);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <p className="font-bold sm:text-2xl mb-4 text-xl">Add Product</p>

      <div className="bg-white rounded-2xl shadow p-5 sm:p-6 lg:p-8">
        {/* Product Name */}
        <div className="mb-4">
          <label className="font-semibold block mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Product name"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <p className="font-semibold mb-1">Description</p>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter Product Description"
            className="border w-full rounded-lg px-3 py-2 h-28"
          ></textarea>
        </div>

        {/* Price & Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="font-semibold mb-1">Price (₹)</p>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="₹ 0"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <p className="font-semibold mb-1">Category</p>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Food">Food</option>
              <option value="Makeup">Make Up Item</option>
            </select>
          </div>
        </div>

        {/* Stock */}
        <div className="mb-6">
          <label className="font-semibold mb-1 block">Stock Quantity</label>
          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            placeholder="Enter Stock"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* Product Image */}
        <div className="mb-6">
          <label className="font-semibold mb-1 block">Product Image</label>

          <label className="flex flex-col items-center justify-center w-full h-80 border-2 border-dashed rounded-xl cursor-pointer hover:bg-gray-50">
            <input
              type="file"
              name=""
              id=""
              className="text-center ml-28 mt-2"
              onChange={handleFile}
            />

            {/* Preview */}

            {!file ? (
              <>
                <p className="text-gray-500">Click to Upload Image</p>
                <p className="text-sm text-gray-400">PNG, JPG, JPEG</p>
              </>
            ) : (
              <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="mt-3 h-32 rounded-lg object-cover"
              />
            )}
          </label>
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAproduct;
