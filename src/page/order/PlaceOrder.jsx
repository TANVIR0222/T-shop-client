import CartTotal from "@/components/common/CartTotal";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const PlaceOrder = () => {
  const locatons = useLocation();
  useEffect(() => {
    if (!locatons.state) {
      window.location.href = "/adProduct";
    }
  }, []);

  const totalPrice = locatons?.state;

  const [method, setMethod] = useState("false");

  return (
    <div className="mt-16 mx-4 md:mx-1">
      {/* <div className=""> */}
      <form className="">
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
                    required
                  />
                </div>

                {/* Address */}
                <div className="mb-4">
                  <input
                    type="text"
                    name="address"
                    className="w-full md:w-72 px-4 py-2 border rounded-lg text-gray-800 focus:outline-none bg-gray-100"
                    placeholder="Enter your address"
                    required
                  />
                </div>
              </div>

              {/*  */}
              {/* Phone */}
              <div className="mb-4">
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none bg-gray-100"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none bg-gray-100"
                  placeholder="Enter your email"
                  required
                />
              </div>
              {/* state */}
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none bg-gray-100"
                  placeholder="Street"
                  required
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
                  required
                />
              </div>

              {/* Postal Code */}
              <div className="mb-4">
                <input
                  type="text"
                  name="postalCode"
                  className="w-full md:w-72 px-4 py-2 border rounded-lg text-gray-800 focus:outline-none bg-gray-100"
                  placeholder="Enter your postal code"
                  required
                />
              </div>
            </div>
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
                  Stripe
                </button>
                <button
                  onClick={() => setMethod("cash")}
                  className={` ${
                    method === "cash" ? "text-[#43c2d1]" : ""
                  }  px-3 py-1 rounded my-3   border-[1px] bg-slate-100 border-black`}
                >
                  cash on Delivery
                </button>
              </div>
            </div>
          </div>
        </div>
        <Link to={"/order"}>
          <button className="bg-[#43c2d1] px-3 py-2 rounded my-3 text-white ">
            Place Order
          </button>
        </Link>

        {/*  */}
      </form>
      {/*  */}
    </div>
  );
};

export default PlaceOrder;
