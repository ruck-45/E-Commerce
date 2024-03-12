// Dependencies
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
      className="h-[5rem] nav z-[200]"
      maxWidth="xl"
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
            to="../Pricing"
            className={curTab === "Pricing" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            PRICING
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="../Blog"
            className={curTab === "Blog" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            BLOG
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
            <ButtonElement
              to="../Auth"
              variant="bordered"
              color="warning"
              label="Login"
              radius="full"
              className="w-full px-[8px] py-[10px]"
              onClickFunction={() => dispatch(updateToLoginStatus(true))}
            />
          </NavbarItem>
          <NavbarItem>
            <ButtonElement
              to="../Auth"
              variant="solid"
              color="warning"
              label="Sign Up"
              radius="full"
              className="w-full px-[8px] py-[10px] font-semibold"
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
