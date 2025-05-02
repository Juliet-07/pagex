import React, { ReactNode } from "react";
import Footer from "./Footer.tsx";
import Navbar from "./Navbar.tsx";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
