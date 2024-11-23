import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";
import { Toaster } from "./components/ui/toaster";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/create" element={<AddProduct />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
