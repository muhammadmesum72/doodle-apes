import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="">
      {/* Top Navbar */}
      <Header />
      {/* Main Content Area */}
      <main className="relative bg-[#0B0B0B] ">{children}</main>
    </div>
  );
};

export default Layout;
