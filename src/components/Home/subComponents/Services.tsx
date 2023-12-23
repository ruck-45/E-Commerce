// Dependencies
import ServiceImage from "./ServiceImage";

// Local Files
import socialMedia from "../assets/socialMedia.png";
import seo from "../assets/seo.png";
import webDev from "../assets/webDev.jpg";
import graphic from "../assets/graphic.jpg";
import analytics from "../assets/analytics.png";


const Services = () => {

  return (
    <div className="flex">
      <ServiceImage heading="Social Media Marketing" textSize="3rem" width={800} image={socialMedia} />
      <div className="grow grid grid-cols-2">
        <ServiceImage heading="Search Engine Optimization" textSize="2rem" width={400} image={seo} />
        <ServiceImage heading="Website Development" textSize="2rem" width={400} image={webDev} />
        <ServiceImage heading="Graphic Design" textSize="2rem" width={400} image={graphic} />
        <ServiceImage heading="Web Analytics" textSize="2rem" width={400} image={analytics} />
      </div>
    </div>
  );
};

export default Services;
