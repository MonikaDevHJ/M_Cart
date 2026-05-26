import Item from "../../component/cart/CartItem";
import Amount from "../../component/cart/Amount";

const page = () => {
  return (
    <div className="p-2 bg-gray-200 min-h-screen">
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-1">
        
        <div className="lg:col-span-4">
          <Item />
        </div>

        <div className="lg:col-span-1 lg:mt-9">
          <Amount />
        </div>

      </div>

    </div>
  );
};

export default page;