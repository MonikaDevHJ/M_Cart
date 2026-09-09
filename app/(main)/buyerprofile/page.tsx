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
    <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-8 flex items-center justify-between shadow-sm ">
      {/* text */}
      <div className="flex items-center gap-8">
        {/* profile Image */}
        <div className="w-28 h-28 rounded-full bg-fuchsia-100 flex items-center justify-center">
          <span className="text-5xl">👤</span>
        </div>
        {/* Information */}
        <div className="">
          <p className="text-2xl font-bold text-gray-800">Monika H J</p>

          <p className="text-gray-50">monikahj7@gmail.com</p>
          <p className="text-gray-50">+91 8296612973</p>
        </div>
      </div>

      {/* Edit Button */}
      <button className="border border-fuchsia-700 text-fuchsia-900 hover:bg-fuchsia-700 hover:text-white px-6 py-3 rounded-xl font-semibold transition">✏️  Edit Profile</button>

    </div>

  );
};

export default BuyerProfile;
