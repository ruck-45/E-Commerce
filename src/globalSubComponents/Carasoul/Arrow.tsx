import React from "react";

type fetching = {
  prevSlide: any;
  nextSlide: any;
  
};

function Arrows(props:fetching) {
  return (
    <div className="arrows">
      <span className="prev" onClick={props.prevSlide}>
        &#10094;
      </span>
      <span className="next" onClick={props.nextSlide}>
        &#10095;
      </span>
    </div>
  );
}

export default Arrows;
