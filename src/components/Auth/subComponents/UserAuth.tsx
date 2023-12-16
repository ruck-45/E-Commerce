// Dependencies
import { useState, useRef } from "react";
import { Button, Input, Checkbox, Image } from "@nextui-org/react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillGoogleCircle, AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

// Local Files
import "./UserAuth.css";
import EyeFilledIcon from "./EyeFilledIcon";
import EyeSlashFilledIcon from "./EyeSlashFilledIcon";
import logo from "../../../globalAssets/logoDark.svg";

// Utils
const emailRe: RegExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
const passwordRe: RegExp = /^[a-zA-Z0-9!@#$&*^%_\-+]+$/;
const passwordSpclChar: RegExp = /[!@#$&*^%_\-+]/;
const passwordLowCase: RegExp = /[a-z]/;
const passwordHighCase: RegExp = /[A-Z]/;
const passwordDigit: RegExp = /[0-9]/;

const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
};

const UserAuth = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [authStatus, setauthStatus] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const changeAuthStatus = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setauthStatus(!authStatus);
  };

  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  const username = useRef("");

  const [invalidPasswordMessage, setInvalidPasswordMessage] = useState("");
  const [invalidUsernameMessage, setInvalidUsernameMessage] = useState("");

  const [emailState, setEmailState] = useState(false);
  const [passwordState, setPasswordState] = useState(false);
  const [confirmPasswordState, setConfirmPasswordState] = useState(false);
  const [usernameState, setUsernameState] = useState(false);

  const checkEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    email.current = event.target.value;
    const validity = email.current.match(emailRe);

    if (validity) {
      setEmailState(false);
    } else {
      setEmailState(true);
    }
  };

  const checkPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    password.current = event.target.value;

    if (password.current.length < 8) {
      setPasswordState(true);
      setInvalidPasswordMessage("Password should have a minimum length of 8 characters");
    } else if (password.current.match(passwordSpclChar) === null) {
      setPasswordState(true);
      setInvalidPasswordMessage("Include at least one special character (!@#$&*^%_-+)");
    } else if (password.current.match(passwordLowCase) === null) {
      setPasswordState(true);
      setInvalidPasswordMessage("Include at least one lowercase letter");
    } else if (password.current.match(passwordHighCase) === null) {
      setPasswordState(true);
      setInvalidPasswordMessage("Include at least one uppercase letter");
    } else if (password.current.match(passwordDigit) === null) {
      setPasswordState(true);
      setInvalidPasswordMessage("Include at least one digit in your password");
    } else if (password.current.match(passwordRe) === null) {
      setPasswordState(true);
      setInvalidPasswordMessage("Password includes invalid character(s)");
    } else {
      setPasswordState(false);
      setInvalidPasswordMessage("");
    }
  };

  const checkConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    confirmPassword.current = event.target.value;

    if (confirmPassword.current === password.current) {
      setConfirmPasswordState(false);
    } else {
      setConfirmPasswordState(true);
    }
  };

  const checkUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    username.current = event.target.value;

    if (username.current.length < 3) {
      setUsernameState(true);
      setInvalidUsernameMessage("Username should have a minimum length of 3 characters");
    } else {
      setUsernameState(false);
      setInvalidUsernameMessage("");
    }
  };

  return (
    <form className="flex flex-col justify-center p-12 gap-3 Auth rounded-3xl">
      <Link to='../Home'>
        <Image width={120} src={logo} alt="logo" radius="none" className="mb-[1rem]" />
      </Link>
      <div className="flex gap-2 font-semibold welcomeText">
        <h1>Welcome to Charl Solutions </h1>
        <p>👋</p>
      </div>
      <p className="text-xs mb-2">Please {authStatus ? "Login to" : "Create"} your account and start the adventure !</p>
      <Input
        type="text"
        label="Username"
        labelPlacement="outside"
        placeholder="Enter your username"
        isClearable
        className={authStatus ? "hidden" : ""}
        onKeyDown={handleKeyPress}
        isInvalid={usernameState}
        errorMessage={usernameState ? invalidUsernameMessage : ""}
        onChange={checkUsername}
      />
      <Input
        type="email"
        label="Email"
        labelPlacement="outside"
        placeholder="Enter your email"
        isClearable
        onKeyDown={handleKeyPress}
        isInvalid={emailState}
        errorMessage={emailState ? "Please enter a valid Email" : ""}
        onChange={checkEmail}
      />
      <Input
        label="Password"
        labelPlacement="outside"
        placeholder="Enter your password"
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        onKeyDown={handleKeyPress}
        isInvalid={passwordState}
        errorMessage={passwordState ? invalidPasswordMessage : ""}
        onChange={checkPassword}
      />
      <Input
        label="Confirm Password"
        labelPlacement="outside"
        placeholder="Confirm your password"
        className={authStatus ? "hidden" : ""}
        endContent={<button className="focus:outline-none" type="button" onClick={toggleVisibility}></button>}
        type={isVisible ? "text" : "password"}
        onKeyDown={handleKeyPress}
        isInvalid={confirmPasswordState}
        errorMessage={confirmPasswordState ? "Passwords do not match" : ""}
        onChange={checkConfirmPassword}
      />
      <p className={authStatus ? "text-xs text-right cursor-pointer" : "hidden"} style={{ color: "#006FEE" }}>
        Forgot Password?
      </p>
      <Checkbox defaultSelected size="sm" className={authStatus ? "" : "hidden"}>
        Remember Me
      </Checkbox>
      <Button className="mt-2 mb-2" color="primary" variant="shadow">
        Submit
      </Button>
      <p className="text-xs text-center">
        {authStatus ? "New to our platform?" : "Already have an account?"}
        &nbsp;
        <button
          style={{ color: "#006FEE" }}
          onClick={(e) => {
            changeAuthStatus(e);
          }}
        >
          {authStatus ? "Create an account" : "Login"}
        </button>
      </p>
      <div className={authStatus ? "flex items-center justify-center gap-5 overflow-hidden mt-1 mb-1" : "hidden"}>
        <div className="Divider"></div>
        <p className="text-sm">or</p>
        <div className="Divider"></div>
      </div>
      <div className={authStatus ? "flex justify-center items-center gap-3" : "hidden"}>
        <Button className="text-2xl" isIconOnly color="danger" variant="flat">
          <AiFillInstagram />
        </Button>
        <Button className="text-2xl" isIconOnly color="primary" variant="flat">
          <FaFacebook />
        </Button>
        <Button className="text-2xl" isIconOnly color="default" variant="flat">
          <FaSquareXTwitter />
        </Button>
        <Button className="text-2xl" isIconOnly color="danger" variant="flat">
          <AiFillGoogleCircle />
        </Button>
      </div>
    </form>
  );
};

export default UserAuth;
