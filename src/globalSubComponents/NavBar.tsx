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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Accordion,
  AccordionItem,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

// Local Files
import "./NavBar.css";
import logo from "../globalAssets/logo.svg";
import { RootState } from "../store/store";

const menuItems = ["Home", "Services", "About", "Contact", "FAQ", "Log In"];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const curTab = useSelector((state: RootState) => state.curTab.value);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="dark bg-[black] h-[5rem] nav" maxWidth="xl" shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="lg:hidden text-white" />
        <Link to="../Home">
          <Image width={120} src={logo} alt="logo" radius="none" className="hidden lg:block" />
        </Link>
      </NavbarContent>
      <NavbarContent className="lg:hidden logo">
        <Link to="../Home">
          <Image width={120} src={logo} alt="logo" radius="none" />
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex" justify="center">
        <NavbarItem>
          <Link
            to="../Home"
            className={curTab === "Home" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            Home
          </Link>
        </NavbarItem>

        <Dropdown className="dark">
          <NavbarItem
            className={curTab === "Services" ? "navActiveServices flex flex-col hidden lg:flex" : "hidden lg:flex"}
          >
            <DropdownTrigger>
              <Button
                disableRipple
                className={curTab === "Services" ? "active" : "notActive"}
                endContent={<RiArrowDropDownLine className="HomeDropdownIcon" />}
                radius="sm"
                variant="light"
                size="lg"
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="Services" className="gap-4 text-white font-['poppins']">
            <DropdownItem key="Investment" className="p-0" textValue="Investment">
              <Link to="./Investment" style={{ display: "block", padding: "6px 8px" }}>
                Investment
              </Link>
            </DropdownItem>
            <DropdownItem key="Crypto" className="p-0" textValue="Crypto">
              <Link to="./Crypto" style={{ display: "block", padding: "6px 8px" }}>
                Crypto
              </Link>
            </DropdownItem>
            <DropdownItem key="Options" className="p-0" textValue="Options">
              <Link to="./Options" style={{ display: "block", padding: "6px 8px" }}>
                Options
              </Link>
            </DropdownItem>
            <DropdownItem key="Retirement" className="p-0" textValue="Retirement">
              <Link to="./Retirement" style={{ display: "block", padding: "6px 8px" }}>
                Retirement
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link
            to="../About"
            className={curTab === "About" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="../Contact"
            className={curTab === "Contact" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            Contact Us
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
            <Button color="danger" variant="bordered" radius="full">
              Login
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="../Auth">
            <Button color="danger" variant="solid" radius="full" className="font-semibold">
              Sign Up
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-[#28292b] mt-[1rem]">
        {menuItems.map((item, index) => {
          if (item === "Services") {
            return (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Accordion className="p-0 text-white" isCompact>
                  <AccordionItem aria-label={item} title={item} className="dark ">
                    <Listbox aria-label="Services" color="danger">
                      <ListboxItem key="Investment" className="p-0" textValue="Investment">
                        <Link style={{ display: "block", padding: "6px 8px" }} to={"./Investment"}>
                          Investment
                        </Link>
                      </ListboxItem>
                      <ListboxItem key="Crypto" className="p-0" textValue="Crypto">
                        <Link style={{ display: "block", padding: "6px 8px" }} to={"./Crypto"}>
                          Crypto
                        </Link>
                      </ListboxItem>
                      <ListboxItem key="Options" className="p-0" textValue="Options">
                        <Link style={{ display: "block", padding: "6px 8px" }} to={"./Options"}>
                          Options
                        </Link>
                      </ListboxItem>
                      <ListboxItem key="Retirement" className="p-0" textValue="Retirement">
                        <Link style={{ display: "block", padding: "6px 8px" }} to={"./Retirement"}>
                          Retirement
                        </Link>
                      </ListboxItem>
                    </Listbox>
                  </AccordionItem>
                </Accordion>
              </NavbarMenuItem>
            );
          } else {
            return (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className={curTab === item ? "active" : "notActive"}
                  to={index === 5 ? "../Auth" : `../${item}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            );
          }
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
