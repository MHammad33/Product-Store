import { Request, Response } from "express";
import productService from "../services/product.service";
import { toNewProductType } from "../utils";

const createNewProduct = (req: Request, res: Response) => {
  const newProduct = toNewProductType(req.body);
  productService.addProduct();
  res.send("Create new Product");
};

export default {
  createNewProduct,
};
