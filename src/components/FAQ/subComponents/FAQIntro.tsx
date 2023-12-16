const FAQIntro = () => {
  return (
    <div
      className="h-[40rem] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.3) 20%,rgba(0,0,0,0.2)),url('https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="flex flex-col justify-center items-center w-[100%] px-[3rem] py-[2rem] bg-[rgba(0,0,0,0.5)] mt-[3rem] text-center text-[3rem] lg:text-[3.5rem]">
        <span className="font-['kalnia'] font-bold leading-[4rem] text-[white]">
          Your <span className="text-[#f31260]">Questions.</span>
        </span>

        <span className="font-['kalnia'] font-bold leading-[4rem] text-[#f31260]">
          Our <span className="text-[white]">Answers.</span>
        </span>
      </div>
    </div>
  );
};

export default FAQIntro;
