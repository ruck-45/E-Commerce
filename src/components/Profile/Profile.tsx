import {
  Avatar,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaCloudUploadAlt, FaHome } from "react-icons/fa";
import UserItemDetails from "./subComponents/UserItemDetails";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/cookies";
import { RootState } from "../../Redux/store";
import { useState } from "react";
import axios from "axios";
import toast, { ToastPosition, Toaster } from "react-hot-toast";
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

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState({ phone: "", address: "", state: "", addressCode: "" });

  const [userProfilePic, setUserProfilePic] = useState<File | null>(null);
  const [uploadButtonDisabled, setIsuploadButtonDisabled] = useState(false);
  const [isEditLoading, setIsEditLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsEditLoading(true);

    try {
      const response = await axios.put(`${apiUrl}/users/profile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.data.success) {
        console.log(response.data);

        errorToast("Couldn't update profile");
      }
      successToast("Profile Update Successful !!");

      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.log(error);
      errorToast("Couldn't update profile");
    }

    setIsEditLoading(false);
  };

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
        <Button className="mt-[5rem] font-bold text-default-500" variant="ghost" radius="none" onPress={onOpen}>
          Edit Profile
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Update Profile</ModalHeader>
                <ModalBody>
                  <form>
                    <Input
                      type="phone"
                      label="Contact"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2"
                    />
                    <Input
                      type="text"
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="mt-2"
                    />
                    <Input
                      type="text"
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="mt-2"
                    />
                    <Input
                      type="text"
                      label="Zip / Postal Code"
                      name="addressCode"
                      value={formData.addressCode}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="ghost"
                    onPress={onClose}
                    onClick={handleSubmit}
                    radius="full"
                    isLoading={isEditLoading}
                  >
                    Update
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <Toaster />
        <UserItemDetails />
      </div>
    </div>
  );
};

export default Profile;
