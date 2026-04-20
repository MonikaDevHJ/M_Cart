"use client";

import { useParams } from "next/navigation";

const EditProduct = () => {
  const params = useParams();

  console.log(params.id);
  return (
    <div className="p-5">
      <h1>Edit Product Page</h1>
      <p> ID : {params.id} </p>
    </div>
  );
};
export default EditProduct;
