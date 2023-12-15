// Dependencies
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from "@nextui-org/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Local Files
import "./NavBar.css";
import logo from "../globalAssets/logo.svg";
import { RootState } from "../store/store";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const curTab = useSelector((state: RootState) => state.curTab.value);

  const menuItems = ["Home", "About", "Contact", "FAQ", "Log In"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="dark bg-[black] h-[5rem] nav" maxWidth="xl" shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden text-white" />
        <Link to="../Home">
          <Image width={120} src={logo} alt="logo" radius="none" className="hidden sm:block" />
        </Link>
      </NavbarContent>
      <NavbarContent className="sm:hidden">
        <Link to="../Home">
          <Image width={120} src={logo} alt="logo" radius="none" />
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-[2rem] md:gap-[4rem]" justify="center">
        <NavbarItem>
          <Link to="../Home" className={curTab === "Home" ? "active navActive flex flex-col" : "notActive"}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="../About" className={curTab === "About" ? "active navActive flex flex-col" : "notActive"}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="../Contact" className={curTab === "Contact" ? "active navActive flex flex-col" : "notActive"}>
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="../FAQ" className={curTab === "FAQ" ? "active navActive flex flex-col" : "notActive"}>
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button color="danger" variant="ghost" radius="full">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button color="danger" variant="solid" radius="full" className="font-semibold">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-[#28292b] mt-[1.2rem]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={curTab === item ? "active" : "notActive"}
              to={`../${item}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
