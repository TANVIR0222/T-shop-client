import { products } from "@/assets/data";
import React, { useState } from "react";

const Order = () => {
  const [orders, setOrders] = useState(products);

  return (
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
                <th className="px-4 py-3 text-gray-600 font-medium">Quantity</th>
                <th className="px-4 py-3 text-gray-600 font-medium">Size</th>
                <th className="px-4 py-3 text-gray-600 font-medium">Date</th>
                <th className="px-4 py-3 text-gray-600 font-medium">Amount</th>
                <th className="px-4 py-3 text-gray-600 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 6).map((order) => (
                <tr key={order.id} className="hover:bg-gray-100">
                  <td className="px-4 py-3">{order._id}</td>
                  <td className="px-4 py-3">
                    <img
                      src={order.image[0]}
                      className="w-24 h-24 rouded"
                      alt=""
                    />
                  </td>
                  <td className="px-4 py-3">{order.name}</td>
                  <td className="px-4 py-3">4</td>
                  <td className="px-4 py-3">M</td>

                  <td className="px-4 py-3">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">${order.price}</td>
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
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {orders.slice(0, 6).map((order , index) => (
            <div
              key={order.id}
              className="p-4 bord rounded-lg "
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Order #{index+1}</h2>
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
                <img src={order.image[0]} className="w-20 h-20 rouded" alt="" />

                <p className="text-gray-600">
                  <strong>Product:</strong> {order.name}
                </p>
                <p className="text-gray-600">
                  <strong>Quantity:</strong> '4'
                </p>
                <p className="text-gray-600">
                  <strong>Size:</strong> 'M'
                </p>
                <p className="text-gray-600">
                  <strong>Date:</strong> {new Date(order.date).toLocaleString()}
                </p>
                <p className="text-gray-600">
                  <strong>Amount:</strong> ${order.price}
                </p>
                <p className="text-gray-600">
                  <strong>Payment: </strong> Payment Methods 
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
