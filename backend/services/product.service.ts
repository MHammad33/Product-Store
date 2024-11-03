import Product from "../models/Product.model";
import { Product as ProductType } from "../types";

const addProduct = async (product: ProductType): Promise<ProductType> => {
  const newProduct = new Product(product);
  const savedProduct = await newProduct.save();

  const transformedProduct: ProductType = {
    id: savedProduct._id.toString(),
    name: savedProduct.name,
    price: savedProduct.price,
    image: savedProduct.image,
  };

  return transformedProduct;
};

export default { addProduct };
