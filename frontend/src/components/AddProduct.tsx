import { FC, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useProductStore } from "@/store/product";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface AddProductProps {}

const AddProduct: FC<AddProductProps> = ({}) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors({
      name: "",
      price: "",
      image: "",
    });

    let hasError = false;

    if (!formData.name) {
      setErrors((prev) => ({ ...prev, name: "Product name is required." }));
      hasError = true;
    }

    if (!formData.price) {
      setErrors((prev) => ({ ...prev, price: "Price is required." }));
      hasError = true;
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      setErrors((prev) => ({ ...prev, price: "Please enter a valid price." }));
      hasError = true;
    }

    if (!formData.image) {
      setErrors((prev) => ({ ...prev, image: "Image URL is required." }));
      hasError = true;
    } else if (!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(formData.image)) {
      setErrors((prev) => ({
        ...prev,
        image:
          "Please enter a valid image URL (e.g., https://example.com/image.jpg).",
      }));
      hasError = true;
    }

    if (hasError) return;

    const productToCreate = {
      ...formData,
      price: Number(formData.price),
    };

    const { message, success } = await createProduct(productToCreate);

    if (!success) {
      toast({
        title: "An Error Occurred",
        description: message,
        variant: "destructive",
      });
    }

    console.log("success", success);
    console.log("message", message);
    setFormData({ name: "", price: "", image: "" });
    toast({
      title: "Product Created",
      description: message,
      variant: "default",
    });
    navigate("/");
  };

  return (
    <div className="max-w-2xl w-full mx-auto mt-6 p-8 border rounded-lg shadow-md bg-white dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label
            htmlFor="name"
            className="block text-sm font-medium mb-1 dark:text-white"
          >
            Product Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="e.g. Wireless Mouse"
            value={formData.name}
            onChange={handleInputChange}
            className={`mt-1 w-full ${errors.name ? "border-red-500" : "border-gray-300"} dark:border-gray-600 dark:bg-gray-900 dark:text-white`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <Label
            htmlFor="price"
            className="block text-sm font-medium mb-1 dark:text-white"
          >
            Price (in PKR)
          </Label>
          <Input
            id="price"
            name="price"
            placeholder="e.g. 1500"
            value={formData.price}
            onChange={handleInputChange}
            className={`mt-1 w-full ${errors.price ? "border-red-500" : "border-gray-300"} dark:border-gray-600 dark:bg-gray-900 dark:text-white`}
            type="number"
          />
          {errors.price && (
            <p className="text-red-500 text-xs mt-1">{errors.price}</p>
          )}
        </div>

        <div>
          <Label
            htmlFor="image"
            className="block text-sm font-medium mb-1 dark:text-white"
          >
            Image URL
          </Label>
          <Input
            id="image"
            name="image"
            placeholder="e.g. https://example.com/image.jpg"
            value={formData.image}
            onChange={handleInputChange}
            className={`mt-1 w-full ${errors.image ? "border-red-500" : "border-gray-300"} dark:border-gray-600 dark:bg-gray-900 dark:text-white`}
          />
          {errors.image && (
            <p className="text-red-500 text-xs mt-1">{errors.image}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
        >
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
