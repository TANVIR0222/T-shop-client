import { useDeleteSingleCartMutation, useFetchAllCartQuery } from "@/app/feature/cart/cartApi";
import CartTotal from "@/components/common/CartTotal";
import Loading from "@/components/common/Loading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const CartView = () => {
  const { data: products, isLoading } = useFetchAllCartQuery();
  const [deleteSingleCart] = useDeleteSingleCartMutation();
  const totalPrice = products?.reduce(
    (acc, item) => acc + item.price ,
    0
  );

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/placeOrder", {
      state: totalPrice,
    });
  };

  const handledeleteProduct = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { success } = await deleteSingleCart(id).unwrap();
          if (success) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

    


  return isLoading ? (
    <Loading />
  ) : (
    <div className="mt-20">
      <div className=" grid grid-cols-1 md:flex flex-row-reverse">
        <div className="w-full md:w-1/6 bg-white shadow text-balck mt-4 md:mt-14 h-fit">
          {/*  */}
          <CartTotal totalPrice={totalPrice} />
          <div className="text-center ">
            {/* <Link onClick={} > */}
            <button
              onClick={handleNavigate}
              className="bg-[#43c2d1] px-3 py-1 rounded my-3 text-white "
            >
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
                  {products?.length === 0 ? (
                    <div className="">Your cart is empty</div>
                  ) : (
                    products?.map((product, index) => (
                      <div
                        key={index + 1}
                        className=" flee flex-col md:flex-row md:items-center md:justify-between shadow-md md:p-5 p-2 mb-2"
                      >
                        <div className=" flex justify-between items-center gap-4">
                          <span className=" mr-4 px-1 bg-primary text-black rounded-full">
                            0{index + 1}{" "}
                          </span>
                          <img
                            src={product.image}
                            alt="order_img"
                            className=" size-12 object-cover"
                          />
                          <div className="flex items-center  gap-4">
                            <h2 className="text-sm font-medium">
                              {product.name}
                            </h2>
                            <div className="flex gap-6 items-center">
                              <p className="text-sm">Size : {product?.size}</p>
                              <p>${Number(product.price)}</p>
                            </div>
                          </div>
                          {/* <div className=" flex flex-row md:justify-end items-center mt-2">
                            <button
                               onClick={() =>
                                decrementQuantity( product._id)
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
                                incrementQuantity(product._id)
                              }
                              className=" px-2 size-6 flex items-center justify-center text-center mx-1 rounded-full bg-gray-200 hover:bg-primary hover:text-white"
                            >
                              +
                            </button>
                          </div> */}
                          <button
                            onClick={() => handledeleteProduct(product._id)}
                            className="bg-red-500 text-white text-sm px-4 py-2 rounded hover:bg-red-600"
                          >
                            Delete
                          </button>
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
