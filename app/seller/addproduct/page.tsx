const AddAproduct = () => {
  return (
    <div className="">
      <div className="">
        <p className="font-extrabold text-2xl">Add Product</p>
      </div>

      <div className="bg-gray-100 rounded-xl p-5 mt-2">
        <div className="">
          <p className="font-semibold">Product Name</p>
          <input type="text" name="" id="" className="border-b-black" />
        </div>

        {/* Description */}
        <div className="">
          <p className="font-semibold">Descritpion</p>
        </div>

        {/* Price And Categroy */}
        <div className="flex">
          {/* Price */}
          <div className="">
            <p className="">Pirce</p>
            <input type="text" />
          </div>
          {/* Categroy */}
          <div className="">
            <p className="">Category</p>
            <input type="dropdown" />
          </div>
        </div>

        {/* Stack Quantity and Product Image */}

        <div className="flex">
          <div className="">Stock Quantity</div>
          <div className="">Product Image</div>
        </div>

        <div className="">
          <button className="font-bold ">Add Product</button>
        </div>
      </div>
    </div>
  );
};

export default AddAproduct;
