import Filter from "../../component/buyer/products/Filter";
import Items from "../../component/buyer/products/Items"
import { prisma } from "@/lib/prisma";

export const revalidate = 60;

const WomensPage = async () => {
  const products = await prisma.product.findMany({
    where: {
      selectCategory: "womens"
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
        <Items items={products} />
      </div>
    </div>
  );
};

export default WomensPage;
