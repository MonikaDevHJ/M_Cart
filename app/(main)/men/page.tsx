import Filter from "../../component/men/Filter";
// import Items from "../../component/men/Items";
import { prisma } from "@/lib/prisma";
import Items from "../../component/womens/Items";

const MenPage = async () => {
  const products = await prisma.product.findMany({
    where: {
      selectCategory: "men"
    },
    orderBy: {
      created_at: "desc"
    }
  });
  console.log(products);

  return (
    <div className="w-full grid grid-cols-5 gap-4 p-5 mt-5">
      <div className="col-span-1">
        <Filter />
      </div>

      <div className="cols-span-4">
        <Items items={products} />
      </div>
    </div>
  );
};

export default MenPage;
