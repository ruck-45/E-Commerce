import React from "react";

const Map = () => {
  return (
    <div className="bg-white h-[18rem] p-2 lg:px-[8rem] lg:h-full lg:py-[5rem] flex flex-col items-center gap-[2rem] lg:gap-[5rem]">
      <iframe
        title="Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.252540648489!2d-118.11946042429074!3d33.88314927322111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd32a616efffff%3A0x462ccb5fa457ed7a!2s16616%20Woodruff%20Ave%20%231%2C%20Bellflower%2C%20CA%2090706%2C%20USA!5e0!3m2!1sen!2sin!4v1707756144135!5m2!1sen!2sin"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full rounded h-full bg-white"
      ></iframe>
    </div>
  );
};

export default Map;
