import React, { useState } from 'react'
import image from '../images/4957136.jpg'
import { NavLink } from 'react-router-dom'

const Product = (props) => {
  return (
    <div className=" min-h-[400px] max-w-[300px] shadow-lg shadow-[#2a2185] hover:shadow-xl hover:shadow-[#2a2185] rounded-lg flex flex-col items-center">
        <img src={image} alt="Image" width='300px' height='300px' className='rounded-xl'/>
        <h3 className=" text-xl mt-3">{props.items.name}</h3>
        <button><NavLink to={`/username/products/:${props.items.id}`}>Details</NavLink></button>
        <button><NavLink to={`/username/provider/yourproducts/:${props.items.id}`}>Details</NavLink></button>
    </div>
  )
}

export default Product