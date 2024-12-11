import { FC } from "react";
import { Button } from "./ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { useProductStore } from "@/store/product";

interface ProductDetailsProps {}

const ProductDetails: FC<ProductDetailsProps> = () => {
  const navigate = useNavigate();
  const { id: productId } = useParams<{ id: string }>();
  const { products } = useProductStore();
  const product = products.find((product) => product.id === productId);

  const placeholderImage = "https://via.placeholder.com/300";
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    event.currentTarget.src = placeholderImage;
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-10">
        <div className="text-center bg-red-100 dark:bg-red-700 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Sorry, the product you're looking for is not available.
          </p>
          <Button
            onClick={() => (window.location.href = "/")}
            className="mt-4 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 px-6 py-2 rounded-lg"
          >
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 font-semibold transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <div className="flex justify-center items-center">
          <img
            src={product?.image || ""}
            onError={handleImageError}
            alt={product?.name || "Product"}
            className="w-full h-auto object-cover rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
          />
        </div>

        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
            {product?.name || "Product Name"}
          </h2>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6 font-semibold">
            Price:{" "}
            <span className="text-blue-600 dark:text-blue-400">
              PKR {product?.price || "0"}
            </span>
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Experience quality and functionality with our{" "}
            <span className="font-semibold">{product?.name || "product"}</span>.
            Designed with care, this product is crafted to meet your needs and
            exceed expectations. Enhance your lifestyle with{" "}
            {product?.name || "this amazing product"} today!
          </p>
          <Button
            onClick={() => alert("Functionality coming soon...")}
            className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white text-lg font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-900 hover:shadow-lg transition-all dark:text-white"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
