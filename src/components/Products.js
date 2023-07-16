import React, { Fragment } from "react";
import Product from "../Cards/Product";
import { useState ,useEffect } from "react";
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

const Products = () => {
  
  // const [data,setData] = useState([]);

  // useEffect(async()=>{
  //   const response = await axios.get('');
  //   setData(response);
  // },[data])
  return (
    <Fragment>
        <div className='flex xl:flex-row flex-col w-full justify-between p-6'>
            <h2 className='ml-10 xl:text-4xl text-2xl font-bold'>Products</h2>
            <input type='search' placeholder='Search Here...' className='p-2 rounded-full border-black border-2 outline-none xl:w-48 w-56 mt-5 xl:mt-0 ml-10 xl:ml-0 inline-block'></input>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-8 p-10 min-h-fit'>
            {data.map((item)=><Product items={item}/>)}
        </div>
    </Fragment>
  );
};

export default Products;

