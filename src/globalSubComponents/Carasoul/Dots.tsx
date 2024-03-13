
type fetching = {
  activeIndex: number;
  onclick: any;
  sliderData: any;
};



function Dots(props:fetching) {
  return (
    <div className="all-dots">
      {props.sliderData.map((slide: any, index: any) => (
        <span
          key={index}
          className={`${props.activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => props.onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;
