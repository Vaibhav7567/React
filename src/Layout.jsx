import react from "react";

import { Outlet } from "react-router-dom";
// changed to default exports - vraj.
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Layout() {
  console.log("layout loaded");
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
