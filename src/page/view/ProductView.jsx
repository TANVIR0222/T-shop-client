import { useAddProductCardMutation } from "@/app/feature/cart/cartApi";
import { useFeatchSingleProductQuery } from "@/app/feature/productApi/productApi";
import RelativeScrolling from "@/components/common/RelativeScrolling";
import Title from "@/components/common/Title";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaHeart, FaStar, FaStarHalfStroke, FaTractor } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ProductView = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const [addProductCard] = useAddProductCardMutation();
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [favorite, setfavorite] = useState(false);


  const {data} = useFeatchSingleProductQuery(id)

  const navigate = useNavigate();  

  const fetchProductData = () => {
    const selectProduct = data?.product

    if (selectProduct) {
      setProduct(selectProduct);
      setImage(selectProduct.image[0]);
      return null;
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [id, data?.product]);

 

  const addCart = async (item, size) => {    
    
    if (size === " " || size === '' ) return toast.error("Please select size");
    try {
      if(user){
        const data = {
          userId: user._id,
          image: item.image,
          name: item.name,
          price: item.price,
          size: size,
        };      
        const { success } = await addProductCard(data).unwrap();
        if (success) {
          toast.success(`${item.name} added to cart`);
        }
      }else{
      
        Swal.fire({
          title: "You ar not logged in",
          text: "Please login to add to  the card? ",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, log in !"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login');
          }
        });
      }
    } catch (error) {}
  };

  if (!product) {
    return <p>Loading.....</p>;
  }

  const handleFavorite = () => {
    setfavorite(!favorite);
  }

  return (
    <section>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Product View page  || T-shop</title>
        </Helmet>
      <div className="max-padd-container">
        <div className="grid grid-rows-1 md:grid-cols-2 mt-20">
          {/* product data */}
          <div className="max-padd-container ">
            {/* product image */}
            <div className="flex flex-1 gap-x-2 xl:flex-1">
              <div className="flexCenter flex-col gap-[7px]  flex-wrap">
                {product?.image?.map((item, i) => (
                  <img
                    onClick={() => setImage(item)}
                    src={item}
                    key={i}
                    alt="productImage"
                    className="max-h-[89px] rounded-lg bg-gray-30"
                  />
                ))}
              </div>
              <div className="max-h-[377px] w-auto flex">
                <img className=" rounded-xl bg-gray-10" src={image} alt="" />
              </div>
            </div>
          </div>
          {/* product details */}
          <div className=" flex-[1.5] rounded-2xl px-7 space-y-5">
            <h1 className="text-2xl  md:h3">{product.name}</h1>
            {/* rating & price */}
            <div className="flex items-center gap-3 ">
              <h3 className="text-2xl font-semibold">${product.price}</h3>
              <div className="flex text-xl gap-x-2 items-center text-secondary">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
                <span>(123)</span>
              </div>
            </div>
            {/*  */}
            <p>{product.description}</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                {[...product?.sizes]
                  .sort((a, b) => {
                    const order = ["S", "M", "L", "XL", "XXL"];
                    return order.indexOf(a) - order.indexOf(b);
                  })
                  .map((item, i) => (
                    <button
                      className={`${
                        item === size
                          ? "bg-tertiary text-white"
                          : " border-slate-900/5"
                      } border-[1.5px] border-tertiary h-8 w-10 bg-primary rounded-md`}
                      onClick={() => setSize(item)}
                      key={i}
                    >
                      {item}
                    </button>
                  ))}
              </div>
            </div>
            {/* add to cart  */}
            <div className="flex  gap-4">
              <Link>
                <button
                  onClick={() => addCart(product, size)} //
                  className="bg-tertiary text-white rounded-md py-2 px-10
            hover:bg-tertiary/80 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </Link>
              <button
                onClick={handleFavorite}
                className="py-2 px-6 border-[1px] border-bg-tertiary/80"
              >
                {
                  favorite ? 
                  <FaHeart  className="text-black" /> 
                  :
                  <FaHeart className="text-red-500"  />
                }
              </button>
            </div>
            <div className="flex items-center gap-2 ">
              <FaTractor />
              <span>Free Delivery on orders over $500</span>
            </div>
            <hr className="my-4 w-2/3" />
            <div className=" space-y-3">
              <p>Authenticy you can trust</p>
              <p>Enjoy Cash on Delivery for you convenience</p>
              <p>Easy Returns and Exchanges Within 7 Days</p>
            </div>
          </div>
        </div>
        <Title title="Relative Product" />
        <div className="">
          <RelativeScrolling id={id} />
        </div>
      </div>
    </section>
  );
};

export default ProductView;