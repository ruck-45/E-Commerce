// Dependencies
import { Input, Checkbox, Button } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster, ToastPosition } from "react-hot-toast";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
const emailRe: RegExp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
const toastSetting: {
  position: ToastPosition;
} = { position: "top-center" };

const formNotFill = (): string => toast.error("Please Fill The Form Correctly", toastSetting);
const emailSent = (): string => toast.success("Email Sent", toastSetting);
const emailNotSent = (): string => toast.error("Email Not Sent", toastSetting);

const Billing = () => {
  const form = useRef<HTMLFormElement>(null);
  const email = useRef<string>("");

  const [emailValidity, setEmailValidity] = useState<boolean>(false);

  const [emailState, setEmailState] = useState<number>(-1);
  const [userNameState, setUserNameState] = useState<number>(-1);
  const [state, setState] = useState(false);

  const checkEmail = (event: FormEvent<HTMLInputElement>) => {
    email.current = event.currentTarget.value;
    setEmailState(event.currentTarget.value.length);

    const validity = email.current.match(emailRe);
    if (validity) {
      setEmailValidity(false);
    } else {
      setEmailValidity(true);
    }
  };
  return (
    <div className="flex flex-col p-[5rem] bg-white">
      <form className="flex flex-col gap-[1rem] items-center lg:w-[100%] grow" ref={form}>
        <div className="flex gap-[1rem] w-full">
          <Input
            type="text"
            classNames={{ input: "text-black" }}
            label="First Name"
            variant="bordered"
            name="first name"
            radius="none"
            onChange={(event) => setUserNameState(event.currentTarget.value.length)}
            errorMessage={userNameState === 0 ? "Please enter a valid Name" : ""}
            isInvalid={userNameState === 0}
          />
          <Input
            type="text"
            classNames={{ input: "text-black" }}
            label="Last Name"
            variant="bordered"
            name="last name"
            radius="none"
            onChange={(event) => setUserNameState(event.currentTarget.value.length)}
            errorMessage={userNameState === 0 ? "Please enter a valid Name" : ""}
            isInvalid={userNameState === 0}
          />
        </div>
        <Input
          type="text"
          classNames={{ input: "text-black" }}
          label="Country"
          variant="bordered"
          name="country"
          radius="none"
          onChange={(event) => setUserNameState(event.currentTarget.value.length)}
          errorMessage={userNameState === 0 ? "Please enter a valid Name" : ""}
          isInvalid={userNameState === 0}
        />
        <Input
          type="text"
          classNames={{ input: "text-black" }}
          label="Address"
          variant="bordered"
          name="address"
          radius="none"
          onChange={(event) => setUserNameState(event.currentTarget.value.length)}
          errorMessage={userNameState === 0 ? "Please enter a valid Name" : ""}
          isInvalid={userNameState === 0}
        />
        <Input
          type="text"
          classNames={{ input: "text-black" }}
          label="Town / City"
          variant="bordered"
          name="town /city"
          radius="none"
          onChange={(event) => setUserNameState(event.currentTarget.value.length)}
          errorMessage={userNameState === 0 ? "Please enter a valid Name" : ""}
          isInvalid={userNameState === 0}
        />
        <Input
          type="text"
          classNames={{ input: "text-black" }}
          label="Country / State"
          variant="bordered"
          name="country /state"
          radius="none"
          onChange={(event) => setUserNameState(event.currentTarget.value.length)}
          errorMessage={userNameState === 0 ? "Please enter a valid Name" : ""}
          isInvalid={userNameState === 0}
        />
        <div className="flex gap-[1rem] w-full">
          <Input
            type="text"
            classNames={{ input: "text-black" }}
            label="Postal Code"
            variant="bordered"
            name="postal code"
            radius="none"
            onChange={(event) => setUserNameState(event.currentTarget.value.length)}
            errorMessage={userNameState === 0 ? "Please enter a valid Name" : ""}
            isInvalid={userNameState === 0}
          />
          <Input
            type="email"
            classNames={{ input: "text-black" }}
            label="Email"
            variant="bordered"
            name="email"
            radius="none"
            onChange={checkEmail}
            isInvalid={emailValidity}
            errorMessage={emailValidity ? "Please enter a valid Email" : ""}
          />
        </div>
        <Checkbox>Option</Checkbox>
        <Button
          variant="shadow"
          radius="none"
          className="w-[12rem] h-[3rem]  text-white bg-[#d4a373]"
          endContent={<IoSend className="mt-[0.2rem]" />}
          //   onClick={sendEmail}
          isLoading={state}
        >
          Send
        </Button>
        <Toaster />
      </form>
    </div>
  );
};

export default Billing;
