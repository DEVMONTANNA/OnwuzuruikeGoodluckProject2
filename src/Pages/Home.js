import React from "react";
import Header from "../Component/Header";
import SubHeader from "../Component/SubHeader";
import DefiSwap from "../Component/DefiSwap";
import "./Home.css";
import "./Homescript";
import Learning from "../Component/Learning";
import ImageScatter from "../Component/ImageScatter";

const Home = () => {
  return (
    <>
      <div className=" succ z-[5000] sticky">
      
        <Header />
        <SubHeader />
      </div>
      <div>
      <DefiSwap />
      <ImageScatter/>
      </div>
    </>
  );
};

export default Home;
