import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name,setName] = useState('');
  const [pincode,setPincode] = useState('');
  const [country,setCountry] = useState('');
  const [state,setState] = useState('');
  const [catogery,setCatogery] = useState('');


  const onSubmitHandler = async(event)=>{
    event.preventDefault();
    const response = await axios.post('',{name:name,pincode:pincode,country:country,state:state,catogery:catogery});
  }
  return (
    <div className="flex flex-col max-w-3xl items-center mx-auto border mt-10 border-black rounded-xl shadow-lg shadow-[#2a2185]">
      <h1 className="text-3xl font-bold mt-4">Register</h1>
      <form className="flex flex-col gap-4 w-full p-4" onSubmit={onSubmitHandler}>
        <label class="xl:text-xl text-xl text-black">Enter the Name</label>
        <input
          type="text"
          placeholder="Eneter Here"
          required
          className="p-2 text-slate-950 rounded-lg border-none"
          onChange={(e)=>{setName(e.target.value)}}
        ></input>
        <label class="xl:text-xl text-xl text-black">Enter the Pincode</label>
        <input
          type="text"
          placeholder="Eneter Here"
          required
          className="p-2 text-slate-950 rounded-lg border-none"
          onChange={(e)=>{setPincode(e.target.value)}}
        ></input>
        <label class="xl:text-xl text-xl text-black">Enter the Country</label>
        <input
          type="email"
          placeholder="Eneter Here"
          required
          className="p-2 text-slate-950 rounded-lg border-none"
          onChange={(e)=>{setCountry(e.target.value)}}
        ></input>
        <label class="xl:text-xl text-xl text-black">Enter the State</label>
        <input
          type="password"
          placeholder="Eneter Here"
          required
          className="p-2 text-slate-950 rounded-lg border-none"
          onChange={(e)=>{setState(e.target.value)}}
        ></input>
        <label class="xl:text-xl text-xl text-black">Enter the Catogery</label>
        <select name="cars" className="p-2 text-slate-950 rounded-lg border-none" onChange={(e)=>{setCatogery(e.target.value)}}>
          <option defaultValue hidden>Choose Here</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </form>
      <div className="flex flex-col sm:flex-row justify-between min-w-[300px]">
        <button
          type="submit"
          className="h-auto  w-auto mb-2 p-3 bg-[#2a2185] inline-block rounded-xl text-white text-xl"
        >
          Submit
        </button>
        <button
          type="submit"
          className="h-auto  w-auto mb-2 p-3 bg-[#2a2185] inline-block rounded-xl text-white text-xl"
        >
          <NavLink to="..">Cancel</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Form;
