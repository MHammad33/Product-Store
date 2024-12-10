import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "./components/ui/toaster";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import ProductDetails from "./components/ProductDetails";
import ThemeProvider from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/create" element={<CreateProductPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Toaster />

      <footer className="bg-gray-200 text-center py-4 mt-8">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Your Store. All rights reserved.
        </p>
      </footer>
    </ThemeProvider>
  );
}

export default App;
