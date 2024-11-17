import { FC, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface AddProductProps {}

const AddProduct: FC<AddProductProps> = ({}) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Submitted", formData);

    // Clear form
    setFormData({ name: "", price: "", description: "", category: "" });
    setError("");
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
            placeholder="Enter product name"
            value={formData.name}
            onChange={(e) => {
              e;
            }}
            className={`mt-1 ${error ? "border-red-500" : ""}`}
          />
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>

        {/* Price */}
        <div>
          <Label htmlFor="price" className="block text-sm font-medium">
            Price (in USD)
          </Label>
          <Input
            id="price"
            name="price"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleInputChange}
            className={`mt-1 ${error ? "border-red-500" : ""}`}
            type="number"
          />
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description" className="block text-sm font-medium">
            Description
          </Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Enter product description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="mt-1"
          />
        </div>

        {/* Category */}
        <div>
          <Label htmlFor="category" className="block text-sm font-medium">
            Category
          </Label>
          <Select
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, category: value }))
            }
          >
            <SelectTrigger
              id="category"
              className={`mt-1 ${error ? "border-red-500" : ""}`}
            >
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="home">Home</SelectItem>
              <SelectItem value="books">Books</SelectItem>
            </SelectContent>
          </Select>
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
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
