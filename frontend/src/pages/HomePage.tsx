import { FC, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useProductStore } from "@/store/product";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <Card className="w-full max-w-4xl shadow-lg rounded-lg border border-gray-200 bg-white relative">
        <CardHeader className="pb-4 border-b">
          <CardTitle className="text-center text-2xl font-semibold text-gray-800">
            Current Products
          </CardTitle>
        </CardHeader>

        <Link to="/products/create">
          <Button
            variant="default"
            className="absolute top-4 right-4 px-6 py-1 text-lg font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 md:inline-block sm:hidden"
          >
            Create New Product
          </Button>
        </Link>

        {products.length === 0 ? (
          <CardContent className="flex flex-col items-center gap-4 py-6">
            <div className="flex items-center gap-2 text-gray-600">
              <AlertCircle className="w-6 h-6 text-red-500" />
              <p className="text-lg font-medium">No Products Found</p>
            </div>
            <p className="text-sm text-gray-500">
              There are no products yet. Start by creating one!
            </p>
          </CardContent>
        ) : (
          <CardContent className="py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default HomePage;
