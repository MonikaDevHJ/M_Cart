const Navbar = () => {
  return (
    <div className="">
      <div className="flex gap-10 border border-fuchsia-600 p-5  rounded-4xl">
        <div className="">
          <p className="font-bold text-2xl text-fuchsia-700">M_Cart</p>
        </div>

        {/* Sarch Bar Incone */}
        <div className="">
          <p className="">Search Icon</p>
        </div>

        <div className="">
          <p className="font-bold text-2xl text-fuchsia-700"> Buyer</p>
        </div>

        <div className="">
          <p className="font-bold text-2xl text-fuchsia-700"> Seller</p>
        </div>

        <div className="font-bold text-2xl text-fuchsia-700">Add To Cart</div>
      </div>
    </div>
  );
};

export default Navbar;
