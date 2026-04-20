"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditProduct = () => {
  const { id } = useParams();

  const [product, setProducts] = useState<any>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();

      setProducts(data);
    };
    if (id) fetchProducts();
  }, [id]);

  return (
    <div className="p-5">
      <h1>Edit Your This Page</h1>

      {!product ? (
        <p>Loading..........</p>
      ) : (
        <div>
          <p>
            <b>Name:</b>
            {product.name}
          </p>
          <p>
            <b>Price : </b>
            {product.price}
          </p>
          <p>
            <b>Stock : </b>
            {product.stock}
          </p>
        </div>
      )}
    </div>
  );
};
export default EditProduct;
