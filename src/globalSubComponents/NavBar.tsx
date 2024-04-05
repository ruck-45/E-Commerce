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
  Badge,
  Input,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Local Files
import "./NavBar.css";
import icon from "../globalAssets/logo.svg";
import ButtonElement from "./ButtonElement";
import UserAvatar from "./UserAvatar";
import { updateToLoginStatus } from "../Redux/Slices/toLoginSlice";
import { updateNavStatus } from "../Redux/Slices/navOpenStatusSlice";
import { RootState } from "../Redux/store";
import TopBar from "./TopBar";
import { RiArrowDropDownLine } from "react-icons/ri";
import Bottombar from "./Bottombar";
import { IoSearch } from "react-icons/io5";
import { FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";

const menuItems = ["Home", "Shop", "About", "Contact", "Cart"];

const NavBar = () => {
  const isLoggedIn = useSelector((state: RootState) => state.loginStatus.value);
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const navOpenStatus = useSelector((state: RootState) => state.navOpenStatus.value);
  const dispatch = useDispatch();

  const { totalQuantity } = useSelector((state: RootState) => state?.allCart);

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
                  radius="none"
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

        <NavbarContent justify="end" className="gap-[0.5rem]">
          <NavbarItem className="flex gap-[0.5rem]">
            <Input
              classNames={{
                base: "w-full h-10",
                mainWrapper: "h-full",
                input: "text-small ",
                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 bg-white",
              }}
              placeholder="Search"
              size="sm"
              type="search"
              variant="underlined"
              endContent={<IoSearch className="text-xl" />}
            />
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Badge content={totalQuantity} shape="circle" color="danger" isInvisible={totalQuantity === 0}>
              <ButtonElement
                to="/Checkout"
                label="Cart"
                variant="light"
                radius="full"
                isIconOnly
                icon={<FaShoppingCart className="text-[1.2rem] text-default-700" />}
              />
            </Badge>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <ButtonElement
              to="/Home"
              label="Cart"
              variant="light"
              radius="full"
              isIconOnly
              icon={<FaHeart className="text-[1.2rem] text-default-700" />}
            />
          </NavbarItem>
          <NavbarItem>
            {isLoggedIn ? (
              <UserAvatar />
            ) : (
              <ButtonElement
                to="../Auth"
                variant="light"
                radius="full"
                size="md"
                isIconOnly
                icon={<FaUserCircle className="text-2xl text-default-700" />}
                onClickFunction={() => dispatch(updateToLoginStatus(true))}
              />
            )}
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="mt-[3rem] bg-white z-[200]">
          {menuItems.map((item, index) => {
            return (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className={curTab === item ? "nav-active" : "notActive"}
                  to={index === 4 ? "/Checkout" : `../${item}`}
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
      <Bottombar />
    </>
  );
};

export default NavBar;
