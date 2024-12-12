import HeaderDropdownMenu from "@/components/common/HeaderDropdownMenu";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { useSelector } from "react-redux";
import UserDropdownMenu from "@/components/common/UserDropdownMenu";
import { useFetchSingleCartQuery } from "@/app/feature/cart/cartApi";

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

  const {user} = useSelector((state) => state?.auth); 
  const {data: products } = useFetchSingleCartQuery(user?._id)
  
  
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
          <div className="flex gap-7 items-center">
            <Link to={'/collection'}>
              <IoSearch className="text-2xl" />
            </Link>
            <Link to={"/add-order"}>
              <div className="">
                <BsHandbag className="text-2xl relative" />
                {
                  products?.length > 0 && <p className=" absolute top-[10px] right-[87px] p-1 text-black">
                  {products.length}
                </p>
                }
              </div>
            </Link>
           <div className="">
           {
            user ? (
              <UserDropdownMenu user={user} role = {user?.role} />
              ) : (
                <Link to="/login">
                  <button className="bg-[#43c2d1] text-white rounded px-5 py-2">Login</button>
                </Link>
              )
           }
           </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
