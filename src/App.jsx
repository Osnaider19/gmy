import "./App.css";
import Header from "./components/header/Header";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import Product from "./page/Product";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Product" element={<Product/>}></Route>
      </Routes>
    </>
  );
}

export default App;
