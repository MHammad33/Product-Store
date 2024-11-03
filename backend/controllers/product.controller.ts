import { Request, Response } from "express";
import productService from "../services/product.service";
import { toNewProductType } from "../utils";

const createNewProduct = async (req: Request, res: Response) => {
  const newProduct = toNewProductType(req.body);
  const addedProduct = await productService.addProuct(newProduct);
  res.json(addedProduct);
};

export default {
  createNewProduct,
};
