import React from "react";
import image from "../images/4957136.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const onsubmitHandler = async(event)=>{
    event.preventDefault();
    const response = await axios.post('',{email:email,password:password});
  }
  return (
    <div className="min-h-screen bg-slate-50 dark:text-white">
      <div class="p-4 flex flex-col lg:flex-row">
        <div class="origin-top animate-image">
          <img
            src={image}
            alt="Image"
            className="hidden lg:block max-w-2xl my-auto relative rounded-3xl"
          />
        </div>
        <div class="w-full max-w-3xl p-10 origin-center animate-container">
          <h1 class="text-black text-3xl font-bold">
            Login to Access
            <br /> to Your Account
          </h1>
          <form class=" flex flex-col p-3 mt-20" onSubmit={onsubmitHandler}>
            <label class="xl:text-2xl text-2xl text-black">
              Enter the Email
            </label>
            <input
              type="text"
              placeholder="Enter Here"
              className="p-4 mt-3 text-slate-950 rounded-lg border-none"
              onChange={(e)=>{setEmail(e.target.email)}}
            />
            <label class="xl:text-2xl text-2xl text-black mt-7">
              Enter the Password
            </label>
            <input
              type="password"
              placeholder="Enter Here"
              className="p-4 mt-3 text-slate-950 rounded-lg"
              onChange={(e)=>{setPassword(e.target.email)}}
            />
            <button class="w-56 p-4 mt-20 text-xl text-white bg-[#2a2185] rounded-xl inline-block">
              Submit
            </button>
          </form>
          <p className=" p-3 text-xl text-black">
            <NavLink to="/register">Register Here!</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
