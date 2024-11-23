import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "./components/ui/toaster";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/create" element={<CreateProductPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
