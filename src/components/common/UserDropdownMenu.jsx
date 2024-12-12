import { useUserLogoutMutation } from "@/app/feature/authApi/AuthApi";
import { logout } from "@/app/feature/authApi/userSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const UserDropdownMenu = ({ user, role }) => {
  const dispatch = useDispatch();
  const [userLogout] = useUserLogoutMutation();
  const handleLogout = async () => {
    try {
        await userLogout().unwrap();
      await dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <img className="w-10 h-10 rounded-full" src={user?.avatar} alt="" />
        </DropdownMenuTrigger>

        {role === "USER" ? (
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account ({role}) </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link to={"/order"}>
              <DropdownMenuItem>My Order</DropdownMenuItem>
            </Link>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        ) : (
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account ({role}) </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <Link to={"/all-Order"}>
              <DropdownMenuItem>All Order</DropdownMenuItem>{" "}
            </Link>
            <Link to={"/add-product"}>
              <DropdownMenuItem>Add Product</DropdownMenuItem>{" "}
            </Link>
            <Link to={"/all-product"}>
              <DropdownMenuItem>All Product</DropdownMenuItem>{" "}
            </Link>
            <Link to={"/all-user"}>
              <DropdownMenuItem>All User</DropdownMenuItem>
            </Link>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
};

export default UserDropdownMenu;
