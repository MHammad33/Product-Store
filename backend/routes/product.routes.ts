import { Router } from "express";
import {
  createNewProduct,
  getAllProducts,
  removeProduct,
  updateProduct,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter
  .get("/", getAllProducts)
  .post("/", createNewProduct)
  .put("/:id", updateProduct)
  .delete("/:id", removeProduct);

export default productRouter;
