import { Product } from "@/types";
import { FC } from "react";
import { Button } from "./ui/button";

interface ProductDetailsProps {
  product?: Product;
}

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  const placeholderImage = "https://via.placeholder.com/300";
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    event.currentTarget.src = placeholderImage;
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-center items-center">
          <img
            src={product?.image || ""}
            onError={handleImageError}
            alt={product?.name || "Product"}
            className="w-full h-auto object-cover rounded-lg shadow-md border border-gray-200"
          />
        </div>

        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            {product?.name || "Product Name"}
          </h2>
          <p className="text-2xl text-gray-700 mb-6 font-semibold">
            Price:{" "}
            <span className="text-blue-600">PKR {product?.price || "0"}</span>
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Experience quality and functionality with our{" "}
            <span className="font-semibold">{product?.name || "product"}</span>.
            Designed with care, this product is crafted to meet your needs and
            exceed expectations. Enhance your lifestyle with{" "}
            {product?.name || "this amazing product"} today!
          </p>
          <Button
            onClick={() => alert("Functionality coming soon...")}
            className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg transition-all"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
