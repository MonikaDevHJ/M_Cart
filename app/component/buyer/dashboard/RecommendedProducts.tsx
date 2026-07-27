import Image from "next/image";
import { Heart, ChevronRight } from "lucide-react";

const RecommendedProducts = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-lg font-bold text-gray-800">Recommended For You</p>
          <p className="text-xs">Based on Your recent activity</p>
        </div>

        <div>
          <button className="flex items-center gap-1 text-sm font-semibold text-purple-600 hover:text-purple-700 transition">
            View All
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
