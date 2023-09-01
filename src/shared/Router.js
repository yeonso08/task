import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/carts" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
