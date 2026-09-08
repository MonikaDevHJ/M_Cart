const BuyerProfile = () => {
  const cards = [
    {
      icon: "MyOrder",
      name: "My_Order",
      Details: "View your Order History"
    },
    {
      icon: "WishList",
      name: "WishList",
      Details: "Your Saved Items"
    },
    {
      icon : "Addresses",
      name : "you Location",
      Details : "Manage delivery address"
    },
     {
      icon : "cart",
      name : "you Cart",
      Details : "Your Items"
    }
  ];

  return (
    <div className="p-10 ">
      {/* text */}
      <div className="justify-center text-center">
        <div className="">
          <p className="font-extrabold text-fuchsia-800 text-3xl">My Profile</p>
        </div>
        <div className="mt-3">
          <p className="font-bold  text-md text-xl">
            Manage Your Personal and Account Setting
          </p>
        </div>
      </div>

      {/* Iamge and Information Section */}
      <div className="mt-10 p-5 flex">
        <div className="flex gap-10">
          {/* Image Section */}
          <div className="">Image</div>

          {/* information Section  */}
          <div className="">
            <div className="">
              <input type="text" name="" id="" placeholder="Enter Your Name " />
            </div>

            <div className="">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Your Email "
              />
            </div>

            <div className="">
              <input
                type="number"
                name=""
                id=""
                placeholder="Enter Your Phone Number "
              />
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="">
          <button className="border border-fuchsia-700 rounded-2xl p-2">
            Edit
          </button>
        </div>
      </div>

      {/* card Section */}
      <div className="">
        
      </div>
    </div>
  );
};

export default BuyerProfile;
