import Image from "next/image";
import mcartlogo4 from "../../../public/assets/mcartlogo4.png";

const Item = () => {
  return (
    <div className="">
      <div className="">
        {/* Addrees */}

        <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-5">
          <div className="flex justify-between items-start">
            {/* Left Side */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Delivery Address</p>

              <h2 className="text-lg font-semibold text-gray-800">
                Monika H J
              </h2>

              <p className="text-gray-600 text-sm mt-1">
                Hosahalli, Jajur Post, Arsikere Taluk
              </p>

              <p className="text-gray-600 text-sm">Karnataka - 573103</p>

              <p className="text-gray-600 text-sm mt-1">
                Phone: +91 9535511306
              </p>
            </div>

            {/* Right Side */}
            <div>
              <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-5 py-2 rounded-xl font-medium transition-all duration-300">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md border-gray-200 rounded-2xl p-5 mt-5">
          <div className="grid grid-cols-4 mt-5 gap-20">
            {/* Image */}
            <div className="grid col-span-1">
              <Image
                src={mcartlogo4}
                alt="Product Image"
                height={250}
                width={250}
              ></Image>

              <div>
                <p>Quantity </p>
                <input type="number" name="" id=""  className="border p-0.5 rounded-xl"/>
              </div>
            </div>

         
            <div className="grid col-span-3">

                <div className="">
                    <p>Item Name</p>
                </div>
                <div>
                    Item Amount
                </div>

                <div>
                    Items Ratings
                </div>

                <div>
                    Delivery By Monday
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
