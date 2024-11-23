import { Menu, Plus } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              data-testid="menu-button"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-64"
            data-testid="sheet-content"
          >
            <div className="flex flex-col space-y-4 mt-8">
              <Button
                variant="ghost"
                className="justify-start"
                data-testid="home-button"
              >
                Home
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                data-testid="products-button"
              >
                Products
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                data-testid="about-button"
              >
                About
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                data-testid="contact-button"
              >
                Contact
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <div className="ml-4 md:ml-0">
          <h1 className="text-xl font-bold">Product Store</h1>
        </div>

        {/* Add Product Icon */}
        <div className="ml-auto flex items-center">
          <Link to="/products/create">
            <Button
              variant="ghost"
              size="icon"
              className="relative group p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md hover:scale-110 hover:shadow-lg transition-transform"
              data-testid="create-product-button"
              aria-label="Add Product"
            >
              <Plus className="h-7 w-7" />
              <span className="absolute -bottom-8 left-1 transform -translate-x-1/2 text-xs font-medium bg-gray-800 text-white py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all">
                Add Product
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
