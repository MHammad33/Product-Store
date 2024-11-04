import Product from "../models/Product.model";
import { NewProduct, Product as ProductType } from "../types";

const addProduct = async (product: NewProduct): Promise<ProductType> => {
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

const removeById = async (productId: string): Promise<void> => {
  await Product.findByIdAndDelete(productId);
};

export default { addProduct, removeById };
