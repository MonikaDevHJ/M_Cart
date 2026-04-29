import Filter from "../../component/womens/Filter"
import Items from "../../component/womens/Items"

const WomensPage = () => {
  return (
    <div className="w-full grid grid-cols-5  gap-4 p-5  bg-gray-100">
      
      <div className="col-span-1">
        <Filter />
      </div>

      <div className="col-span-4  ">
        <Items />
      </div>

    </div>
  )
}

export default WomensPage