import React from "react";
import { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import { Login } from "../../Store/Slice/Login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPanel = () => {
  const data = {
    AdminName: "admin",
    Password: "admin",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(Login(data));
  }, []);
  const {LoginData,LoginLoading} = useSelector(state => state.LoginInfo)
  console.log(LoginData)
  const handelLogin = (e) => {
    e.preventDefault()
    // console.log(e.target.elements[0].value)
    if(LoginData.data.status == 200)
    {
      console.log(LoginData.data.status)
      navigate("/adminpanel")
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="relative top-0 font-poppins mb-11">
        <div className="  flex flex-col  border-2  border-neutral-400 bg-white items-center absolute  rounded-xl gap-y-4 w-[410px] left-36 top-10">
          <h1 className="text-3xl mt-51 font-bold text-[42px] font-poppins text-neutral-700">
            {" "}
            Admin Log In
          </h1>
          <div className="flex flex-col text-left">
            <label className="text-slate-600 text-xl font-medium">
              Admin_ID
            </label>
            <input
              className="w-[330px] border-2  border-neutral-200 pl-[20px] bg-white h-[52px] rounded-[100px]"
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
              className="bg-white h-[52px] w-[330px] rounded-[100px] pl-[20px] border-2 border-neutral-200"
              type="password"
              placeholder="Your password"
              required
            ></input>
          </div>
          <button
            onClick={handelLogin}
            className="bg-gradient-to-tr from-purple-300 to-pink-200 text-center flex items-center justify-center text-medium text-xl text-slate-700  mb-[52px] text-white w-[330px] h-[52px] mt-[40px] rounded-full "
          >
            Log In
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LoginPanel;
