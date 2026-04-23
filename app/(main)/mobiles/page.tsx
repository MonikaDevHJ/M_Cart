import Filter from "@/app/component/mobiles/Filter";
import Items from "@/app/component/mobiles/Items";

const MobilePage = () => {
  return (
    <div className="w-full grid  grid-cols-5  gap-10">
      <div className="cols-span-3">
        <Filter />
      </div>

      <div className="cols-span-3">
        <Items />
      </div>
    </div>
  );
};

export default MobilePage;
