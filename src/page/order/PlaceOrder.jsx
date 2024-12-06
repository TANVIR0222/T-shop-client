import CartTotal from "@/components/common/CartTotal";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useFetchSingleCartQuery } from "@/app/feature/cart/cartApi";
import {
  useDeletCartOrderMutation,
  useStripOrderMutation,
  useUserOrderMutation,
} from "@/app/feature/orderApi/orderApi";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const locatons = useLocation();

  const { user } = useSelector((state) => state.auth);
  const { data: allCart } = useFetchSingleCartQuery(user._id);
  const [cashLoading, setCashLoading] = useState(false);

  useEffect(() => {
    if (!locatons.state) {
      window.location.href = "/adProduct";
    }
  }, []);

  const totalPrice = locatons?.state;
  const navigate = useNavigate();
  const [deletCartOrder] = useDeletCartOrderMutation();

  const [method, setMethod] = useState("false");
  const [userOrder, { isLoading }] = useUserOrderMutation();
  const [stripOrder, { isLoading: stripeLoading }] = useStripOrderMutation();
  const onSubmit = async (data) => {
    const address = {
      fullName: data.fullName,
      address: data.address,
      city: data.city,
      email: data.email,
      street: data.street,
      phone: data.phone,
      postalCode: data.postalCode,
    };

    const oderData = {
      address,
      userId: user._id,
      totalAmount: totalPrice,
      items: allCart,
    };

    try {
      switch (method) {
        case "cash":
          setCashLoading(true)
          const { success } = await userOrder(oderData).unwrap();
          if (success) {
            const deletecart = {
              id: user._id,
              succes: "success",
            };
            await deletCartOrder(deletecart).unwrap();
            toast.success("Order Successfull");
            reset();
            
            navigate("/");
          }
          break;
        case "stripe":
          const { session } = await stripOrder(oderData).unwrap();

          if (session) {
            window.location.replace(session);
            toast.success("Paayment now");
            reset();
          } else {
            toast.error("Payment failed");
            // console.log(erro);
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-16 mx-4 md:mx-1">
      {/* <div className=""> */}
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Delivery Information
        </h2>

        <div className="grid grid-cols-1 md:flex gap-8">
          <div className="">
            <div className="">
              <div className="grid grid-cols-1 gap-1 md:flex md:gap-4">
                {/* Full Name */}
                <div className="mb-4">
                  <input
                    type="text"
                    name="fullName"
                    className="w-full md:w-72 px-4 py-2 border rounded-lg text-gray-800 focus:outline-none bg-gray-100"
                    placeholder="Enter your full name"
                    {...register("fullName", { required: true })}
                  />
                </div>

                {/* Address */}
                <div className="mb-4">
                  <input
                    type="text"
                    name="address"
                    className="w-full md:w-72 px-4 py-2 border rounded-lg text-gray-800 focus:outline-none bg-gray-100"
                    placeholder="Enter your address"
                    {...register("address", { required: true })}
                  />
                </div>
              </div>

              {/*  */}
              {/* Phone */}
              <div className="mb-4">
                <input
                  type="number"
                  name="phone"
                  className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none bg-gray-100"
                  placeholder="Enter your phone number"
                  {...register("phone", { required: true })}
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none bg-gray-100"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
              </div>
              {/* state */}
              <div className="mb-6">
                <input
                  type="text"
                  name="street"
                  className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none bg-gray-100"
                  placeholder="Street"
                  {...register("street", { required: true })}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 md:flex md:gap-4">
              {/* City */}
              <div className="mb-4">
                <input
                  type="text"
                  name="city"
                  className="px-4 py-2 border w-full md:w-72 rounded-lg text-gray-800 focus:outline-none bg-gray-100"
                  placeholder="Enter your city"
                  {...register("city", { required: true })}
                />
              </div>

              {/* Postal Code */}
              <div className="mb-4">
                <input
                  type="text"
                  name="postalCode"
                  className="w-full md:w-72 px-4 py-2 border rounded-lg text-gray-800 focus:outline-none bg-gray-100"
                  placeholder="Enter your postal code"
                  {...register("postalCode", { required: true })}
                />
              </div>
            </div>
            {/* <button className="bg-[#43c2d1] px-3 py-2 rounded my-3 text-white ">
                {isLoading ? <p>Loading..</p> : "Place Order"}
              </button> */}
          </div>
          <div className="w-full md:w-1/2">
            <CartTotal totalPrice={totalPrice} />
            <div className="space-y-4">
              <h3 className=" bold-20 mt-4">
                Payment <span className="text-[#43c2d1]">Method</span>{" "}
              </h3>
              <div className=" grid grid-cols-1 gap-4 md:flex">
                <button
                  onClick={() => setMethod("stripe")}
                  className={` ${
                    method === "stripe" ? "text-[#43c2d1]" : ""
                  }  px-3 py-1 rounded my-3   border-[1px] bg-slate-100 border-black`}
                >
                 {stripeLoading ? <p>Loading..</p> : 'Stripe'}  
                </button>
                <button
                  onClick={() => setMethod("cash")}
                  className={` ${
                    method === "cash" ? "text-[#43c2d1]" : ""
                  }  px-3 py-1 rounded my-3   border-[1px] bg-slate-100 border-black`}
                >
                  {cashLoading ? <p>Loading..</p> : 'cash on Delivery'}
                  
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <Link to={"/order"}> */}

        {/* </Link> */}

        {/*  */}
      </form>
      {/*  */}
    </div>
  );
};

export default PlaceOrder;
