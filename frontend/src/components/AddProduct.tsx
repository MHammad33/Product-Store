import { FC, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

    console.log("Form Submitted", formData);
    setFormData({ name: "", price: "", image: "" });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Add Product
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div>
          <Label htmlFor="name" className="block text-sm font-medium">
            Product Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="e.g. Wireless Mouse"
            value={formData.name}
            onChange={handleInputChange}
            className={`mt-1 ${errors.name ? "border-red-500" : ""}`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <Label htmlFor="price" className="block text-sm font-medium">
            Price (in PKR)
          </Label>
          <Input
            id="price"
            name="price"
            placeholder="e.g. 1500"
            value={formData.price}
            onChange={handleInputChange}
            className={`mt-1 ${errors.price ? "border-red-500" : ""}`}
            type="number"
          />
          {errors.price && (
            <p className="text-red-500 text-xs mt-1">{errors.price}</p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <Label htmlFor="name" className="block text-sm font-medium">
            Image URL
          </Label>
          <Input
            id="image"
            name="image"
            placeholder="e.g. https://example.com/image.jpg"
            value={formData.image}
            onChange={handleInputChange}
            className={`mt-1 ${errors.image ? "border-red-500" : ""}`}
          />
          {errors.image && (
            <p className="text-red-500 text-xs mt-1">{errors.image}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
