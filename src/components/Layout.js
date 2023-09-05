import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <div className="relative z-10 lg:bg-logo-color bg-transparent w-full lg:h-36 h-fit flex justify-center">
          <Header />
          <Nav />
        </div>
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
