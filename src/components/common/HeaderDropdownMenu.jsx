import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";


const HeaderDropdownMenu = ({navbar}) => {
  const [position, setPosition] = useState("bottom");

  return (
    <DropdownMenu >
      <DropdownMenuTrigger >
        <Button variant="outline"><CiMenuFries /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {
            navbar.map((item) => 
                <DropdownMenuRadioItem to={item.link} key={item.id} value={item.id}>
                    <a href={item.link}>{item.name}</a>
                </DropdownMenuRadioItem>
            )
          }
          
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderDropdownMenu;
