export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export type ProductWithoutId = Omit<Product, "id">;
