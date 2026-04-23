import Filter from "@/app/component/grocery/Filter";
import Items from "@/app/component/grocery/Items";
 
const Grocery = () => {
  return (
    <div className="w-full grid grid-cols-5  gap-4 p-5 mt-5">
      <div className="cols-span-2">
        <Filter/>
      </div>

      <div className="cols-span-3">
        <Items />
      </div>
    </div>
  );
};

export default Grocery;
