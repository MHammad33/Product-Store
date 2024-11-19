import { Product } from "@/types";
import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products: Product[]) => set({ products }),
}));