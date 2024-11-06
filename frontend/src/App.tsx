import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/create" element={<h1>Create Product Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
