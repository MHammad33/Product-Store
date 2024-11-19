import { Product, ProductWithoutId } from "@/types";
import { create } from "zustand";

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  create: (
    newProduct: ProductWithoutId,
  ) => Promise<{ success: boolean; message: string }>;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products: Product[]) => set({ products }),
  create: async (newProduct: ProductWithoutId) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return {
        success: false,
        message: "Please fill all the fields",
      };
    }

    try {
      const res = await fetch("/api/v1/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        throw new Error("Failed to create product");
      }

      const data: ApiResponse<Product> = await res.json();

      set((state) => ({ products: [...state.products, data.data] }));
      return {
        success: true,
        message: "Product created successfully",
      };
    } catch (error) {
      console.error("Error creating product:", error);
      return {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      };
    }
  },
}));
