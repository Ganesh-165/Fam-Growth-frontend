import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddService = () => {
  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const [price,setPrice] = useState('');
  const [tag,setTag] = useState('');
  const [stock,setStock] = useState('');


  const onSubmitHandler = async(event)=>{
    event.preventDefault();
    const response = await axios.post('',{name:name,description:description,price:price,tag:tag,stock:stock});
  }
  return (
    <div className="flex flex-col max-w-3xl items-center mx-auto border mt-10 border-black rounded-xl shadow-lg shadow-[#2a2185]">
      <h1 className="text-3xl font-bold mt-4">Add New Services</h1>
      <form
        className="flex flex-col gap-4 w-full p-4"
        onSubmit={onSubmitHandler}
      >
        <label class="xl:text-xl text-xl text-black">Enter the Name</label>
        <input
          type="text"
          placeholder="Eneter Here"
          required
          className="p-2 text-slate-950 rounded-lg border-none"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label class="xl:text-xl text-xl text-black">
          Enter the Description
        </label>
        <input
          type="text"
          placeholder="Eneter Here"
          required
          className="p-2 text-slate-950 rounded-lg border-none"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <label class="xl:text-xl text-xl text-black">Enter the Thumbnail</label>
        <input
          type="file"
          required
          className="p-2 text-slate-950 rounded-lg border-none"
        ></input>
        <label class="xl:text-xl text-xl text-black">Enter the Price</label>
        <input
          type="text"
          placeholder="Eneter Here"
          required
          className="p-2 text-slate-950 rounded-lg border-none"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <label class="xl:text-xl text-xl text-black">Enter the Tag</label>
        <input
          type="text"
          placeholder="Eneter Here"
          required
          className="p-2 text-slate-950 rounded-lg border-none"
          onChange={(e) => {
            setTag(e.target.value);
          }}
        ></input>
        <label class="xl:text-xl text-xl text-black">Enter the Stock</label>
        <input
          type="text"
          placeholder="Eneter Here"
          required
          className="p-2 text-slate-950 rounded-lg border-none"
          onChange={(e) => {
            setStock(e.target.value);
          }}
        ></input>
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

export default AddService;
