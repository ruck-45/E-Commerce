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
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  Button,
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
import TopBar from "./TopBar";
import { RiArrowDropDownLine } from "react-icons/ri";

const menuItems = ["Home", "Shop", "About", "Contact", "Cart"];

const NavBar = () => {
  const isLoggedIn = getCookie("token") ? true : false;
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const navOpenStatus = useSelector((state: RootState) => state.navOpenStatus.value);
  const dispatch = useDispatch();
  return (
    <>
      <TopBar />
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
            <Link to="../Home" className={curTab === "Home" ? "nav-active navActive flex flex-col" : "notActive"}>
              Home
            </Link>
          </NavbarItem>
          <Divider orientation="vertical" className="h-[1rem] " style={{ transform: "rotate(15deg)" }} />
          <NavbarItem>
            <Link to="../Shop" className={curTab === "Shop" ? "nav-active navActive flex flex-col" : "notActive"}>
              Shop
            </Link>
          </NavbarItem>
          <Divider
            orientation="vertical"
            className="h-[1rem] transform rotate-30"
            style={{ transform: "rotate(15deg)" }}
          />
          <NavbarItem>
            <Link to="../About" className={curTab === "About" ? "nav-active navActive flex flex-col" : "notActive"}>
              About
            </Link>
          </NavbarItem>
          <Divider orientation="vertical" className="h-[1rem] " style={{ transform: "rotate(15deg)" }} />
          <NavbarItem>
            <Link to="../Contact" className={curTab === "Contact" ? "nav-active navActive flex flex-col" : "notActive"}>
              Contact
            </Link>
          </NavbarItem>
          <Divider orientation="vertical" className="h-[1rem] " style={{ transform: "rotate(15deg)" }} />
          <Dropdown>
            <NavbarItem className={curTab === "Policy" ? "nav-active navActive flex flex-col" : "notActive"}>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className={curTab === "Policy" ? "nav-active p-1" : "notActive p-1"}
                  endContent={<RiArrowDropDownLine className="HomeDropdownIcon" />}
                  radius="sm"
                  variant="light"
                  size="sm"
                >
                  Policies
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu aria-label="Policy" className="gap-4  font-['Inter']">
              <DropdownItem key="Privacy" className="p-0" textValue="Privacy">
                <Link to="./Privacy" style={{ display: "block", padding: "6px 8px" }}>
                  Privacy Policy
                </Link>
              </DropdownItem>
              <DropdownItem key="Terms" className="p-0" textValue="Terms">
                <Link to="./Terms" style={{ display: "block", padding: "6px 8px" }}>
                  Terms & Conditions
                </Link>
              </DropdownItem>
              <DropdownItem key="Refund" className="p-0" textValue="Refund">
                <Link to="./Refund" style={{ display: "block", padding: "6px 8px" }}>
                  Refund & Cancellations
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
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

        <NavbarMenu className="mt-[3rem] bg-white z-[200]">
          {menuItems.map((item, index) => {
            return (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className={curTab === item ? "nav-active" : "notActive"}
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
    </>
  );
};

export default NavBar;
