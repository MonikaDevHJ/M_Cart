import Filter from "../../component/men/Filter";
import Items from "../../component/men/Items";
const MenPage = () => {
  return (
    <div className="w-full grid grid-cols-5 gap-4 p-5 mt-5">
      <div className="col-span-1">
        <Filter/>
      </div>

      <div className="cols-span-4">
        <Items />
      </div>
    </div>
  );
};

export default MenPage;
