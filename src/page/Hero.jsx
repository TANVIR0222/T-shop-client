import React from "react";
import { BsFire } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" w-full sm:after:min-h-screen md:h-[550px]  bg-[#f4e5ec]">
    <div className="flex flex-col md:flex-row justify-between">
      <div className="md:w-1/2 sm:after:w-full p-10 space-y-5 md:space-y-10 md:mt-20 mt-12">
        <h1 className=" uppercase text-red-500">up to 20% discount on</h1>
        <h1 className="text-4xl md:text-6xl text-secondary font-semibold flex">
          Girl's Fashion <BsFire />{" "}
        </h1>
        <div className=" border-l-2 border-secondary">
          <p className="text-gray-600 ml-2" >A charming smock dress with oversized balloon sleeves that add a
          touch of drama to the look. Made from soft cotton with a gingham
          print, the dress is both comfortable and cute. Its loose fit and
          gathered waist make it easy to wear, perfect for playdates or casual
          outings</p>
        </div>
        <div className="flex gap-6">
          <Link className="uppercas bg-slate-800 text-white p-3 rounded-md">Latest Products</Link>
          <Link className="uppercas bg-secondary text-white p-3 rounded-md">Populer Product</Link>
        </div>
      </div>
      <div className="mt-2 md:mt-20">
        <img
          className="h-[400px] md:h-[450px] items-center"
          src="/header.png"
          alt=""
        />
      </div>
    </div>
  </div>
  );
};

export default Hero;
