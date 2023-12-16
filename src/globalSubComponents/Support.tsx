// Dependencies
import { Image, Card, CardFooter } from "@nextui-org/react";

// Local Files
import "./Support.css";

const supportInfo = [
  {
    thumbnail:
      "https://images.unsplash.com/photo-1582508025792-7a88814f6f7e?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "IPO Priority",
    caption: "Exclusive IPO Access: Secure early access to promising companies at IPO prices.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1603777953662-5310c93eeb1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Recurring Investment",
    caption: "Automate wealth growth effortlessly—set and forget recurring investments!",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1616568584110-5b945d38a61c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Fractional Shares",
    caption: "Invest in favorites for $1. Own fractional shares instantly.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "24/7 Support",
    caption: "Always here for you. Live support, anytime you need. Connect now!",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1586448910433-965efd06eb38?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Recommendations",
    caption: "Guided first trade on us! Start investing with confidence today.",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1611348586755-53860f7ae57a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Learn the Basics",
    caption: "Mobile-friendly learning. Elevate investing skills instantly with our app.",
  },
];

const Support = () => {
  return (
    <div className="p-[5rem] support flex flex-col justify-center items-center gap-[2rem]">
      <h1 className="font-['concert_one'] text-[2.5rem] font-semibold">Enhance Your Experince</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {supportInfo.map((data, index) => (
          <Card isFooterBlurred radius="lg" className="border-none">
            <Image
              key={index}
              alt={`Image-${index}`}
              className="object-cover"
              src={data.thumbnail}
              width={300}
              isBlurred
              height={400}
              isZoomed
            />
            <CardFooter className="flex-col font-['poppins'] text-center items-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 bg-[rgba(0,0,0,0.4)]">
              <h1 className="text-default-200 text-xl font-semibold mt-[0.5rem]">{data.heading}</h1>
              <p className="text-xs text-default-200 p-[0.5rem]">{data.caption}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Support;
