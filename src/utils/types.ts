export type questionPattern = {
  question: string;
  answer: {
    data: {
      main: string;
      points: never[] | string[];
    };
    bullet: boolean;
  }[];
}[];

export type productsType = {
  item_id: String;
  imageCount: String;
  brand: String;
  title: String;
  color: String;
  discountedPrice: number;
  price: number;
  discountPercent: number;
  quantity: number;
  material: String;
  dimension: String;
  description: String;
  topLevelCategory: String;
  secondLevelCategory: String;
  thirdLevelCategory: String;
  highlights: String[];
  minimumOrder: number;
  details: String;
  orders: number;
  count: number;
};


export type individualProductType = {
  item_id: String;
  imageCount: String;
  brand: String;
  title: String;
  color: String;
  discountedPrice: number;
  price: number;
  discountPercent: number;
  quantity: number;
  material: String;
  dimension: String;
  description: String;
  topLevelCategory: String;
  secondLevelCategory: String;
  thirdLevelCategory: String;
  highlights: String[];
  minimumOrder: number;
  details: String;
  orders: number;
  created_at: Date;
};


export type Item = {
  discountedPrice: string;
  itemCount: string;
  itemId: string;
  totalPrice: string;
  unit_price: string;
};


export type orderType = {
  order_id: string;
  user_id: string;
  items: string;
  status: string;
  order_price: number;
  date: string;
  shipping_info: string;
  formatted_date?: string;
};
