import React from 'react'

const NotCart = () => {
  return (
    <div className="p-[1rem] flex items-center justify-center">
      <div
        className="bg-no-repeat bg-center bg-cover md:w-[20rem] w-[20rem] h-[20rem] md:h-[20rem] flex items-start justify-center  "
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/men-with-shopping-car-smartphone-technology_24877-53524.jpg?w=740&t=st=1710758830~exp=1710759430~hmac=a135790c96f53b35c2890afcc169f169707e6fa84078c071b5b8f816e1c25b6d)",
        }}
      >
        <h1 className=" text-2xl md:text-3xl font-bold text-white">Please Add into Cart</h1>
      </div>
    </div>
  );
}

export default NotCart