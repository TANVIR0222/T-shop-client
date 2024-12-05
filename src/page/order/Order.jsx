import { useUserAllOrderQuery } from "@/app/feature/orderApi/orderApi";
import { products } from "@/assets/data";
import Loading from "@/components/common/Loading";
import React, { useState } from "react";
import { TfiPackage } from "react-icons/tfi";
import { useSelector } from "react-redux";

const Order = () => {

  const {user} = useSelector(state => state.auth)
  const { data: orders, isLoading } = useUserAllOrderQuery(user._id);
  console.log(orders);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="p-6 bg-gray-100 min-h-screen mt-16">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Your Orders</h1>
        <p className="text-gray-600">View and track your past purchases.</p>
      </header>

      {/* Responsive Order List */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full table-auto text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-3 text-gray-600 font-medium">
                  Order ID
                </th>
                <th className="px-4 py-3 text-gray-600 font-medium">image</th>
                <th className="px-4 py-3 text-gray-600 font-medium">Product</th>
                <th className="px-4 py-3 text-gray-600 font-medium">
                  Quantity
                </th>
                <th className="px-4 py-3 text-gray-600 font-medium">Size</th>
                <th className="px-4 py-3 text-gray-600 font-medium">Date</th>
                <th className="px-4 py-3 text-gray-600 font-medium">Status</th>
              </tr>
            </thead>
            {orders?.length === 0 ? (
              "No order"
            ) : (
              <tbody>
                {orders?.map((order, index) => (
                  <tr key={order._id} className="hover:bg-gray-100">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">
                      <TfiPackage className="text-[#43c2d1]" size={40} />
                    </td>
                    <td className="px-4 py-3">
                      <div className=" flex-col items-center space-y-2">
                        {order?.items?.map((item) => (
                          <div key={item._id} className="">
                            <div className="">{item.name.substr(0, 15)}</div>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3">1</td>
                    <td className="px-4 py-3 flex ">
                      <div className=" flex-col items-center space-y-2">
                        {order?.items?.map((item) => (
                          <div
                            key={item._id}
                            className="bg-gray-200 rounded-full p-2"
                          >
                            <div className="">
                              <p>{item.size}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/*  */}
                    </td>

                    <td className="px-4 py-3 space-y-2">
                      {new Date(order.createdAt).toLocaleDateString()}
                      <br />
                      fullName :{order.address.fullName}
                      <br />
                      address: {order.address.address}
                      <br />
                      city:{order.address.city}
                      <br />
                      email:{order.address.email}
                      <br />
                      street: {order.address.street}
                      <br />
                      phone:{order.address.phone}
                      <br />
                      postalCode :{order.address.postalCode}
                      <br />
                      <p className="text-green-500">
                        Price:${order.totalAmount}
                      </p>
                    </td>
                    <td
                      className={`px-4 py-3 font-semibold ${
                        order.status === "Delivered"
                          ? "text-green-600"
                          : order.status === "Shipped"
                          ? "text-blue-600"
                          : order.status === "Processing"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {order?.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {orders?.map((order, index) => (
            <div key={order.id} className="p-4 bord rounded-lg ">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Order #{index + 1}</h2>
                <span
                  className={`px-2 py-1 text-sm font-medium rounded ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-600"
                      : order.status === "Shipped"
                      ? "bg-blue-100 text-blue-600"
                      : order.status === "Processing"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <div className=" space-y-2 mt-2">
                <p className="text-gray-600">
                  <strong>Product:</strong>
                  <div className=" flex-col items-center space-y-2">
                    {order?.items?.map((item, index) => (
                      <div key={item._id} className="flex gap-3">
                        <p>{index + 1}</p>
                        <div className="">{item.name.substr(0, 15)}</div>
                      </div>
                    ))}
                  </div>
                </p>
                <p className="text-gray-600">
                  <strong>Quantity:</strong> 1
                </p>
                <p className="text-gray-600 flex items-center gap-3">
                  <strong>Size:</strong>
                  <div className=" flex items-center">
                    {order?.items?.map((item) => (
                      <div
                        key={item._id}
                        className=" bg-gray-200 rounded-full p-2"
                      >
                        <div className="">
                          <p>{item.size}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </p>
                <p className="text-gray-600">
                  <strong>Date:</strong>{" "}
                  {new Date(order.createdAt).toLocaleString()}
                </p>
                <p className="text-gray-600">
                  <strong>Amount:</strong>{" "}
                  <span className="text-green-400">${order.totalAmount} </span>
                </p>
                <p className="text-gray-600 ">
                  <strong>Address: </strong>
                  <br />
                  Name : {order.address.fullName}
                  <br />
                  Address : {order.address.address}
                  <br />
                  City :{order.address.city}
                  <br />
                  Email :{order.address.email}
                  <br />
                  Street : {order.address.street}
                  <br />
                  Phone : {order.address.phone}
                  <br />
                  PostalCode : {order.address.postalCode}
                  <br />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
