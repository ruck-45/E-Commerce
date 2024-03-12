type index = {
  activeIndex:number
  sliderImage:any
}

function SliderContent(props:index) {
  return (
    <section>
      {props.sliderImage.map((slide:any, index:any) => (
        <div key={index} className={index === props.activeIndex ? "slides active" : "inactive"}>
          <img className="slide-image" src={slide.urls} alt="" />
          <div className="">
            <h2 className="slide-title bg-[rgba(0,0,0,0.15)]">{slide.title}</h2>
            <h3 className="slide-text">{slide.description}</h3>
          </div>
          <div className="slide-text1"><button className="bg-white text-black py-[0.8rem] px-[1.5rem] md:mt-[18rem] mt-[25rem]">Shop Now</button></div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
