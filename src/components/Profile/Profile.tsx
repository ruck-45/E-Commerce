import { Avatar, Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaCloudUploadAlt, FaHome } from "react-icons/fa";
import UserItemDetails from "./subComponents/UserItemDetails";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/cookies";
import { RootState } from "../../Redux/store";
import { useState } from "react";
import axios from "axios";
import toast, { ToastPosition } from "react-hot-toast";
import { TiTick } from "react-icons/ti";

const toastSetting: {
  position: ToastPosition;
} = { position: "top-center" };

const successToast = (message: string): void => {
  toast.success(message, toastSetting);
};

const errorToast = (message: string): void => {
  toast.error(message, toastSetting);
};

const Profile = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Profile"));
  const image = getCookie("userId");
  const token = getCookie("token");
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const imageUrl = `${apiUrl}/users/profileImages/${image}.jpg`;

  const [userProfilePic, setUserProfilePic] = useState<File | null>(null);
  const [uploadButtonDisabled, setIsuploadButtonDisabled] = useState(false);

  const handleFileUpload = async () => {
    if (userProfilePic === null) {
      return errorToast("Please Upload File Correctly");
    }

    if (userProfilePic.size > 1572864) {
      return errorToast("File is Bigger Than 1.5 MB");
    }
    const userProfilePicData = new FormData();
    userProfilePicData.append("image", userProfilePic);
    setIsuploadButtonDisabled(true);

    try {
      const response = await axios.put(`${apiUrl}/users/profile/images`, userProfilePicData, {
        headers: {
          Authorization: `Bearer ${token}`,
          imageId: image,
        },
      });

      if (response.data.success) {
        setIsuploadButtonDisabled(false);
        successToast("Profile Picture Updated Successfully");
        window.location.reload();
      } else {
        setIsuploadButtonDisabled(false);
        errorToast("Profile Picture Failed to Update");
      }
    } catch {
      errorToast("Profile Picture Failed to Update");
      setIsuploadButtonDisabled(false);
    }
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="h-[3rem] bg-[#130F40] px-[3rem] sm:px-[5rem] lg:px-[11rem] flex justify-start items-center text-white gap-x-[0.7rem]">
        <Link className="font-bold flex gap-2 cursor-pointer" to="/Home">
          <FaHome className="mt-[0.3rem]" />
          <p>Home</p>
        </Link>
        <p> {"»"} </p>
        <p>Profile</p>
      </div>
      <div
        className="flex h-[10rem] relative text-center justify-center items-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495321308589-43affb814eee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h1 className="text-4xl font-bold">Welcome !!</h1>
        <div className="absolute left-50 top-[11rem] lg:left-20 lg:top-20 flex">
          <Avatar className="w-[7rem] h-[7rem] lg:w-[10rem] lg:h-[10rem] grow" isBordered showFallback src={imageUrl} />
          <Popover placement="top">
            <PopoverTrigger>
              <Button
                isIconOnly
                variant="shadow"
                color="primary"
                radius="full"
                isDisabled={uploadButtonDisabled}
                className="w-[2rem] h-[2.5rem] text-[1rem] absolute bottom-0 right-0 lg:bottom-1 lg:right-1"
              >
                <FaCloudUploadAlt />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <form className="p-[0.2rem] flex gap-[1rem] items-center">
                <input
                  type="file"
                  id="myFile"
                  name="profilepic"
                  accept=".jpg,.jpeg"
                  className="p-[0.3rem] bg-[#E4E4E7] rounded-xl"
                  onChange={(e) => setUserProfilePic(e.target.files ? e.target.files[0] : null)}
                />
                <Button
                  color="danger"
                  variant="ghost"
                  onClick={handleFileUpload}
                  isDisabled={uploadButtonDisabled}
                  isIconOnly
                >
                  <TiTick />
                </Button>
              </form>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="bg-white h-auto py-[2rem] px-[3rem] lg:px-[6.7rem] flex flex-col lg:flex-row lg:gap-x-[8rem] gap-y-[2rem] mt-[2rem] lg:mt-0 items-center lg:items-start">
        <Button className="mt-[5rem] font-bold text-default-500" variant="ghost" radius="none">
          Edit Profile
        </Button>
        <UserItemDetails />
      </div>
    </div>
  );
};

export default Profile;
