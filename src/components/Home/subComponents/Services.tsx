// Local Files
import "./Services.css";
import ServicesCard from "./ServicesCard";

const services = [
  {
    heading: "Investment",
    caption:
      "Unlock financial growth with our investment platform. Seamlessly navigate diverse markets, make informed decisions, and watch your wealth flourish. Start your journey toward financial success today.",
    thumbnail:
      "https://images.unsplash.com/photo-1613442301239-ea2478101ea7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    heading: "Crypto",
    caption:
      "Unlock the future of finance with our seamless cryptocurrency purchase service. Buy digital assets securely, navigate the world of blockchain effortlessly, and invest in the decentralized economy with confidence.",
    thumbnail:
      "https://images.unsplash.com/photo-1634704784915-aacf363b021f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    heading: "Options",
    caption:
      "Options trading allows investors to buy or sell the right to purchase or sell an asset at a predetermined price within a specified timeframe, providing strategic opportunities for risk management and profit.",
    thumbnail:
      "https://images.unsplash.com/photo-1651130540796-744c58fb74d1?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    heading: "Retirement",
    caption:
      "Unlock financial freedom with our Individual Retirement Account (IRA). Securely invest for your future, enjoy tax advantages, and tailor your retirement strategy with our user-friendly platform. Start building wealth today!",
    thumbnail:
      "https://images.unsplash.com/photo-1624150402111-9a54e5c2c798?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Services = () => {
  return (
    <div className="service flex flex-col justify-center items-center p-[5rem] gap-[2rem]">
      <div className="font-['Concert_one'] text-[3rem]">Our Services</div>
      <div className="flex flex-col gap-[2rem]">
        {services.map((data, index) => (
          <ServicesCard
            key={index}
            heading={data.heading}
            caption={data.caption}
            thumbnail={data.thumbnail}
            flip={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
