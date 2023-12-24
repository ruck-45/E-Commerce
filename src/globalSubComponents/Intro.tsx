type IntroProps = {
  normalHead?: string;
  redHead?: string;
  caption: string;
};

const Intro = (props: IntroProps) => {
  return (
    <div className="h-[40rem] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-[100%] px-[1rem] sm:px-[3rem] py-[2rem] bg-[rgba(0,0,0,0.5)] mt-[3rem] text-center text-[3rem] lg:text-[3.5rem] gap-[1rem]">
        <span className="font-['rubik_doodle_shadow'] leading-[4rem] text-[white]">
          {props.normalHead}
          <span className="text-[#F5A524]">{props.redHead}</span>
        </span>

        <p className="text-sm max-w-[30rem] text-default-200">{props.caption}</p>
      </div>
    </div>
  );
};

export default Intro;
