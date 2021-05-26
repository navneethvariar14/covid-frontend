import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />

      {children}

      <Footer />
    </div>
  );
}
