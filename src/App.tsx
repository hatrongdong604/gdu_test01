// @ts-nocheck
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ✅ Layout
import Layout from "./layouts/Layout";
// ✅ Các trang
import Trang1 from "./Trang1";
import Trang2 from "./Trang2";
import ListProducts_SP from "./ListProducts_SP";
import ProductDetail from "./ProductDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* ✅ Trang danh sách sản phẩm */}
          <Route index element={<ListProducts_SP />} />

          {/* ✅ Trang phụ */}
          <Route path="trang1" element={<Trang1 />} />
          <Route path="trang2" element={<Trang2 />} />

          {/* ✅ Chi tiết sản phẩm */}
          <Route path="sanpham/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
