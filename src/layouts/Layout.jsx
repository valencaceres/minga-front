import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <Header />
      <div className="content">
      <div className="slideshow-container">
        <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
}
