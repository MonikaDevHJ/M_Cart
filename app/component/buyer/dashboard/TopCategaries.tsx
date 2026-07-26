import { Smartphone, Shirt, Footprints, ShoppingBag, ChevronRight } from "lucide-react";

const TopCategories = () => {
  const categories = [
    {
      name: "Electronics",
      orders: "6 orders",
      icon: Smartphone,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      name: "Fashion",
      orders: "3 orders",
      icon: Shirt,
      iconBg: "bg-pink-50",
      iconColor: "text-pink-500",
    },
    {
      name: "Footwear",
      orders: "2 orders",
      icon: Footprints,
      iconBg: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      name: "Accessories",
      orders: "1 order",
      icon: ShoppingBag,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <h2 className="text-lg font-bold text-gray-800 mb-5">
        Top Categories
      </h2>

      <div className="space-y-2">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.name}
              className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${category.iconBg}`}
                >
                  <Icon size={18} className={category.iconColor} />
                </div>

                <p className="text-sm font-medium text-gray-700 truncate">
                  {category.name}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <p className="text-sm text-gray-500">
                  {category.orders}
                </p>

                <ChevronRight size={16} className="text-gray-300" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCategories;