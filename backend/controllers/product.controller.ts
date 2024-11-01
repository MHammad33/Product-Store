import { Request, Response } from "express";

const createNewProduct = (_req: Request, res: Response) => {
  res.send("Create new Product");
};

export default {
  createNewProduct,
};
