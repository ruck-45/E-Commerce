export const scrollTop = (offset?: number) => {
  window.scrollTo({
    top: offset ? offset : 0,
    behavior: "smooth",
  });
};

export const imageExists = (url: string) => {
  const img = new Image();
  img.src = url;
  return img.complete || img.height !== 0;
};