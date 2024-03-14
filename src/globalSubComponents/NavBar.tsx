// Dependencies
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
  Divider,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";

// Local Files
import "./NavBar.css";
import icon from "../globalAssets/icon.svg";
import ButtonElement from "../globalElements/ButtonElement";
import UserAvatar from "./UserAvatar";
import { getCookie } from "../utils/cookies";
import { updateToLoginStatus } from "../Redux/Slices/toLoginSlice";
import { updateNavStatus } from "../Redux/Slices/navOpenStatusSlice";
import { RootState } from "../Redux/store";
const menuItems = ["Home", "Shop", "About", "Contact", "Cart"];

const NavBar = () => {
  const isLoggedIn = getCookie("token") ? true : false;
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const navOpenStatus = useSelector((state: RootState) => state.navOpenStatus.value);
  const dispatch = useDispatch();
  return (
    <Navbar
      isMenuOpen={navOpenStatus}
      onMenuOpenChange={() => {
        dispatch(updateNavStatus(!navOpenStatus));
      }}
      className="h-[5rem] nav z-[200] bg-white justify-center"
      maxWidth="xl"
      isBordered
      classNames={{ base: "bg-[rgba(0,0,0,0.4)]" }}
      position="static"
    >
      <NavbarContent>
        <NavbarMenuToggle aria-label={navOpenStatus ? "Close menu" : "Open menu"} className="lg:hidden" />
        <Link to="../Home">
          <div className="bg-white hidden lg:block">
            <Image width={100} src={icon} alt="logo" radius="none" />
          </div>
        </Link>
      </NavbarContent>

      <NavbarContent className="lg:hidden logo">
        <Link to="../Home">
          <div className="bg-white p-[1rem] flex justify-center items-center max-h-[5rem]">
            <Image width={92} src={icon} alt="logo" radius="none" />
          </div>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex" justify="center">
        <NavbarItem className="">
          <Link to="../Home" className={curTab === "Home" ? "active navActive flex flex-col" : "notActive"}>
            Home
          </Link>
        </NavbarItem>
        <Divider orientation="vertical" className="h-[1rem] " style={{ transform: "rotate(15deg)" }} />
        <NavbarItem>
          <Link to="../Shop" className={curTab === "Shop" ? "active navActive flex flex-col" : "notActive"}>
            Shop
          </Link>
        </NavbarItem>
        <Divider
          orientation="vertical"
          className="h-[1rem] transform rotate-30"
          style={{ transform: "rotate(15deg)" }}
        />
        <NavbarItem>
          <Link to="../About" className={curTab === "About" ? "active navActive flex flex-col" : "notActive"}>
            About
          </Link>
        </NavbarItem>
        <Divider orientation="vertical" className="h-[1rem] " style={{ transform: "rotate(15deg)" }} />
        <NavbarItem>
          <Link to="../Contact" className={curTab === "Contact" ? "active navActive flex flex-col" : "notActive"}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      {isLoggedIn ? (
        <NavbarContent justify="end">
          <NavbarItem>
            <UserAvatar />
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <ButtonElement to="/Checkout?step=1" startContent={<LuShoppingCart />} label="Cart" variant="light" />
          </NavbarItem>
          <NavbarItem className="flex">
            <ButtonElement
              to="../Auth"
              variant="shadow"
              label="Login"
              color="primary"
              radius="full"
              size="md"
              onClickFunction={() => dispatch(updateToLoginStatus(true))}
            />
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarMenu className="mt-[1rem] bg-white z-[200]">
        {menuItems.map((item, index) => {
          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={curTab === item ? "active" : "notActive"}
                to={index === 6 ? "../Auth" : `../${item}`}
                onClick={() => {
                  dispatch(updateNavStatus(!navOpenStatus));
                  dispatch(updateToLoginStatus(item === "Log In" ? true : false));
                }}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
