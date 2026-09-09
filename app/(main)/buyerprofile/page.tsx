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
      icon: "Addresses",
      name: "you Location",
      Details: "Manage delivery address"
    },
    {
      icon: "cart",
      name: "you Cart",
      Details: "Your Items"
    }
  ];

  return (
    <div className="p-5 w-full  ">
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
      <div className="mt-20 p-5 flex">
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
      <div className="flex gap-5">
        {cards.map((card, index) => (
          <div key={index}>
            <div className="flex p-5 bg-gray-200 rounded-2xl  gap-5">
              <div className="">
                <p>{card.icon}</p>
              </div>

              <div>
                <p>{card.name}</p>
                <p>{card.Details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Personal Information */}
      <div className="mt-5 p-10">
        <div className="">
          <p className="font-bold text-2xl">Perosnal Information</p>
        </div>

        <div className="mt-5">
          <div className="grid grid-cols-2 ">
            <div className="grid-span-1">
              <p>Full Name</p>
              <input type="text" placeholder="Enter your Name" />
            </div>

            <div className="grid-span-1">
              <p>Email</p>
              <input type="text" placeholder="Enter your Email" />
            </div>
          </div>

          <div className="grid grid-cols-2 mt-5">
            <div className="grid grid-span-1">
              <p>Phone</p>
              <input type="number" placeholder="Enter your Phone Number" />
            </div>

            <div className="grid grid-span-1">
              <p>Location</p>
              <input type="text" placeholder="Enter Your Location" />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-7">
          <button className="bg-fuchsia-800 hover:bg-fuchsia-600 p-3 rounded-2xl">
            Save Changes
          </button>
        </div>

        {/* Regarding Account */}

        <div className="mt-10">
          <div className="">
            <p className="">Account Setting</p>
          </div>

          <div className="">
            <div className="grid grid-cols-5">
              <div className="grid grid-cols-1">
                <p>Symbol</p>
              </div>

              <div className="grid grid-cols-4">
                <p>change Password</p>
                <p>Update Your Password for better Securtiy</p>
              </div>
            </div>

             <div className="grid grid-cols-5">
              <div className="grid grid-cols-1">
                <p>Symbol</p>
              </div>

              <div className="grid grid-cols-4">
                <p>change Password</p>
                <p>Update Your Password for better Securtiy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfile;
