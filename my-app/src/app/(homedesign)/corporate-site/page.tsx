import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Services from "./components/services";

const CorporateSitePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Services />
      </main>
      <Footer />
    </>
  );
};

export default CorporateSitePage;
