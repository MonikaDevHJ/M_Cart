import Filter from "../component/womens/Filter"
import Items from "../component/womens/Items"

const WomensPage = () => {
  return (
    <div className="w-full grid grid-cols-5  gap-4">
      
      <div className="col-span-2 border">
        <Filter />
      </div>

      <div className="col-span-3 border">
        <Items />
      </div>

    </div>
  )
}

export default WomensPage