// src/ProductDetail.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

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
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", err?.message || err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="pd-loading">
        <p>Đang tải thông tin sản phẩm...</p>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Quay lại danh sách
      </button>

      <div className="pd-content">
        {/* Hình ảnh sản phẩm */}
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        {/* Thông tin chi tiết */}
        <div className="product-info">
          <h2 className="pd-title">{product.title}</h2>

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
