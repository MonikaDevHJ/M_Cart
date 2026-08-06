import { prisma } from "@/lib/prisma";
import Filter from "../../component/buyer/products/Filter";
import Items from "../../component/buyer/products/Items";

const Grocery = async () => {
  const Product = await prisma.product.findMany({
    where: {
      selectCategory: "grocery"
    },
    orderBy: {
      created_at: "desc"
    }
  });

  return (
  <div className="w-full grid grid-cols-5 gap-4 p-5 bg-gray-100">
      <div className="col-span-1">
        <Filter />
      </div>

      <div className="col-span-4">
        <Items items={Product} />
      </div>
    </div>
  );
};

export default Grocery;
