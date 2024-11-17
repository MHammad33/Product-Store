import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;
