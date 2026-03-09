"use client"

import { useRef } from "react"
import Image from "next/image"


import Jewlery_RecentView from "../../../public/assets/Jewlery_RecentView.png"
import Strug_RecentView from "../../../public/assets/Strug_RecentView.png"
import RecentView_Bluetooth from "../../../public/assets/RecentView_Bluetooth.png"
import RecentView_Brideimg from "../../../public/assets/RecentView_Brideimg.png"
import RecentView_earringimg from "../../../public/assets/RecentView_Bluetooth.png"
import RecentView_Kurthaimg from "../../../public/assets/RecentView_Kurthaimg.png"
import RecentView_Miltonimg from "../../../public/assets/RecentView_Miltonimg.png"
import RecentView_neightDress from "../../../public/assets/RecentView_neightDress.png"
import RecentView_Samsungimg from "../../../public/assets/RecentView_Samsungimg.png"
const RecentViewProducts = () => {

  const products = [
    { img: RecentView_Bluetooth, name: "Earrings" },
    { img: RecentView_Brideimg, name: "Bun Clip" },
    { img: RecentView_earringimg, name: "Women's Skirts" },
    { img: RecentView_Kurthaimg, name: "Casseroles" },
    { img: RecentView_Miltonimg, name: "True Wireless" },
    { img: RecentView_neightDress, name: "Mobiles" },
    { img: RecentView_Samsungimg, name: "Flowers" },
    { img: Jewlery_RecentView, name: "Jewleries" },
    { img: Strug_RecentView , name:"Strug"},
  ]

  // ✅ Correct TypeScript type
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    })
  }

  return (
    <div className="mt-20 bg-red-500 p-6 rounded-xl relative">

      {/* TITLE */}
      <p className="text-white font-bold text-2xl mb-6">
        Still looking for these?
      </p>

      {/* LEFT ARROW */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow hover:bg-gray-200"
      >
        ◀
      </button>

      {/* PRODUCTS */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {products.map((item, index) => (
          <div
            key={index}
            className="min-w-[220px] bg-white rounded-xl p-3 shadow hover:scale-105 transition duration-300 cursor-pointer"
          >
            <Image
              src={item.img}
              alt={item.name}
              className="rounded-lg"
            />

            <p className="text-sm mt-2 font-medium">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* RIGHT ARROW */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow hover:bg-gray-200"
      >
        ▶
      </button>

    </div>
  )
}

export default RecentViewProducts