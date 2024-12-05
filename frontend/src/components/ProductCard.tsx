import { Product } from "@/types";
import React, { FC, useState } from "react";
import { Button } from "./ui/button";
import Modal from "./ui/modal";
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
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [productData, setProductData] = useState<Product>(product);

  const placeholderImage = "https://via.placeholder.com/300";
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    event.currentTarget.src = placeholderImage;
  };

  const handleModalInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  const { deleteProduct, updateProduct } = useProductStore();
  const handleDeleteProduct = async (productId: string) => {
    if (!productId) return;
    setConfirmModalOpen(true);

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

    setConfirmModalOpen(false);
  };

  const handleEditProduct = async (productId: string) => {
    const { success, message } = await updateProduct(productId, {
      ...productData,
      price: Number(productData.price),
    });

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
      setEditModalOpen(false);
    }
  };

  return (
    <>
      <Card className="max-w-sm border rounded-lg shadow hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
        <CardHeader className="p-0 relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
            onError={handleImageError}
          />

          <div className="absolute top-2 right-2 flex space-x-0">
            <Button
              variant="ghost"
              className="text-gray-500 hover:text-gray-800 p-1"
              onClick={() => setEditModalOpen(true)}
            >
              <Edit size={18} />
            </Button>
            <Button
              variant="ghost"
              className="text-red-500 hover:text-red-700 p-1"
              onClick={() => setConfirmModalOpen(true)}
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

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        title="Edit Product"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleModalInput}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleModalInput}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Image Url
            </label>
            <input
              type="text"
              name="image"
              value={productData.image}
              onChange={handleModalInput}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 p-3 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="text-right">
            <Button
              onClick={() => handleEditProduct(product.id)}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isConfirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        title="Confirm Deletion"
        option="delete"
      >
        <div className="space-y-4">
          <div className="flex justify-end space-x-2">
            <Button
              variant="outline"
              onClick={() => setConfirmModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="bg-red-600 text-white hover:bg-red-700"
              onClick={() => handleDeleteProduct(product.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductCard;
