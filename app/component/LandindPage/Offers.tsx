import Image from "next/image";
import PhonesOffers from "../../../public/assets/PhonesOffers.png";
import SamsungOffers from "../../../public/assets/SamsungOffers.png";
import tshirtiffers from "../../../public/assets/tshirtiffers.png";
import vivoOffers from "../../../public/assets/vivoOffers.png";

const images = [
  PhonesOffers,
  SamsungOffers,
  tshirtiffers,
  vivoOffers,
];

const Offers = () => {
  return (
    <div className="overflow-hidden    mt-20 ">
      <div className="">
        <p className="font-extrabold text-4xl text-fuchsia-700 ">Today's Offers</p>
      </div>
      <div className="flex gap-8 animate-scroll w-max mt-10">

        {/* Duplicate once only (important for smooth loop) */}
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="
              min-w-[220px] 
              sm:min-w-[260px] 
              md:min-w-[320px] 
              lg:min-w-[380px] 
              rounded-2xl 
              overflow-hidden 
              shadow-lg 
              hover:scale-105 
              transition-transform 
              duration-300
              cursor-pointer
            "
          >
            <Image
              src={img}
              alt="Offer"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default Offers;