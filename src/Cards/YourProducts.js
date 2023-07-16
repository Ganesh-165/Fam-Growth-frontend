import React from "react";
import { Fragment } from "react";
import Product from "./Product";
import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

const data = [{
  id:'101',
  name:'abc',
},{
  id:'102',
  name:'axy',
},{
  id:'102',
  name:'abc'
},{
  id:'102',
  name:'azy'
}];


const YourProducts = () => {
  // const [data,setData] = useState([]);

  // useEffect(async()=>{
  //   const response = await axios.get('');
  //   setData(response);
  // },[data])
  return (
    <Fragment>
      <div className="flex xl:flex-row flex-col w-full justify-between p-6">
        <h2 className="ml-10 xl:text-4xl text-2xl font-bold">Your Products</h2>
        {/* <input
          type="search"
          placeholder="Search Here..."
          className="p-1 rounded-full border-black border-2 outline-none  w-36 mt-5 xl:mt-0 ml-10 xl:ml-0 inline-block"
        ></input> */}
        <div className="ml-10 flex sm:flex-row flex-col justify-around w-2/5">
        <button className="h-auto  w-auto mb-2 p-3 bg-[#2a2185] inline-block rounded-xl text-white text-xl">
        <NavLink to='/username/provider/yourproducts/addnewproduct'>Add New Product</NavLink>
        </button>
        <button className="h-auto  w-auto mb-2 p-3 bg-[#2a2185] inline-block rounded-xl text-white text-xl">
          <NavLink to='..'>GoBack</NavLink>
        </button>
        </div>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-8 p-10 min-h-fit'>
            {data.map((item)=><Product items={item}/>)}
      </div>
    </Fragment>
  );
};

export default YourProducts;
