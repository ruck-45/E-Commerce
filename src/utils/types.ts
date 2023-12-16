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