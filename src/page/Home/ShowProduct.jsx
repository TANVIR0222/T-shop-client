import { products } from "@/assets/data";
import Cart from "@/components/common/Cart";
import Title from "@/components/common/Title";
import { useEffect, useState } from "react";

const ShowProduct = () => {
  const [populer, setPopuler] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const data = products.filter((item) => item.popular);
    setPopuler(data.slice(0, 5));
  }, []);
  useEffect(() => {
    setProduct(products.slice(0, 10));
  }, []);

  return (
    <div className="">
      <Title title="New Arrivals" titleStyle={"text-center"} />
      <Cart products={product} />
      <Title title="Populer Item" titleStyle={"text-center"} />
      <Cart products={populer} />
    </div>
  );
};

export default ShowProduct;
