// @ts-nocheck
import { Outlet } from "react-router-dom";
import "../assets/css/layout.css";
import "../assets/css/fonts.css";
import MenuTop from "./MenuTop";
import MenuBox from "./MenuBox";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="layout-page">
      {/* ===== HEADER ===== */}
      <header id="header" className="header-custom">
        {/* Thanh top */}
        <div className="header_top">
          <div className="container_main">
            <MenuTop />
          </div>
        </div>

        {/* Logo + menu chính */}
        <div
          className="header-main"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.6rem 2rem",
            backgroundColor: "#b91c1c",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          {/* ===== Logo + chữ ===== */}
          <div
            className="logo-area"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <img
                src="https://i.pinimg.com/736x/b6/13/f9/b613f96d539eb174ffbc1fdb130be012.jpg"
                alt="Đạo Quán HoYoverse"
                style={{
                  height: "55px",
                  width: "55px",
                  objectFit: "cover",
                  borderRadius: "50%", // ✅ Bo tròn hoàn toàn
                  border: "2px solid #fff", // ✅ Viền trắng mảnh
                  boxShadow: "0 0 8px rgba(255,255,255,0.4)", // ✅ Hiệu ứng sáng nhẹ
                  transition: "all 0.3s ease",
                }}
                className="logo-img"
              />
              <span
                style={{
                  marginLeft: "10px",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  textShadow: "0 0 6px rgba(255,255,255,0.3)",
                  transition: "all 0.3s ease",
                }}
                className="logo-text"
              >
                Đạo Quán HoYoverse
              </span>
            </a>
          </div>

          {/* ===== Menu chính ===== */}
          <div id="main_menu">
            <MenuBox />
          </div>
        </div>
      </header>

      {/* ===== MAIN ===== */}
      <main className="news-home">
        <div className="container_main main-container">
          <Outlet />
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
};

export default Layout;
