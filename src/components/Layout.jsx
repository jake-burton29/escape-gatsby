import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  );
}
