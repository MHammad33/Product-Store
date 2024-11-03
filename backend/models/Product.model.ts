import mongoose from "mongoose";
import { Product as ProductType } from "../types";

export interface IProductDocument extends Omit<ProductType, "id">, Document {
  _id: string;
}

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  },
);

const Product = mongoose.model<IProductDocument>("Product", productSchema);

export default Product;
