import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Nav from "./nav/Nav";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Nav/>
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
