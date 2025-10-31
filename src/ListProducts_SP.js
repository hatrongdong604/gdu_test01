// src/ListProducts_SP.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

const ListProducts_SP = () => {
  const [listProduct, setListProduct] = useState([]);
  const navigate = useNavigate();

  // ✅ Lấy dữ liệu sản phẩm từ Supabase
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from("product1")
          .select("*")
          .order("id", { ascending: true });
        if (error) throw error;
        setListProduct(data);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu:", err.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#003366",
          fontWeight: "600",
        }}
      >
        Danh sách sản phẩm
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {listProduct.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/sanpham/${p.id}`)} // ✅ Khi click sẽ mở trang ProductDetail
            style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              padding: "15px",
              textAlign: "center",
              cursor: "pointer",
              background: "white",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{
                height: "200px",
                width: "100%",
                objectFit: "contain",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            />
            <h4 style={{ fontSize: "16px", marginBottom: "8px" }}>{p.title}</h4>
            <p
              style={{
                color: "#d33",
                fontWeight: "bold",
                marginBottom: "6px",
              }}
            >
              ${p.price}
            </p>
            <small style={{ color: "#666" }}>
              ⭐ {p.rating_rate} ({p.rating_count} đánh giá)
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProducts_SP;
