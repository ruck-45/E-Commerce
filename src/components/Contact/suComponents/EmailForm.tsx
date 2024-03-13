// Dependencies
import { Input, Textarea, Button } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster, ToastPosition } from "react-hot-toast";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";

import ContactCard from "./ContactCard";

const emailRe: RegExp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
const toastSetting: {
  position: ToastPosition;
} = { position: "top-center" };

const formNotFill = (): string => toast.error("Please Fill The Form Correctly", toastSetting);
const emailSent = (): string => toast.success("Email Sent", toastSetting);
const emailNotSent = (): string => toast.error("Email Not Sent", toastSetting);

const EmailForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const email = useRef<string>("");

  const [emailValidity, setEmailValidity] = useState<boolean>(false);

  const [emailState, setEmailState] = useState<number>(-1);
  const [userNameState, setUserNameState] = useState<number>(-1);
  const [state, setState] = useState(false);

  const sendEmail = async () => {
    setState(true);
    try {
      if (!emailValidity && userNameState > 0 && emailState > 0) {
        console.log(form.current);
        const response = await emailjs.sendForm(
          `${process.env.REACT_APP_SERVICE_ID}`,
          `${process.env.REACT_APP_TEMPLATE_ID}`,
          form.current!,
          `${process.env.REACT_APP_PUBLIC_KEY}`
        );

        console.log(response);
        emailSent();
        setState(false);
      } else {
        formNotFill();
        setState(false);
      }
    } catch (error) {
      emailNotSent();
      setState(false);
    }
  };

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
    <div className="bg-white px-[3rem] md:px-[8rem] py-[5rem]  flex flex-col items-center  gap-[2rem] lg:gap-[5rem]">
      <div className="flex flex-col gap-y-[1rem]">
        <ContactCard heading="Email" value="support@tripcanny.com" icon={<MdEmail />} />
        <ContactCard heading="Phone" value="+1 (888) 891-7176" icon={<MdPhone />} />
        <ContactCard heading="Address" value="16616 Woodruff Ave, Bellflower, CA 90706, USA" icon={<FaAddressBook />} />
      </div>
      <h1 className="text-[3rem] text-black ">Email Us</h1>
      <form className="flex flex-col gap-[1rem] items-center lg:w-[100%] grow" ref={form} onSubmit={sendEmail}>
        <div className="flex gap-[1rem] w-full">
          <Input
            type="text"
            classNames={{ input: "text-black" }}
            label="Your Name"
            variant="bordered"
            name="name"
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
        <Input
          type="text"
          classNames={{ input: "text-black" }}
          label="Subject"
          variant="bordered"
          name="subject"
          radius="none"
        />
        <Textarea
          label="Message"
          name="message"
          variant="bordered"
          classNames={{ input: "text-black" }}
          radius="none"
        />
        <Button
          variant="shadow"
          radius="none"
          className="w-[12rem] h-[3rem]  text-white bg-[#d4a373]"
          endContent={<IoSend className="mt-[0.2rem]" />}
          onClick={sendEmail}
          isLoading={state}
        >
          Send
        </Button>
        <Toaster />
      </form>

      {/* <form className="flex flex-col gap-[1rem] items-start w-[100%] grow" ref={form} onSubmit={sendEmail}></form> */}
    </div>
  );
};

export default EmailForm;
