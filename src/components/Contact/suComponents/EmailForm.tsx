// Dependencies
import { Input, Textarea, Button } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster, ToastPosition } from "react-hot-toast";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";

import ContactCard from "./ContactCard";
import axios from "axios";

const emailRe: RegExp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
const toastSetting: {
  position: ToastPosition;
} = { position: "top-center" };

const formNotFill = (): string => toast.error("Please Fill The Form Correctly", toastSetting);
const emailSent = (): string => toast.success("Email Sent", toastSetting);
const emailNotSent = (): string => toast.error("Email Not Sent", toastSetting);

let apiUrl = process.env.REACT_APP_API_URL;
if (process.env.NODE_ENV === "development") {
  apiUrl = process.env.REACT_APP_DEV_API_URL;
}

const EmailForm = () => {
 const form = useRef<HTMLFormElement>(null);

 const [emailValidity, setEmailValidity] = useState<boolean>(false);
 const [nameValidity, setNameValidity] = useState<boolean>(false);
 const [subjectValidity, setSubjectValidity] = useState<boolean>(false);
 const [messageValidity, setMessageValidity] = useState<boolean>(false);

 const [emailState, setEmailState] = useState<number>(-1);
 const [userNameState, setUserNameState] = useState<number>(-1);
 const [subjectState, setSubjectState] = useState<number>(-1);
 const [messageState, setMessageState] = useState<number>(-1);
 const [state, setState] = useState(false);

  const [input, setInput] = useState({
    name: "",
    message: "",
    subject: "",
    email: "",
  });

  const checkEmail = (event: FormEvent<HTMLInputElement>) => {
    input.email = event.currentTarget.value;
    setEmailState(event.currentTarget.value.length);

    const validity = input.email.match(emailRe);
    if (validity) {
      setEmailValidity(false);
    } else {
      setEmailValidity(true);
    }
  };

  const checkUserName = (event: FormEvent<HTMLInputElement>) => {
    input.name = event.currentTarget.value;
    setUserNameState(event.currentTarget.value.length);

    const validity = input.name.length > 2;
    if (validity) {
      setNameValidity(false);
    } else {
      setNameValidity(true);
    }
  };

  const checkSubject = (event: FormEvent<HTMLInputElement>) => {
    input.subject = event.currentTarget.value;
    setSubjectState(event.currentTarget.value.length);

    const validity = input.subject.length > 2;
    if (validity) {
      setSubjectValidity(false);
    } else {
      setSubjectValidity(true);
    }
  };

  const checkMessage = (event: FormEvent<HTMLInputElement>) => {
    input.message = event.currentTarget.value;
    setMessageState(event.currentTarget.value.length);

    const validity = input.message.length > 2;
    if (validity) {
      setMessageValidity(false);
    } else {
      setMessageValidity(true);
    }
  };

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!input.name || !input.email || !input.message || !input.subject) {
      toast.error("please fill all details");
      setState(false);
      return;
    }

    try {
      setState(true);
      const response = await axios.post(`${apiUrl}/contact/form`, input);

      if (response?.data?.success) {
        toast.success("Email sent Successfully");
        setState(false);
      } else {
        toast.error("Email not sent Succesfully");
        setState(false);
        return;
      }
    } catch (error) {
      toast.error("failed to send Email 404");
      setState(false);
    }

    setInput({
      name: "",
      message: "",
      subject: "",
      email: "",
    });
  };

  return (
    <div className="bg-white flex flex-col lg:px-[8rem] py-[5rem] gap-[2rem] lg:gap-[5rem]">
      <div className="flex flex-col gap-y-[1rem]">
        <h1 className="font-bold text-[2rem]">Contact Info</h1>
        <ContactCard heading="Address" icon={<FaAddressBook />} value="Sunny Isles Beach, FL 33160, United States" />
        <ContactCard heading="Email" icon={<MdEmail />} value="support@shopnest.com" />
        <ContactCard heading="Phone" icon={<MdPhone />} value="+1-888-678-1234" />
      </div>

      <form className="flex flex-col gap-[1rem] lg:w-[100%] grow" ref={form} onSubmit={sendEmail}>
        <h1 className="text-[2rem] font-bold text-black ">Email Us</h1>
        <div className="flex gap-[1rem] w-full">
          <Input
            type="text"
            classNames={{ input: "text-black" }}
            label="Your Name"
            variant="bordered"
            name="name"
            id="name"
            radius="none"
            onChange={checkUserName}
            errorMessage={nameValidity ? "Please enter a valid Name" : ""}
            isInvalid={nameValidity}
          />
          <Input
            type="email"
            classNames={{ input: "text-black" }}
            label="Email"
            variant="bordered"
            name="email"
            id="email"
            radius="none"
            onChange={checkEmail}
            isInvalid={emailValidity}
            errorMessage={emailValidity ? "Please enter a valid Email" : ""}
          />
        </div>
        <Input
          type="text"
          classNames={{ input: "text-black" }}
          label="Subject"
          variant="bordered"
          name="subject"
          onChange={checkSubject}
          isInvalid={subjectValidity}
          errorMessage={subjectValidity ? "Please enter a valid Subject" : ""}
          radius="none"
        />
        <Textarea
          label="Message"
          name="message"
          variant="bordered"
          classNames={{ input: "text-black" }}
          radius="none"
          onChange={checkMessage}
          isInvalid={messageValidity}
          errorMessage={messageValidity ? "Please enter a minimum 10 charater" : ""}
        />
        <Button
          variant="shadow"
          radius="none"
          color="primary"
          className="w-[12rem] h-[3rem]"
          endContent={<IoSend className="mt-[0.2rem]" />}
          type="submit"
          isLoading={state}
        >
          Send
        </Button>
        <Toaster />
      </form>
    </div>
  );
};

export default EmailForm;
