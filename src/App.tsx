import "./styles.css";
// @ts-ignore
import Home from "./Home";
// @ts-ignore
import Layout from "./Layout";
// @ts-ignore
import Trang1 from "./Trang1";
// @ts-ignore
import Trang2 from "./Trang2";
// @ts-ignore
import ListProduct from "./ListProduct.js";
// @ts-ignore
import ListProducts_SP from "./ListProducts_SP.js";
// @ts-ignore
import ProductDetail from "./ProductDetail"; // 👉 dùng file chi tiết chính
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout bao ngoài (menu, header, footer) */}
        <Route path="/" element={<Layout />}>
          {/* Trang danh sách sản phẩm */}
          <Route index element={<ListProducts_SP />} />

          {/* Các trang khác */}
          <Route path="trang1" element={<Trang1 />} />
          <Route path="trang2" element={<Trang2 />} />

          {/* Trang chi tiết sản phẩm - hiển thị đúng sản phẩm được click */}
          <Route path="sanpham/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
