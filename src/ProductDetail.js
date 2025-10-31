// src/ProductDetail.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  // ✅ Khởi tạo hiệu ứng AOS
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  // ✅ Lấy dữ liệu sản phẩm
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data, error } = await supabase
          .from("product1")
          .select("*")
          .eq("id", id)
          .single();
        if (error) throw error;
        setProduct(data);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu:", err.message);
      }
    };
    fetchProduct();
  }, [id]);

  // ✅ Loading
  if (!product) {
    return (
      <div className="pd-loading" data-aos="fade-in">
        <p>Đang tải thông tin sản phẩm...</p>
      </div>
    );
  }

  // ✅ Hiển thị chi tiết
  return (
    <div className="product-detail" data-aos="fade-up">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Quay lại danh sách
      </button>

      <div className="pd-container">
        <div className="pd-image" data-aos="fade-right">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="pd-info" data-aos="fade-left">
          <h2>{product.title}</h2>
          <p className="pd-price">${product.price}</p>
          <p className="pd-rating">
            ⭐ {product.rating_rate} ({product.rating_count} đánh giá)
          </p>
          <p className="pd-desc">
            {product.description || "Chưa có mô tả cho sản phẩm này."}
          </p>

          <button
            className="add-btn"
            onClick={() => alert("Đã thêm vào giỏ hàng!")}
          >
            🛒 Thêm vào giỏ của tôi
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
