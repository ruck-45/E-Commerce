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
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

// Local Files
import "./NavBar.css";
import icon from "../globalAssets/icon.svg";
import ButtonElement from "../globalElements/ButtonElement";
import UserAvatar from "./UserAvatar";
import { getCookie } from "../utils/cookies";
import { updateToLoginStatus } from "../Redux/Slices/toLoginSlice";
import { updateNavStatus } from "../Redux/Slices/navOpenStatusSlice";
import { RootState } from "../Redux/store";
const menuItems = ["Home", "Services", "About", "Contact", "Pricing", "Blog", "Log In"];

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
        <NavbarMenuToggle aria-label={navOpenStatus ? "Close menu" : "Open menu"} className="lg:hidden text-white" />
        <div className="bg-white hidden lg:block">
          <Image width={60} src={icon} alt="logo" radius="none" />
        </div>
      </NavbarContent>

      <NavbarContent className="lg:hidden logo">
        <Link to="../Home">
          <div className="bg-white p-[1rem] flex justify-center items-center max-h-[5rem] ribbon">
            <Image width={60} src={icon} alt="logo" radius="none" />
          </div>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex" justify="center">
        <NavbarItem className="">
          <Link
            to="../Home"
            className={curTab === "Home" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            Home
          </Link>
        </NavbarItem>
        <Divider orientation="vertical" className="h-[2.5rem] " style={{ transform: "rotate(15deg)" }} />
        <NavbarItem>
          <Link
            to="../Store"
            className={curTab === "Store" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            Store
          </Link>
        </NavbarItem>
        <Divider
          orientation="vertical"
          className="h-[2.5rem] transform rotate-30"
          style={{ transform: "rotate(15deg)" }}
        />
        <NavbarItem>
          <Link
            to="../About"
            className={curTab === "About" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            About
          </Link>
        </NavbarItem>
        <Divider orientation="vertical" className="h-[2.5rem] " style={{ transform: "rotate(15deg)" }} />
        <NavbarItem>
          <Link
            to="../Contact"
            className={curTab === "Contact" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      {isLoggedIn ? (
        <NavbarContent justify="end">
          <NavbarItem>
            <FaSearch />
          </NavbarItem>
          <NavbarItem>
            <FaRegHeart />
          </NavbarItem>
          <NavbarItem>
            <LuShoppingCart />
          </NavbarItem>
          <NavbarItem>
            <UserAvatar />
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <ButtonElement
              to="../Auth"
              variant="light"
              label="Login"
              radius="none"
              className="w-full px-[8px] py-[10px] text-[#d4a373] hover:bg-[#d4a373]"
              size="md"
              onClickFunction={() => dispatch(updateToLoginStatus(true))}
            />
          </NavbarItem>
          <Divider orientation="vertical" className="h-[2rem] bg-[#d4a373] " style={{ transform: "rotate(15deg)" }} />
          <NavbarItem>
            <ButtonElement
              to="../Auth"
              variant="light"
              label="Sign Up"
              radius="none"
              size="sm"
              className="w-full px-[8px] py-[10px] text-[#d4a373] "
              onClickFunction={() => dispatch(updateToLoginStatus(false))}
            />
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarMenu className="mt-[1rem] bg-[rgba(0,0,0,0.4)] z-[200]">
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
