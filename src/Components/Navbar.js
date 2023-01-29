import React from "react";
import Login from "./Login";
const Navbar = () => {
  return (
    <div className=" flex-col bg-slate-400 justify-center text-center items-center ">
      <p className="text-3xl p-10 text-black font-bold">Admin Panel</p>
      <Login />
    </div>
  );
};

export default Navbar;
