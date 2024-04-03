import { Image } from "@nextui-org/react";
import loginbg from "../assets/loginBg.png";

type AuthCardProps = {
  className?: string;
};

const AuthCard = (props: AuthCardProps) => {
  const className = "flex justify-center items-center gap-[2rem] bg-contain bg-no-repeat bg-center " + props.className;

  return (
    <div className={className}>
      <Image src={loginbg} width={700} radius="none" className="contrast-200" isBlurred />
    </div>
  );
};

export default AuthCard;
