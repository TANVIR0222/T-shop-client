import HeaderDropdownMenu from "@/components/common/HeaderDropdownMenu";
import { isAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const navbar = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Collection", link: "/collection" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Contact", link: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out max-w-screen-xl mx-auto ${
          isScrolled
            ? "bg-gray-100 shadow-md"
            : "bg-transparent opacity-55 text-white"
        }`}
      >
        <nav
          className={` bg-fixed text-black p-5 flex items-center justify-between `}
        >
          <div className={`flex justify-between items-center`}>
            <div className="items-center gap-8 sm:flex hidden">
              {navbar.map((item) => (
                <div key={item.id} className="flex justify-center items-center">
                  <p></p>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500"
                        : "text-black hover:text-blue-500 transition duration-300 ease-in-out"
                    }
                  >
                    {item.name}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center sm:hidden ">
            <HeaderDropdownMenu navbar={navbar} />
          </div>
          <div className="">
            <h1 className="text-3xl  md:text-4xl text-[#43c2d1] font-semibold ">
              Shoppire
            </h1>
          </div>
          <div className="flex gap-7">
            <Link>
              <IoSearch className="text-2xl" />
            </Link>
            <Link to={'/adProduct'}>
              <div className="">
                <BsHandbag className="text-2xl relative" />
                <p className=" absolute top-[10px] right-[70px] bg-red-400 rounded-full px-2 py-1 p-1 text-white">4</p>
              </div>
            </Link>
            <Link>
              {" "}
              <CgProfile className="text-2xl" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
