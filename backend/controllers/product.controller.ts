import { Request, Response } from "express";
import productService from "../services/product.service";
import { toNewProductType } from "../utils";

export const createNewProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const newProduct = toNewProductType(req.body);
  const addedProduct = await productService.add(newProduct);
  res.json(addedProduct);
};

export const removeProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  await productService.removeById(productId);
  res.status(200).json({ success: true, message: "Product Deleted" });
};
