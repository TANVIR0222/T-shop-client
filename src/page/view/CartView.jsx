import { updateQuantity } from "@/app/feature/cart/cartSlice";
import CartTotal from "@/components/common/CartTotal";
import { Button } from "@/components/ui/button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const CartView = () => {
  const { products, totalPrice } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleQuantity = (type, id) => {
    const payload = { id, type };
    dispatch(updateQuantity(payload));
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/placeOrder" , {
      state: totalPrice
    });
  }

  return (
    <div className="mt-20">
      <div className=" grid grid-cols-1 md:flex flex-row-reverse">
        <div className="w-full md:w-1/6 bg-white shadow text-balck mt-4 md:mt-14 ">
          {/*  */}
          <CartTotal totalPrice={totalPrice} />
          <div className="text-center ">
            {/* <Link onClick={} > */}
              <button onClick={handleNavigate} className="bg-[#43c2d1] px-3 py-1 rounded my-3 text-white ">
                Proceed to Checkout
              </button>
            {/* </Link> */}
          </div>
        </div>
        <div className="w-full md:w-4/5">
          <div className="">
            <div className="">
              <div className="w-full  p-4 mt-4">
                {/* close icon  */}
                <div className=" flex items-center justify-between">
                  <h2 className="text-lg font-bold">Your Cart</h2>
                </div>
                {/* cart items */}
                <div className="cart-items">
                  {products.length === 0 ? (
                    <div className="">Your cart is empty</div>
                  ) : (
                    products.map((product, index) => (
                      <div
                        key={index + 1}
                        className=" flee flex-col md:flex-row md:items-center md:justify-between shadow-md md:p-5 p-2 mb-2"
                      >
                        <div className=" flex  items-center gap-4">
                          <span className=" mr-4 px-1 bg-primary text-black rounded-full">
                            0{index + 1}{" "}
                          </span>
                          <img
                            src={product.image}
                            alt="order_img"
                            className=" size-12 object-cover"
                          />
                          <div className="">
                            <h2 className="text-sm font-medium">
                              {product.name}
                            </h2>
                            <div className="flex gap-6 items-center">
                              <p>${Number(product.price)}</p>
                              <p className="text-sm">Size : {product?.size}</p>
                            </div>
                          </div>
                          <div className=" flex flex-row md:justify-end items-center mt-2">
                            <button
                              onClick={() =>
                                handleQuantity("decrement", product._id)
                              }
                              className=" size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 hover:bg-primary hover:text-white ml-8"
                            >
                              -
                            </button>
                            <span className="px-2 text-center mx-1">
                              {product.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantity("increment", product._id)
                              }
                              className=" px-2 size-6 flex items-center justify-center text-center mx-1 rounded-full bg-gray-200 hover:bg-primary hover:text-white"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
