export const scrollTop = (offset?: number) => {
  window.scrollTo({
    top: offset ? offset : 0,
    behavior: "smooth",
  });
};

export const createArray = (n: number) => {
  return Array.from({ length: n }, (_, index) => index + 1);
};
