import { useUserRegisterMutation } from "@/app/feature/authApi/AuthApi";
import { useImageUploadeMutation } from "@/app/feature/imageUploadeApi/imageApi";
import ImageLoading from "@/components/common/ImageLoading";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const [registerError, setError] = useState("");

  const [userRegister, { isLoading:registeLoading }] = useUserRegisterMutation();
  const fileref = useRef();
  const [image, setImage] = useState('');

  const [imageUploade,{isLoading: imageLoading}] = useImageUploadeMutation()

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await imageUploade(formData).unwrap();
      setImage(res);
      // (res);
    } catch (error) {
      console.log(error);
    }
  };
    

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Password and confirm password must be same");
      return;
    }

    const register = {
      name: data.name,
      email: data.email,
      password: data.password,
      avatar: image?.data
    };

    try {
      const response = await userRegister(register).unwrap();      
      if (response.success) {
        toast.success("Register success");
        navigate("/login");
        reset();
      }
    } catch (error) {
      setError(error?.data?.message);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="w-full container mx-auto px-2 mt-16">
      <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7">
        <h1 className="text-3xl font-bold text-center mb-4">Register</h1>
        <p>Welcome to Shoppire</p>

        <form className="grid gap-4 mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            {/* Profile Image */}
            <div className="flex flex-col items-center mb-4">
              <div className=" flex">
                {imageLoading ? (
                  <ImageLoading />
                ) : (
                  <img
                    className=" border border-black bg-slate-100 h-24 w-24 hover:bg-indigo-50 transition duration-300  rounded-full"
                    src={
                      image?.data ||
                      "https://www.shutterstock.com/image-vector/upload-icon-vector-web-computer-260nw-1924011959.jpg"
                    }
                    onClick={() => fileref.current.click()}
                    alt=""
                  />
                )}
              </div>
            </div>
            <input
                name="profileImage"
                type="file"
                accept="image/*"
                ref={fileref}
                hidden
                onChange={handleImageChange}
                className="text-sm text-gray-500"
              />
          </div>
          <div className="grid gap-1">
            <label htmlFor="name">Name </label>
            <input
              type="text"
              id="name"
              autoFocus
              className=" p-2 border rounded outline-none focus:border-black"
              name="name"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600 italic">
                This field is required
              </span>
            )}
          </div>
          <div className="grid gap-1">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              className=" p-2 border rounded outline-none focus:border-black"
              name="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600 italic">
                This field is required
              </span>
            )}
          </div>
          <div className="grid gap-1">
            <label htmlFor="password">Password </label>
            <div className=" p-2 border rounded flex items-center focus-within:border-black">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full outline-none"
                name="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />

              <div
                onClick={() => setShowPassword((preve) => !preve)}
                className="cursor-pointer"
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            {errors.password && (
              <span className="text-red-600 italic">
                This field is required
              </span>
            )}
          </div>
          <div className="grid gap-1">
            <label htmlFor="confirmPassword">Confirm Password </label>
            <div className=" p-2 border rounded flex items-center focus-within:border-black">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="w-full outline-none"
                name="confirmPassword"
                placeholder="Enter your confirm password"
                {...register("confirmPassword", { required: true })}
              />

              <div
                onClick={() => setShowConfirmPassword((preve) => !preve)}
                className="cursor-pointer"
              >
                {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            {errors.confirmPassword && (
              <span className="text-red-600 italic">
                This field is required
              </span>
            )}
          </div>
          <p className="text-red-600 italic">{registerError}</p>

          <button
            className={`bg-slate-900 text-white py-2 rounded font-semibold my-3 tracking-wide`}
          >
            {/* Register */}
            {registeLoading ? <p>Loading...</p> : "Register"}
          </button>
        </form>

        <p>
          Already have account ?{" "}
          <Link
            to={"/login"}
            className="font-semibold text-green-700 hover:text-green-800"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
