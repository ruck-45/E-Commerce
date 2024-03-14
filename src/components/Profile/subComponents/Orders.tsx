import { Card, CardFooter, Image } from "@nextui-org/react";

const Orders = () => {
  return (
    <div className="grid grid-cols-4">
      {[1, 2, 3, 4].map((i, j) => (
        <Card isFooterBlurred radius="lg" className="border-none w-[14rem] h-[15rem]" key={i}>
          <Image
            alt=""
            className="object-cover w-auto h-[15rem]"
            src="https://codesustain.in/cdn/shop/products/vintage-brass-candle-holders-gold-taper-candlesticks-tableware-set-of-2-traditional-758.jpg?v=1666777203"
          />
          <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <div className="flex flex-col">
              <p className="text-white/80">Vintage Elegance</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Orders;
