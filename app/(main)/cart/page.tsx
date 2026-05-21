import Item from "../../component/cart/CartItem"
import Amount from "../../component/cart/Amount"


const page = () => {
  return (
    <div className="p-0.5 bg-gray-200">

        <div className="grid grid-cols-5 gap-5">
            <div className="col-span-4">
                  <Item/>
            </div>
            <div className="col-span-1">
                  <Amount/>
            </div>
        </div>
    </div>
  )
}

export default page
