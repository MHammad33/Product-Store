import { Product } from "@/types";
import { FC } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Edit, Trash } from "lucide-react";
import { useProductStore } from "@/store/product";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const placeholderImage = "https://via.placeholder.com/300";
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    event.currentTarget.src = placeholderImage;
  };

  const { deleteProduct } = useProductStore();
  const handleDeleteProduct = async (productId: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete the project?",
    );

    if (!confirm) {
      return;
    }

    const { success, message } = await deleteProduct(productId);

    if (!success) {
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
        duration: 2000,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        variant: "default",
        duration: 2000,
      });
    }
  };

  return (
    <Card className="max-w-sm border rounded-lg shadow hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
      <CardHeader className="p-0 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
          onError={handleImageError} // If image fails to load, show the placeholder
        />
        {/* Edit and Delete icons */}
        <div className="absolute top-2 right-2 flex space-x-0">
          <Button
            variant="ghost"
            className="text-gray-500 hover:text-gray-800 p-1"
            onClick={() => alert("Edit functionality coming soon!")}
          >
            <Edit size={18} />
          </Button>
          <Button
            variant="ghost"
            className="text-red-500 hover:text-red-700 p-1"
            onClick={() => handleDeleteProduct(product.id)}
          >
            <Trash size={18} />
          </Button>
        </div>
      </CardHeader>
      <div className="px-4 py-3">
        <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">
          {product.name}
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          PKR {product.price.toLocaleString()}
        </CardDescription>
      </div>
      <CardFooter className="flex justify-between items-center p-4 border-t bg-gray-50 dark:bg-gray-900">
        <Button
          variant="ghost"
          className="text-sm"
          onClick={() => alert("View Details functionality coming soon!")}
        >
          View Details
        </Button>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
