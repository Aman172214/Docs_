import React from "react";
import NewDocument from "./NewDoc";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-gray-100 h-full">
        <NewDocument />
      </div>
      
    </>
  );
};

export default Home;
