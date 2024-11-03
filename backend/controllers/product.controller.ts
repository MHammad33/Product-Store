import { Request, Response } from "express";
import productService from "../services/product.service";
import { toNewProductType } from "../utils";

const createNewProduct = async (req: Request, res: Response): Promise<void> => {
  const newProduct = toNewProductType(req.body);
  const addedProduct = await productService.addProduct(newProduct);
  res.json(addedProduct);
};

export default {
  createNewProduct,
};
