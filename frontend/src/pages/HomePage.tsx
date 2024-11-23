import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // ShadCN Button
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // ShadCN Card
import { AlertCircle } from "lucide-react"; // Example Icon for "No Products Found"

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <Card className="w-full max-w-lg shadow-lg rounded-lg border border-gray-200 bg-white">
        <CardHeader className="pb-4 border-b">
          <CardTitle className="text-center text-2xl font-semibold text-gray-800">
            Current Products
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4 py-6">
          <div className="flex items-center gap-2 text-gray-600">
            <AlertCircle className="w-6 h-6 text-red-500" />
            <p className="text-lg font-medium">No Products Found</p>
          </div>
          <p className="text-sm text-gray-500">
            There are no products yet. Start by creating one!
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link to="/products/create">
            <Button
              variant="default"
              className="px-6 py-3 text-lg font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Create Product
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HomePage;
