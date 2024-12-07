import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";

const Feature = () => {
  return (
    <div className="mt-20 mx-5">
      <div className="text-center pb-16">
        <h6 className=" capitalize" >Few steps to your new order</h6>
        <h2 className="h2">This is how easy it can be</h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
      <div className="bg-white p-4 rounded-md  hover:shadow-xl hover:shadow-blue-500">
        <GiReturnArrow className="text-4xl text-blue-500 mb-4" />
        <h4 className="h4">Easy Return</h4>
        <p className="text-gray-30">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          ratione atque corporis. Similique omnis laboriosam porro! Optio
          reprehenderit dicta blanditiis dolore doloremque, assumenda soluta
          eius necessitatibus, quaerat modi vero nam?
        </p>
      </div>
      <div className="bg-white p-4 rounded-md hover:shadow-xl hover:shadow-yellow-500">
        <CiDeliveryTruck className="text-4xl text-yellow-500 mb-4" />
        <h4 className="h4">Fast Delivery</h4>
        <p className="text-gray-30">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          ratione atque corporis. Similique omnis laboriosam porro! Optio
          reprehenderit dicta blanditiis dolore doloremque, assumenda soluta
          eius necessitatibus, quaerat modi vero nam?
        </p>
      </div>
      <div className="bg-white p-4 rounded-md hover:shadow-xl hover:shadow-red">
        <RiSecurePaymentFill className="text-4xl  text-red mb-4" />
        <h4 className="h4">Secure Payment</h4>
        <p className="text-gray-30">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          ratione atque corporis. Similique omnis laboriosam porro! Optio
          reprehenderit dicta blanditiis dolore doloremque, assumenda soluta
          eius necessitatibus, quaerat modi vero nam?
        </p>
      </div>
      </div>
    </div>
  );
};

export default Feature;