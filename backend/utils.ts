import { ProductWithoutId as NewProduct, Product } from "./types";

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

export const toUpdateProductType = (product: unknown): Partial<Product> => {
  if (!product || typeof product !== "object") {
    throw new Error("Incorrect or missing data");
  }

  const productData = product as Record<string, unknown>;

  const newProduct: Partial<Product> = {};

  if ("name" in productData) {
    newProduct.name = parseName(productData.name);
  }

  if ("price" in productData) {
    newProduct.price = parsePrice(productData.price);
  }

  if ("image" in productData) {
    newProduct.image = parseImage(productData.image);
  }

  return newProduct;
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
