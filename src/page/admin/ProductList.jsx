import { useDeleteSingleProductMutation, useFeatchAllProductQuery } from "@/app/feature/productApi/productApi";
import Loading from "@/components/common/Loading";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";



const ProductList = () => {

    const {data:products , isLoading} = useFeatchAllProductQuery();
    const [deleteSingleProduct] = useDeleteSingleProductMutation()

    const handledeleteProduct = async(id) => {
      console.log(id);
      try {
        const {success, message} = await deleteSingleProduct(id).unwrap();
        if(success){
          toast.success(message)
        }
      } catch (error) {
        console.log(error);
        
      }
      
    }


  return isLoading ? <Loading /> : (
    <div className="min-h-screen p-4 md:p-8 mt-16">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        All Products : {products?.product?.length}
      </h1>
      <div className="">
        <table className="w-full bg-white shadow-md rounded border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm uppercase font-medium">
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {products?.product?.map((product, index) => (
                
              <tr
                key={product._id}
                className="border-b border-gray-200 hover:bg-gray-100 "
              >
                <td className="py-3 px-4">
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">{product.category}</td>
                <td className="py-3 px-4">${product.price}</td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <Link to={`/update-product/${product._id}` } >
                    <button  className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600">
                      Edit
                    </button>
                    </Link>
                    <button onClick={() => handledeleteProduct(product._id)} className="bg-red-500 text-white text-sm px-4 py-2 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
