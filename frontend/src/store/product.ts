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
  createProduct: (
    newProduct: ProductWithoutId,
  ) => Promise<{ success: boolean; message: string }>;
  fetchProducts: () => Promise<void>;
  deleteProduct: (
    productId: string,
  ) => Promise<{ success: boolean; message: string }>;
  updateProduct: (
    productId: string,
    updatedProduct: Product,
  ) => Promise<{ success: boolean; message: string }>;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products: Product[]) => set({ products }),
  createProduct: async (newProduct: ProductWithoutId) => {
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
  fetchProducts: async () => {
    const response = await fetch("/api/v1/products");
    const data = await response.json();
    set({ products: data.data });
  },
  deleteProduct: async (productId: string) => {
    console.log("deleteProduct :: zustand :: productId :: " + productId);

    const response = await fetch(`api/v1/products/${productId}`, {
      method: "DELETE",
    });
    const data = await response.json();

    if (!data.success) {
      return {
        success: false,
        message: data.message,
      };
    }

    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    }));

    return {
      success: true,
      message: data.message,
    };
  },
  updateProduct: async (productId: string, updatedProduct: Product) => {
    console.log("updatedProduct", updatedProduct);
    console.log("updatedProduct - JSON", JSON.stringify(updatedProduct));
    const response = await fetch(`/api/v1/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    const data = await response.json();
    if (!data.success) {
      return { success: false, message: data.message };
    }

    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId ? data.data : product,
      ),
    }));
    return { success: true, message: data.message };
  },
}));
