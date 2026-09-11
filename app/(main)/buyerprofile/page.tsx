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

            <p className="text-gray-500">monikahj7@gmail.com</p>
            <p className="text-gray-500">+91 8296612973</p>
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

      {/* Personal Information */}
      <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location
            </label>

            <input
              type="text"
              placeholder="Enter your location"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-7">
          <button className="bg-fuchsia-800 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-xl font-semibold transition">
            Save Changes
          </button>
        </div>
      </div>

      {/* Account Setting */}
      {/* Account Settings */}
      <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800">Account Settings</h2>

        <div className="mt-6">
          {/* Change Password */}
          <div className="flex items-center justify-between py-5 border-b border-gray-200 cursor-pointer hover:bg-gray-50 px-3 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center">
                🔒
              </div>

              <div>
                <p className="font-semibold text-gray-800">Change Password</p>

                <p className="text-sm text-gray-500 mt-1">
                  Update your password for better security
                </p>
              </div>
            </div>

            <span className="text-gray-500 text-xl">→</span>
          </div>

          {/* Notifications */}
          <div className="flex items-center justify-between py-5 border-b border-gray-200 cursor-pointer hover:bg-gray-50 px-3 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                🔔
              </div>

              <div>
                <p className="font-semibold text-gray-800">Notifications</p>

                <p className="text-sm text-gray-500 mt-1">
                  Manage your notification preferences
                </p>
              </div>
            </div>

            <span className="text-gray-500 text-xl">→</span>
          </div>

          {/* Logout */}
          <div className="flex items-center justify-between py-5 cursor-pointer hover:bg-gray-50 px-3 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                🚪
              </div>

              <div>
                <p className="font-semibold text-gray-800">Logout</p>

                <p className="text-sm text-gray-500 mt-1">
                  Sign out from your account
                </p>
              </div>
            </div>

            <span className="text-gray-500 text-xl">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfile;
