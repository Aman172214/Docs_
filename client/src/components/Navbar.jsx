import React from "react";
import logo from "../assets/docs.png";
import profile from "../assets/logo.png";
function Navbar() {
  return (
    <div className="flex mt-3 ml-2 h-14 justify-between">
      <div className="flex">
        <img src={logo} alt="logo" className="flex h-10" />

        <h1 className="text-3xl ml-2 text-indigo-600 flex">Docs</h1>
      </div>
      <div className="mr-2">
        <img
          src={profile}
          alt=""
          className="h-10 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Navbar;
