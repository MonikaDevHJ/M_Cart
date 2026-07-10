
const Address = () => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-3xl p-5 md:p-7">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-5">
        {/* LEFT */}
        <div>
          <p className="text-sm text-gray-500 mb-1">Delivery Address</p>

          <h2 className="text-xl font-bold text-gray-800">Monika H J</h2>

          <p className="text-gray-600 mt-2">Hosahalli, Jajur Post,</p>

          <p className="text-gray-600">Arsikere Taluk, Karnataka - 573103</p>

          <p className="text-gray-600 mt-2">Phone : +91 9535511306</p>
        </div>

        {/* RIGHT */}
        <div>
          <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-md transition duration-300">
            Edit Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
