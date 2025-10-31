import "./styles.css";
//@ts-ignore
import Layout from "./Layout";
//@ts-ignore
import Trang1 from "./Trang1";
//@ts-ignore
import Trang2 from "./Trang2";
//@ts-ignore
import ListProducts_SP from "./ListProducts_SP";
//@ts-ignore
import ProductDetail from "./ProductDetail";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* ✅ Trang chính hiển thị danh sách sản phẩm */}
          <Route index element={<ListProducts_SP />} />

          {/* ✅ Các trang phụ */}
          <Route path="trang1" element={<Trang1 />} />
          <Route path="trang2" element={<Trang2 />} />

          {/* ✅ Trang chi tiết sản phẩm có hiệu ứng */}
          <Route path="sanpham/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
