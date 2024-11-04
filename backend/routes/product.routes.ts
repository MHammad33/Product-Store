import { Router } from "express";
import {
  createNewProduct,
  removeProduct,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter.post("/", createNewProduct).delete("/:id", removeProduct);

export default productRouter;
