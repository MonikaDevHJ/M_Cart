const Items = () => {
  const Card = [
    {
      image: "Kurtha Image",
      Name: "Kurtha",
      Amout: "Red Color"
    },
    {
      image: "Jeans Image ",
      Name: "Kurtha",
      Amout: "Red Color"
    }
  ];

  return (
    <div>
      <div className="">
        <p className="font-extrabold text-2xl text-fuchsia-700">
          Pick You'r Drees
        </p>
      </div>
      <div className="p-5">
        <div className="flex gap-10 mt-10 ">
          {Card.map(
            (item, index) => (
              <div key={index} className="border p-4 ">
                <div>
                  <p className="">{item.image}</p>
                </div>
                <div className="">

                  <p>{item.Amout}</p>
                </div>

                <div>
                  <p>{item.Name}</p>  
                </div>
              </div>
            ),
            []
          )}
        </div>
      </div>
    </div>
  );
};

export default Items;
