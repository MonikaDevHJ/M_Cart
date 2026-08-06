import Items from "../component/buyer/products/Items";

type Props = {
  searchParams: Promise<{
    search?: string;
  }>;
};

const SearchPage = async ({ searchParams }: Props) => {
  const { search = " " } = await searchParams;
  console.log(search);

  const res = await fetch(
    `http://localhost:3000/api/products?search=${search}`,
    {
      cache: "no-store"
    }
  );

  const products = await res.json();

  console.log(products);

  return (
  <div className="p-5">
    <Items items={products}/>

  </div>
  )
};

export default SearchPage;
