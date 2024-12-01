import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

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


  const onSubmit = async (data) => {
    const login = {
      email: data.email,
      password: data.password,
    };

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