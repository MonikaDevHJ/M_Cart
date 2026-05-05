import Item from "@/app/component/gift/item";
import Filter from "@/app/component/gift/filter";

const GiftPage = () => {
  return (
    <div className="w-full grid grid-cols-5">
      <div className="grid-span-2">
        <Filter />
      </div>

      <div className="grid-span-5">
        <Item />
      </div>
    </div>
  );  
};

export default GiftPage;
