const Achievement = () => {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 py-[5rem] px-[2rem] md:px-[5rem] lg:px-[8rem] text-[white] text-center gap-[2rem] bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5) 20%,rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
