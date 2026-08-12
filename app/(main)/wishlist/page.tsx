const Wishlist = () => {
  return (
    <div>
      <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <div className="bg-gray-400 rounded-2xl">
          {/* Image + Heart Symbol */}
          <div className=" relative border border-r-fuchsia-600">
            <div className="flex items-center">
              {/* image */}
              <div className="">
                <p>Image</p>
              </div>
              {/* Heart Symbol */}
              <div>
                <p>Heart Symbol</p>
              </div>
            </div>
          </div>


          {/* Details */}
          <div className="mt-6 flex ">
              {/* Product Name */}
            <div className="">

            </div>

            {/* Product Price */}
            <div className="">

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Wishlist;
