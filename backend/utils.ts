import { NewProduct } from "./types";

export const toNewProductType = (product: unknown): NewProduct => {
  if (!product || typeof product !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if ("name" in product && "price" in product && "image" in product) {
    const newProduct: NewProduct = {
      name: parseName(product.name),
      price: parsePrice(product.price),
      image: parseImage(product.image),
    };

    return newProduct;
  }

  throw new Error("Incorrect data: some fields are missing");
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error("Incorrect or missing name");
  }
  return name;
};

const parsePrice = (price: unknown): number => {
  if (!price || !isNumber(price)) {
    throw new Error("Incorrect or missing number");
  }
  return price;
};

const parseImage = (image: unknown): string => {
  if (!image || !isString(image)) {
    throw new Error("Incorrect or missing image");
  }
  return image;
};

const isString = (text: unknown): text is string => {
  return typeof text === "string";
};

const isNumber = (text: unknown): text is number => {
  return typeof text === "number";
};
