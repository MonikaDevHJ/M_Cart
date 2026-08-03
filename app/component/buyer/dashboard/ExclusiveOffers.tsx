import { prisma } from "@/lib/prisma";

export const revalidate = 60;

const ExclusiveOffers = () => {
  return (
    <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-white rounded-2xl border border-purple-100 shadow-sm p-5 overflow-hidden">
      <div className="flex items-center justify-between gap-4">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <h2 className="text-lg font-bold text-purple-900">
            Exclusive Offers for You!
          </h2>

          <p className="text-sm text-gray-600 mt-2 leading-6 max-w-xs">
            Grab the best deals and exciting offers only for you.
          </p>

          <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition shadow-sm">
            Explore Offers
          </button>
        </div>

        {/* RIGHT SIDE - GIFT BOX */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 flex items-center justify-center">
          {/* soft glow */}
          <div className="absolute w-20 h-20 bg-purple-300/40 rounded-full blur-2xl"></div>

          {/* confetti */}
          <span className="absolute top-2 left-3 w-2 h-2 bg-yellow-400 rounded-full rotate-12"></span>
          <span className="absolute top-5 right-4 w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
          <span className="absolute bottom-6 left-2 w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
          <span className="absolute bottom-3 right-2 w-2 h-2 bg-green-400 rounded-full"></span>

          {/* shadow */}
          <div className="absolute bottom-3 w-16 h-3 bg-purple-300/40 rounded-full blur-md"></div>

          {/* gift box */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24">
            {/* box base */}
            <div className="absolute bottom-0 left-0 w-full h-14 rounded-b-xl bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-md"></div>

            {/* lid */}
            <div className="absolute top-0 left-1 w-[92%] h-6 rounded-t-xl bg-gradient-to-br from-yellow-200 to-yellow-400 shadow-sm"></div>

            {/* left ribbon */}
            <div className="absolute top-0 left-[42%] w-3 h-full bg-pink-500 rounded-md"></div>

            {/* horizontal ribbon */}
            <div className="absolute top-[38%] left-0 w-full h-3 bg-pink-500 rounded-md"></div>

            {/* bow left */}
            <div className="absolute -top-1 left-[36%] w-6 h-4 bg-red-400 rounded-full rotate-[-25deg]"></div>

            {/* bow right */}
            <div className="absolute -top-1 right-[36%] w-6 h-4 bg-red-300 rounded-full rotate-[25deg]"></div>

            {/* bow center */}
            <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-pink-600 rounded-full"></div>

            {/* side highlight */}
            <div className="absolute top-6 right-0 w-2 h-10 bg-white/20 rounded-r-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffers;