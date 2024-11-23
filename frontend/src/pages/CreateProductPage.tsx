import AddProduct from "@/components/AddProduct";
import { FC } from "react";

interface CreateProductPageProps {}

const CreateProductPage: FC<CreateProductPageProps> = ({}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center px-4">
      <header className="w-full max-w-4xl py-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2">
          Create a New Product
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Fill in the details below to add your product to the store.
        </p>
      </header>
      <main className="w-full max-w-3xl">
        <AddProduct />
      </main>
    </div>
  );
};

export default CreateProductPage;
