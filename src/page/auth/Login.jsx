import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useUserLoginMutation } from "@/app/feature/authApi/AuthApi";
import { toast } from "react-toastify";
import { setUser } from "@/app/feature/authApi/userSlice";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userLogin, { isLoading }] = useUserLoginMutation();

  const onSubmit = async (data) => {
    const login = {
      email: data.email,
      password: data.password,
    };

    try {
      const responce = await userLogin(login).unwrap();

      const { user, token } = responce;
      localStorage.setItem("token", token);

      if (responce.success) {
        toast.success("login success");
        dispatch(setUser(user));
        navigate("/")
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full container mx-auto px-2 mt-16">
      <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7">
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <div className="grid gap-1">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              className=" p-2 border rounded outline-none focus:border-primary-200"
              name="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="password">Password</label>
            <div className=" p-2 border rounded flex items-center focus-within:border-primary-200">
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
            {/* <Link
              to={"/forgot-password"}
              className="block ml-auto hover:text-secondary"
            >
              Forgot password ?
            </Link> */}
          </div>

          <p className="text-red-600 italic">{loginError}</p>

          <button
            className={`bg-slate-900 text-white py-2 rounded font-semibold my-3 tracking-wide`}
          >
            Login
            {/* {isLoading ? <p>Loading...</p> : "Login"} */}
          </button>
        </form>

        <p>
          Don't have account?{" "}
          <Link
            to={"/register"}
            className="font-semibold text-green-700 hover:text-green-800"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
