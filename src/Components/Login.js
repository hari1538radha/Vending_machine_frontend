import React from "react";

const Login = () => {
  return (
    <div className="bg-slate-400">
      <div className="relative top-0 font-poppins mb-11">
        <div className="  flex flex-col  border-2 border-emerald-100 items-center absolute  rounded-xl gap-y-4 w-[410px] left-36 top-10">
          <h1 className="text-3x mt-51 font-bold text-[42px] font-sans">
            {" "}
            Admin Log In
          </h1>
          <div className="flex flex-col text-left">
            <label className="text-slate-600 text-xl font-medium">
            Admin_ID
            </label>
            <input
              className="w-[330px] border-2 border-grey-300 pl-[20px] bg-white h-[52px] rounded-[100px]"
              type="text"
              placeholder="UserId"
              required
            ></input>
          </div>
          <div className=" flex flex-col text-left">
            <label className="text-slate-600 text-xl font-medium">
              Password
            </label>
            <input
              className="bg-white h-[52px] w-[330px] rounded-[100px] pl-[20px] border-2 border-grey-300 "
              type="password"
              placeholder="Your password"
              required
            ></input>
          </div>
          <button className="bg-[#6496EB]  mb-[52px] text-white w-[330px] h-[52px] mt-[40px] rounded-full ">
            Log In
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
