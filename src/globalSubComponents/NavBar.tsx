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
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Local Files
import "./NavBar.css";
import logo from "../globalAssets/logo.svg";
import { RootState } from "../store/store";
import { updateNavStatus } from "../store/navOpenStatusSlice";

const menuItems = ["Home", "Services", "About", "Contact", "FAQ", "Log In"];

const NavBar = () => {
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const navOpenStatus = useSelector((state: RootState) => state.navOpenStatus.value);
  const dispatch = useDispatch();

  const setIsMenuOpen = () => {
    dispatch(updateNavStatus(!navOpenStatus));
  };

  return (
    <Navbar
      isMenuOpen={navOpenStatus}
      onMenuOpenChange={setIsMenuOpen}
      className="h-[5rem] nav"
      maxWidth="xl"
      shouldHideOnScroll
      classNames={{ base: "bg-[rgba(0,0,0,0.4)]" }}
    >
      <NavbarContent>
        <NavbarMenuToggle aria-label={navOpenStatus ? "Close menu" : "Open menu"} className="lg:hidden text-white" />
        <Link to="../Home">
          <div className="bg-white p-[1rem] pb-[2rem] ribbon slant-down hidden lg:block">
            <Image width={120} src={logo} alt="logo" radius="none" className="mt-[5rem]" />
            <div className="left-ribbon-border"></div>
            <div className="right-ribbon-border"></div>
          </div>
        </Link>
      </NavbarContent>
      <NavbarContent className="lg:hidden logo">
        <Link to="../Home">
          <div className="bg-white px-[1rem] flex justify-center items-center max-h-[5rem] ribbon rounded-xl">
            <Image width={100} src={logo} alt="logo" radius="none" className="" />
          </div>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex" justify="center">
        <NavbarItem>
          <Link
            to="../Home"
            className={curTab === "Home" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            HOME
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            to="../Services"
            className={curTab === "Services" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            SERVICES
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            to="../About"
            className={curTab === "About" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="../Contact"
            className={curTab === "Contact" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            CONTACT US
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="../FAQ"
            className={curTab === "FAQ" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to="../Auth">
            <Button color="warning" variant="bordered" radius="full">
              Login
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="../Auth">
            <Button color="warning" variant="solid" radius="full" className="font-semibold">
              Sign Up
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="mt-[1rem] bg-[rgba(0,0,0,0.4)]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={curTab === item ? "active" : "notActive"}
              to={index === 5 ? "../Auth" : `../${item}`}
              onClick={setIsMenuOpen}
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
