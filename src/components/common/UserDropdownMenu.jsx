import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const UserDropdownMenu = ({ user }) => {
  const {  role,avatar } = user?.user;

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <img className="w-10 h-10 rounded-full" src={avatar} alt="" />
        </DropdownMenuTrigger>

        {role === "USER" ? (
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account ({role}) </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link to={"/order"}><DropdownMenuItem>My Order</DropdownMenuItem></Link>
            <Link><DropdownMenuItem>Payment History</DropdownMenuItem>{" "}</Link>
          </DropdownMenuContent>
        ) : (
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account ({role}) </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link to={"/order"}><DropdownMenuItem>Add Product</DropdownMenuItem></Link>
            <Link><DropdownMenuItem>All Product</DropdownMenuItem>{" "}</Link>
            <Link><DropdownMenuItem>All Order</DropdownMenuItem>{" "}</Link>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
};

export default UserDropdownMenu;
