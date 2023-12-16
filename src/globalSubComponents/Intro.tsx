type IntroProps = {
  thumbnail: string;
  normalHead?: string;
  redHead?: string;
  caption: string;
};

const Intro = (props: IntroProps) => {
  return (
    <div
      className="h-[40rem] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 20%,rgba(0,0,0,0.2)),url(${props.thumbnail})`,
      }}
    >
      <div className="flex flex-col justify-center items-center w-[100%] px-[3rem] py-[2rem] bg-[rgba(0,0,0,0.5)] mt-[3rem] text-center text-[3rem] lg:text-[3.5rem] gap-[1rem]">
        <span className="font-['kalnia'] font-bold leading-[4rem] text-[white]">
          {props.normalHead}<span className="text-[#f31260]">{props.redHead}</span>
        </span>

        <p className="text-sm max-w-[30rem] text-default-200">{props.caption}</p>
      </div>
    </div>
  );
};

export default Intro;
