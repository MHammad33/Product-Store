import { Request, Response } from "express";
import productService from "../services/product.service";

const createNewProduct = (req: Request, res: Response) => {
  productService.addProduct();
  res.send("Create new Product");
};

export default {
  createNewProduct,
};
