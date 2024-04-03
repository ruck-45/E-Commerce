const Achievement = () => {
  return (
    <div
      className="lg:mt-[6rem] mt-[2rem] grid grid-cols-2 md:grid-cols-4 py-[5rem] px-[2rem] md:px-[5rem] lg:px-[8rem] text-[white] text-center gap-[2rem] bg-center bg-no-repeat bg-cover font-['Inter']"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.3) 20%,rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1558944351-3f79926e74ef?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div>
        <h1 className="text-[2.5rem] font-bold">3+</h1>
        <p className="font-semibold">Years of Experience</p>
      </div>

      <div>
        <h1 className="text-[2.5rem] font-bold">500 +</h1>
        <p className="font-semibold">Expert Team</p>
      </div>

      <div>
        <h1 className="text-[2.5rem] font-bold">1000 +</h1>
        <p className="font-semibold">Happy Customers</p>
      </div>

      <div>
        <h1 className="text-[2.5rem] font-bold">23 +</h1>
        <p className="font-semibold">Awards</p>
      </div>
    </div>
  );
};

export default Achievement;
