import {
  FaBox,
  FaShoppingCart,
  FaRupeeSign,
  FaExclamationCircle
} from "react-icons/fa";

const SellerCard = () => {
  const cards = [
    {
      title: "Total Products",
      value: 150,
      icon: <FaBox />,
      color: "bg-blue-500"
    },
    {
      title: "Total Orders",
      value: 320,
      icon: <FaShoppingCart />,
      color: "bg-green-500"
    },
    {
      title: "Total Revenue",
      value: "₹320",
      icon: <FaRupeeSign />,
      color: "bg-purple-500"
    },
    {
      title: "Pending Orders",
      value: 20,
      icon: <FaExclamationCircle />,
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="mt-6 sm:mt-10 px-2 sm:px-0">
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              ${card.color} text-white
              rounded-2xl p-4 sm:p-5
              shadow-md hover:shadow-xl
              transition duration-300
              cursor-pointer
            `}
          >
            {/* Top Section */}
            <div className="flex items-center justify-between">
              
              <div className="text-xl sm:text-2xl">
                {card.icon}
              </div>

              <p className="text-sm sm:text-base font-medium text-right">
                {card.title}
              </p>
            </div>

            {/* Value */}
            <p className="mt-4 text-2xl sm:text-3xl font-bold">
              {card.value}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default SellerCard;