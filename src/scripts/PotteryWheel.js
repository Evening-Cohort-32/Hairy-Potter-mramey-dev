let id = 1;

export const makePottery = (shape, weight, height) => {
  let image = "";
  if (shape === "Mug") {
    image = "./images/mug.jpg";
  } else if (shape === "Plate") {
    image = "./images/plate.jpeg";
  } else if (shape === "Bowl") {
    image = "./images/bowl.jpg";
  } else if (shape === "Teapot") {
    image = "./images/teapot.jpg";
  } else if (shape === "Vase") {
    image = "./images/vase.jpg";
  }

  return {
    shape,
    weight,
    height,
    image,
    id: id++,
  };
};
