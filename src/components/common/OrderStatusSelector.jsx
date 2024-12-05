import { useUpdateStatusOrderMutation } from "@/app/feature/orderApi/orderApi";
import React, { useState } from "react";
import { toast } from "react-toastify";

const OrderStatusSelector = ({ currentStatus, id }) => {
  const statuses = [
    "Order Placed",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ];
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);

  const [updateStatusOrder] = useUpdateStatusOrderMutation()

  const handleStatusChange = async(event) => {
    const newStatus = event.target.value;
    setSelectedStatus(newStatus);
    try {
        const {success} = await updateStatusOrder({id, status: newStatus}).unwrap();
        if(success){
           toast.success("Order status updated successfully");
        }
    } catch (error) {
        toast.error(error?.data?.message);
    }
    


  };

  return (
    <div className="flex flex-col space-y-2">
      <label
        htmlFor="order-status"
        className="text-sm font-medium text-gray-700"
      >
        Order Status:
      </label>
      <select
        id="order-status"
        value={selectedStatus}
        onChange={handleStatusChange}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        {statuses.map((status, index) => (
          <option key={index} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OrderStatusSelector;
