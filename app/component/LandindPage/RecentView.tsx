"use client"

import { useRef } from "react"
import Image from "next/image"

import earings from "../../../public/assets/earings.png"
import Kurta from "../../../public/assets/Kurta.png"
import MiltonHotBoxes from "../../../public/assets/MiltonHotBoxes.png"
import one_piece from "../../../public/assets/one_piece.png"
import realme_Bluetooh from "../../../public/assets/realme_Bluetooh.png"
import Samsung_mobile from "../../../public/assets/SamsungOffers.png"
import Water_flowers from "../../../public/assets/Water_flowers.png"

const RecentViewProducts = () => {

  const products = [
    { img: earings, name: "Earrings" },
    { img: Kurta, name: "Bun Clip" },
    { img: one_piece, name: "Women's Skirts" },
    { img: MiltonHotBoxes, name: "Casseroles" },
    { img: realme_Bluetooh, name: "True Wireless" },
    { img: Samsung_mobile, name: "Mobiles" },
    { img: Water_flowers, name: "Flowers" },
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