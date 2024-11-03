import Product from "../models/Product.model";
import { Product as ProductType } from "../types";

const addProduct = async (product: ProductType): ProductType => {
  const newProduct = new Product(product);
  await newProduct.save();
  return newProduct;
};

export default { addProduct };
