import { Router } from "express";
import {
  createNewProduct,
  getAllProducts,
  removeProduct,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter
  .get("/", getAllProducts)
  .post("/", createNewProduct)
  .delete("/:id", removeProduct);

export default productRouter;
