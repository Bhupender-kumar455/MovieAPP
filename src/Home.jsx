import React from "react";
import Appbar from "./components/Appbar";
import First from "../src/components/First";
import Footer from "./Footer";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#0e0e0e" }}>
      <Appbar />
      <First />
      <Footer />
    </div>
  );
};

export default Home;
