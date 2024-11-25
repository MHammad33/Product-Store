import mongoose from "mongoose";
import { Product as ProductType } from "../types";

export interface IProductDocument extends Omit<ProductType, "id">, Document {
  _id: string;
  __v?: number;
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
    timestamps: true, // createdAt, updatedAt,
    toJSON: {
      transform(
        _doc: IProductDocument,
        ret: Partial<IProductDocument & { id: string }>,
      ) {
        ret.id = ret._id as unknown as string;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  },
);

const Product = mongoose.model<IProductDocument>("Product", productSchema);

export default Product;
