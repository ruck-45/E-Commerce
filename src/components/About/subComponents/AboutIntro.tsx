
const AboutIntro = () => {
  return (
    <div
      className="h-[40rem] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.3) 20%,rgba(0,0,0,0.2)),url('https://images.unsplash.com/photo-1511883040705-6011fad9edfc?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="flex flex-col justify-center items-center w-[100%] px-[3rem] py-[2rem] bg-[rgba(0,0,0,0.5)] mt-[3rem] text-center text-[3rem] lg:text-[3.5rem] gap-[1rem]">
        <span className="font-['kalnia'] font-bold leading-[4rem] text-[white]">
          About <span className="text-[#f31260]">US</span>
        </span>

        <p className="text-sm max-w-[30rem] text-default-200">
          Your partner in trading and investment. We simplify financial markets with tailored solutions and expert
          guidance. Whether you’re new or experienced, we’re here to support your financial journey.
        </p>
      </div>
    </div>
  );
}

export default AboutIntro