import React from "react";
import Navbar from "../Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
