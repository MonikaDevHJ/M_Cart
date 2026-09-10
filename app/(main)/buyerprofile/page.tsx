const BuyerProfile = () => {
  const cards = [
    {
      icon: "📦",
      name: "My_Order",
      Details: "View your Order History"
    },
    {
      icon: "❤️",
      name: "WishList",
      Details: "Your Saved Items"
    },
    {
      icon: "📍",
      name: "you Location",
      Details: "Manage delivery address"
    },
    {
      icon: "🛒",
      name: "you Cart",
      Details: "Your Items"
    }
  ];

  return (
    <div>
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
        <button className="border border-fuchsia-700 text-fuchsia-900 hover:bg-fuchsia-700 hover:text-white px-6 py-3 rounded-xl font-semibold transition">
          ✏️ Edit Profile
        </button>
      </div>

      {/* card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border  border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl  bg-fuchsia-100 flex items-center justify-center">
                <span>{card.icon}</span>

              </div>

              {/* details */}
              <div>
                <p className="font-bold text-gray-800">{card.name}</p>
                <p className="text-sm text-gray-500 mt-1">{card.Details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerProfile;
