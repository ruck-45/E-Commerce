// Dependencies
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Local Files
import { getCookie, removeCookie } from "../utils/cookies";
import { updateToLoginStatus } from "../Redux/Slices/toLoginSlice";
import { RootState } from "../Redux/store";

const UserAvatar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userEmail = getCookie("email");
  const image = getCookie("userId");
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);

  const handleLogout = () => {
    removeCookie("token");
    removeCookie("username");
    removeCookie("email");
    removeCookie("expiration");
    removeCookie("isEmployee");
    removeCookie("userId");

    dispatch(updateToLoginStatus(true));
    navigate("/Auth");
  };

  const imageUrl = `${apiUrl}/users/profileImages/${image}.jpg`;

  return (
    <>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar isBordered as="button" className="transition-transform" src={imageUrl} color="danger" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="email" className="h-14 gap-2" textValue="email">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{userEmail}</p>
          </DropdownItem>
          <DropdownItem key="profile" className="p-0" textValue="profile">
            <Link to="/Profile" style={{ display: "block", padding: "6px 8px" }}>
              Profile
            </Link>
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={handleLogout} textValue="logout">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default UserAvatar;
