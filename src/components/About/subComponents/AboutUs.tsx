// Dependencies
import { Divider, Image } from "@nextui-org/react";

const AboutUs = () => {
  return (
    <div className="flex justify-center flex-wrap gap-x-[8rem] gap-y-[1rem] px-[3rem] md:px-[5rem] py-[2rem]">
      <div className="max-w-[30rem]">
        <h1 className="text-2xl font-bold">
          WE ARE A LIFESTYLE BRAND & <span className="text-[#F31260]">WE BELIEVE IN GREAT STYLE</span>
        </h1>
        <div className="flex flex-col gap-[1rem] text-xs text-justify mt-[1rem]">
          <p>
            At ShopNest, we're more than just a marketplace – we're a lifestyle brand dedicated to curating the finest
            selection of carpets and antiques, meticulously chosen to complement your living space with timeless
            elegance. We believe in the transformative power of great style, infusing every thread and artifact with a
            story that resonates through generations.
          </p>
          <p>
            Our journey began with a passion for craftsmanship, a dedication to preserving cultural heritage, and an
            unwavering commitment to quality. Each piece in our collection is a testament to the skill and artistry of
            artisans from around the world. From the intricate weaving of Persian rugs to the exquisite detailing of
            vintage antiques, every item in our inventory tells a tale of tradition, beauty, and unparalleled
            craftsmanship.
          </p>
          <p>
            At ShopNest, we understand that your home is a canvas, waiting to be adorned with pieces that reflect your
            unique taste and personality. Whether you're drawn to the timeless allure of Oriental rugs or the rustic
            charm of antique furnishings, our diverse selection offers something for every aesthetic sensibility. Each
            purchase from ShopNest isn't just an acquisition; it's an investment in a piece of history, a chance to
            unravel stories and weave new memories within the fabric of your home.
          </p>
          <p>
            As a lifestyle brand, we hold ourselves to the highest standards of excellence. From the moment you browse
            our virtual aisles to the day your purchase arrives at your doorstep, we strive to provide an unparalleled
            shopping experience. Our team of experts is dedicated to assisting you every step of the way, offering
            personalized recommendations and guidance to help you find the perfect piece for your space.
          </p>
        </div>
        <div className="flex items-center mt-[1rem] gap-[1rem]">
          <Divider className="h-[0.1rem] shrink" />
          <p className="shrink-0 text-default-500">Julia Donovan</p>
        </div>
      </div>
      <Image
        width={300}
        src="https://images.unsplash.com/photo-1577702312572-5bb9328a9f15?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="z-[5] cursor-pointer"
        isBlurred
        isZoomed
        radius="none"
      />
    </div>
  );
};

export default AboutUs;
