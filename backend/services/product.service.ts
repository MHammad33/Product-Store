import Product from "../models/Product.model";
import { NewProduct, Product as ProductType } from "../types";

const add = async (product: NewProduct): Promise<ProductType> => {
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

const getAll = async (): Promise<ProductType[]> => {
  return await Product.find({});
};

const update = async (
  productId: string,
  dataToUpdate: Partial<ProductType>,
): Promise<ProductType> => {
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    dataToUpdate,
    { new: true },
  );

  if (!updatedProduct) {
    throw new Error("Could not update Product");
  }

  const transformedProduct: ProductType = {
    id: updatedProduct._id.toString(),
    name: updatedProduct.name,
    price: updatedProduct.price,
    image: updatedProduct.image,
  };

  return transformedProduct;
};

export default { add, removeById, getAll, update };
