
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdDelete } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useImageUploadeMutation } from "@/app/feature/imageUploadeApi/imageApi";
import { useFeatchSingleProductQuery, useUpdateSingleProductMutation } from "@/app/feature/productApi/productApi";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [populer, setPopuler] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState('');


    const {id} = useParams();

    const {data: products} = useFeatchSingleProductQuery(id)    
    // const [name , description, category , subCategory , price ,sizes, image] = products?.product

  const [imageUploade, { isLoading: imageLoading }] = useImageUploadeMutation();

  const handleUploadImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    try {
      const { data } = await imageUploade(formData).unwrap();
      setPhotos([...photos, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteImage = (index) => {
    setPhotos(photos.filter((photo, i) => i !== index));
  };
  

  const [updateSingleProduct , { isLoading: addLoading }] = useUpdateSingleProductMutation();
const navigate = useNavigate()
  const onSubmit = async (data) => {
    const product = {
      name: data.name,
      subCategory: data.subcategory,
      category: data.category,
      description: data.description,
      price: data.price,
      sizes: data.size,
      image: photos,
      populer,
    };    

    try {
      const {success} = await updateSingleProduct({id} ,product).unwrap();
      if (success) {
        toast.success(` ${data?.name} add success`);
        reset();
        navigate('/all-product')

      }
    } catch (error) {
      setError(error?.data?.message);
    }
  };

  return (
    <div className="flex-row-reverse justify-center items-center min-h-screen mt-16">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg w-full "
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add Product
        </h2>

        <div>
          <h5 className="h5">Image</h5>
          <div className="grid grid-cols-1 md:flex justify-start items-center gap-2">
            {/**display uploded image*/}
            <div className="flex flex-wrap gap-4">
              {photos?.map((img, index) => {
                return (
                  <div
                    key={index}
                    className="h-24 mt-1 w-24 min-w-20 bg-blue-50 border relative group"
                  >
                    <img
                      src={img}
                      alt={img}
                      className="w-full h-full object-scale-down cursor-pointer"
                    />
                    <div
                      onClick={() => handleDeleteImage(index)}
                      className="absolute bottom-0 right-0 p-1 text-red-500 rounded  hidden group-hover:block cursor-pointer"
                    >
                      <MdDelete size={16} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="">
              <label
                htmlFor="productImage"
                className="bg-blue-50 w-24 h-24 border rounded flex justify-center items-center cursor-pointer"
              >
                <div className="text-center flex justify-center items-center flex-col">
                  {imageLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <>
                      <FaCloudUploadAlt size={35} />
                      <p>Upload Image</p>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  id="productImage"
                  className="hidden"
                  accept="image/*"
                  onChange={handleUploadImage}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            defaultValue={products?.product?.name}
            {...register("name", { required: true })}
            placeholder="Enter product name"
            className="w-full px-3 py-2 bg-gray-10 rounded-lg focus:outline-none "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Description</label>
          <textarea
            type="text"
            name="discription"
            defaultValue={products?.product?.description}
            {...register("description", { required: true })}
            placeholder="Enter product name"
            className="w-full h-32 px-3 py-2 bg-gray-10 rounded-lg focus:outline-none "
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Category</label>
          <select
          defaultValue={products?.product?.category}
            name="category"
            {...register("category", { required: true })}
            className="w-full px-3 py-2 bg-gray-10 rounded-lg focus:outline-none "
          >
            <option value="">Select category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home</option>
          </select>
        </div>

        {/* Subcategory */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Sub Category</label>
          <select
          defaultValue={products?.product?.subCategory}
            name="subcategory"
            {...register("subcategory", { required: true })}
            className="w-full px-3 py-2 bg-gray-10 rounded-lg focus:outline-none "
          >
            <option value="">Select category</option>
            <option value="electronics">Topwear</option>
            <option value="clothing">Bottomwear</option>
            <option value="home">Winterwear</option>
          </select>
        </div>

        {/* price */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Price</label>
          <input
            type="number"
            name="price"
            defaultValue={products?.product?.price}
            {...register("price", { required: true })}
            placeholder="Enter product price"
            className="w-full px-3 py-2 bg-gray-10 rounded-lg focus:outline-none "
          />
        </div>
        {/* Size */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Size</label>
          <input
            type="text"
            name="size"
            defaultValue={products?.product?.sizes}
            {...register("size", { required: true })}
            placeholder="Enter size (e.g., S, M, L)"
            className="w-full px-3 py-2 bg-gray-10 rounded-lg focus:outline-none "
          />
        </div>

        <div className="mb-4">
          <input
            type="checkbox"
            name="populer"
            onChange={() => setPopuler((prev) => !prev)}
            checked={populer}
            defaultValue={populer}
            value={""}
            id=""
          />
          <label className="text-gray-600 mb-2 ml-2" for="">
            Add To Populer
          </label>
        </div>
        
        <p className="text-red-500" >{error}</p>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          {  addLoading ? <p>Loading...</p>  : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
