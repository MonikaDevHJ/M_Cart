import Image from "next/image";
import { Heart, ChevronRight } from "lucide-react";

const RecommendedProducts = () => {
  const products = [
    {
      id: 1,
      name: "boAt Airdopes 141",
      image: "/images/airpods.jpg",
      price: "₹1,299",
      mrp: "₹2,999",
      off: "57% OFF", 
    },
    {
      id: 2,
      name: "Noise ColorFit Pro 4",
      image: "/images/watch.jpg",
      price: "₹3,499",
      mrp: "₹6,999",
      off: "50% OFF",
    },
    {
      id: 3,
      name: "Adidas Ultraboost 22",
      image: "/images/shoe.jpg",
      price: "₹10,999",
      mrp: "₹16,999",
      off: "35% OFF",
    },
    {
      id: 4,
      name: "Safari Laptop Backpack",
      image: "/images/bag.jpg",
      price: "₹1,799",
      mrp: "₹2,999",
      off: "40% OFF",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-5">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-gray-800">
            Recommended For You
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Based on your recent activity
          </p>
        </div>

        <button className="flex items-center gap-1 text-sm font-semibold text-purple-600 hover:text-purple-700 transition">
          View All
          <ChevronRight size={16} />
        </button>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {/* IMAGE AREA */}
            <div className="relative bg-gray-50 p-4 flex items-center justify-center h-52">
              <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 transition">
                <Heart size={16} className="text-gray-500 group-hover:text-red-500 transition" />
              </button>

              <Image
                src={product.image}
                alt={product.name}
                width={160}
                height={160}
                className="object-contain"
              />
            </div>

            {/* DETAILS */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-800 truncate">
                {product.name}
              </h3>

              <div className="flex items-end gap-2 mt-3 flex-wrap">
                <p className="text-base font-bold text-gray-900">
                  {product.price}
                </p>

                <p className="text-xs text-gray-400 line-through">
                  {product.mrp}
                </p>

                <span className="ml-auto text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md">
                  {product.off}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;