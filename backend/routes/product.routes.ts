import { Router } from "express";
import productController, {
  removeProduct,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter
  .post("/", productController.createNewProduct)
  .delete("/:id", removeProduct);

export default productRouter;
