import { useDeletCartOrderMutation } from "@/app/feature/orderApi/orderApi";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const succes = location.pathname.substring(1, 7);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [deletCartOrder] = useDeletCartOrderMutation();

  const verifyStripe = async () => {
    const data = {
      id: user._id,
      succes: succes,
    };
    try {
      await deletCartOrder(data).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyStripe();
  }, []);

  return (
    <div className="mt-20">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Payment success page  || T-shop</title>
        </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m0 0a9 9 0 11-4.473-7.807"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Payment Successful!
          </h1>
          <p className="text-gray-600 mb-4">
            Thank you for your purchase. Your order has been placed
            successfully.
          </p>
                   <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate("/order")}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              View Orders
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Go to Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
