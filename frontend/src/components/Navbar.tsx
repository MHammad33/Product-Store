import { Menu, Plus } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              data-testid="menu-button"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-64 bg-gray-50 shadow-lg"
            data-testid="sheet-content"
          >
            <nav className="flex flex-col space-y-4 mt-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 text-base"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 text-base"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 text-base"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 text-base"
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <div className="ml-4 md:ml-0">
          <Link
            to="/"
            className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
          >
            Product Store
          </Link>
        </div>

        {/* Actions */}
        <div className="ml-auto flex items-center space-x-4">
          <Link to="/products/create">
            <Button
              variant="ghost"
              size="icon"
              className="relative group p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md hover:scale-110 hover:shadow-lg transition-transform"
              data-testid="create-product-button"
              aria-label="Add Product"
            >
              <Plus className="h-6 w-6" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-gray-800 text-white py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all">
                Add Product
              </span>
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
