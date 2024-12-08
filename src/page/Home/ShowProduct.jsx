import { useAllProductQuery } from "@/app/feature/productApi/productApi";
import Cart from "@/components/common/Cart";
import Title from "@/components/common/Title";
import { useEffect, useState } from "react";

const products = [
  {
    _id: "675443420f12995509383d93",
    name: "Elegant Cotton Round Neck Top",
    description:
      "This lightweight cotton top is perfect for casual outings, featuring a relaxed fit and durable material.",
    price: 120,
    image: [
      "https://res.cloudinary.com/dj6bt5bxt/image/upload/v1733575452/e85ztijugnjq0dlvcfnn.png",
    ],
    category: "Women",
    subCategory: "Topwear",
    sizes: "M N L",
    populer: "false",
    date: 1733575490025,
    createdAt: "2024-12-07T12:44:50.041Z",
    updatedAt: "2024-12-07T12:44:50.041Z",
    __v: 0,
  },
  {
    _id: "675443950f12995509383d96",
    name: "Men Premium Cotton Tee",
    description:
      "A premium t-shirt offering exceptional comfort and a smooth texture, great for everyday wear.\n\n",
    price: 101,
    image: [
      "https://res.cloudinary.com/dj6bt5bxt/image/upload/v1733575522/glzrj1snslrerd3ywpjt.png",
    ],
    category: "Man",
    subCategory: "Winterwear",
    sizes: "M  L XL",
    populer: "false",
    date: 1733575573249,
    createdAt: "2024-12-07T12:46:13.254Z",
    updatedAt: "2024-12-07T12:46:13.254Z",
    __v: 0,
  },
  {
    _id: "675444110f12995509383d98",
    name: "Casual Girls Cotton Top",
    description:
      "Soft cotton top for girls, ideal for both active play and relaxation.",
    price: 101,
    image: [
      "https://res.cloudinary.com/dj6bt5bxt/image/upload/v1733575630/wqoeswdhkhd9yftlfwin.png",
    ],
    category: "Kids",
    subCategory: "Topwear",
    sizes: "M N L",
    populer: "false",
    date: 1733575697563,
    createdAt: "2024-12-07T12:48:17.565Z",
    updatedAt: "2024-12-07T12:48:17.565Z",
    __v: 0,
  },
  {
    _id: "6754711727ead1c9491c97c7",
    name: "Classic Men Casual T-Shirt",
    description:
      "A casual t-shirt made from breathable cotton, suitable for any informal occasion.",
    price: 170,
    image: [
      "https://res.cloudinary.com/dj6bt5bxt/image/upload/v1733587159/m14zuf594hmbaklgnhwd.png",
      "https://res.cloudinary.com/dj6bt5bxt/image/upload/v1733587167/rasw9dv5muqk7s7w12vr.png",
      "https://res.cloudinary.com/dj6bt5bxt/image/upload/v1733587177/ukixwjzf8ud7wht9sm3u.png",
      "https://res.cloudinary.com/dj6bt5bxt/image/upload/v1733587182/v6synja4zz6ft0wrh8ne.png",
    ],
    category: "Man",
    subCategory: "Bottomwear",
    sizes: "M N L",
    populer: "true",
    date: 1733587223082,
    createdAt: "2024-12-07T16:00:23.089Z",
    updatedAt: "2024-12-07T16:00:23.089Z",
    __v: 0,
  },
  {
    _id: "6754715727ead1c9491c97c9",
    name: "Stylish Women Basic Tee",
    description:
      "An everyday essential cotton tee for women, offering simplicity and comfort.",
    price: 150,
    image: [
      "https://res.cloudinary.com/dj6bt5bxt/image/upload/v1733587246/c3amjxle2lxnrjyq3ewp.png",
    ],
    category: "Women",
    subCategory: "Topwear",
    sizes: "M N L",
    populer: "true",
    date: 1733587287460,
    createdAt: "2024-12-07T16:01:27.464Z",
    updatedAt: "2024-12-07T16:01:27.464Z",
    __v: 0,
  },
];

const ShowProduct = () => {
  const [populer, setPopuler] = useState([]);

  useEffect(() => {
    const data = products.filter((item) => item.populer);
    setPopuler(data.slice(0, 5));
  }, []);

  const { data } = useAllProductQuery();

  return (
    <div className="">
      <Title title="Populer Item" titleStyle={"text-center"} />
      <Cart products={populer} />
    </div>
  );
};

export default ShowProduct;
