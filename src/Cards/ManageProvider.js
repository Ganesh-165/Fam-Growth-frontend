import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const ManageProvider = () => {
    const navigate = useNavigate();
    const onProductHandle =()=>{
      navigate('/username/provider/yourproducts');
    }
    const onServiceHandle =()=>{
      navigate('/username/provider/yourservices');
    }
  return (
    <Fragment>
      <div className="p-4 flex justify-end">
        <button class="w-auto p-4 text-xl text-white bg-[#2a2185] rounded-xl">
          Disable Provider
        </button>
      </div>
      <div className="max-w-3xl max-h-full mx-auto rounded-xl mt-10 md:mt-16 border border-black p-4 items-center flex flex-col shadow-lg shadow-[#2a2185]">
        <p className="p-4 text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          fugiat assumenda id fugit similique corrupti quam magnam in, iusto
          adipisci excepturi quo a aspernatur impedit, explicabo odio quos is
          autem atque.
        </p>
        <button class="w-auto p-4 text-xl text-white bg-[#2a2185] rounded-xl" onClick={onProductHandle}>
          Manage Products
        </button>
        <p className="p-4 text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          fugiat assumenda id fugit similique corrupti quam magnam in, iusto
          adipisci excepturi quo a aspernatur impedit, explicabo odio quos autem
          atque.
        </p>
        <button class="w-auto p-4 text-xl text-white bg-[#2a2185] rounded-xl" onClick={onServiceHandle}>
          Manage Services
        </button>
      </div>
    </Fragment>
  );
};

export default ManageProvider;
