import { Menu, Search, Settings, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex ml-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-96">
                    <div className="grid gap-1">
                      <NavigationMenuLink className="cursor-pointer hover:underline">
                        Product 1
                      </NavigationMenuLink>
                      <NavigationMenuLink className="cursor-pointer hover:underline">
                        Product 2
                      </NavigationMenuLink>
                      <NavigationMenuLink className="cursor-pointer hover:underline">
                        Product 3
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost">About</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost">Contact</Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search and Actions */}
        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden md:flex">
            <Input
              type="search"
              placeholder="Search..."
              className="w-64"
              data-testid="search-input"
            />
          </div>
          <Button variant="ghost" size="icon" data-testid="search-icon">
            <Search className="h-5 w-5 md:hidden" />
          </Button>
          <Button variant="ghost" size="icon" data-testid="settings-button">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" data-testid="user-button">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
