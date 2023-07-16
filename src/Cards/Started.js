import React from "react";
import { useNavigate } from "react-router-dom";

const Started = () => {
    const navigate = useNavigate();
    const onHandle = ()=>{
        navigate('/username/provider/getstarted');
    }
  return (
    <div className="max-w-3xl max-h-full mx-auto rounded-xl mt-10 md:mt-32 border border-black p-4 items-center flex flex-col shadow-lg shadow-[#2a2185]">
      <h1 className="text-4xl">Terms and Conditions</h1>
      <hr className="w-2/3 h-0.5 bg-black my-3" />
      <p className="p-4 text-xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        fugiat assumenda id fugit similique corrupti quam magnam in, iusto
        adipisci excepturi quo a aspernatur impedit, explicabo odio quos is
        autem atque.
      </p>
      <p className="p-4 text-xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        fugiat assumenda id fugit similique corrupti quam magnam in, iusto
        adipisci excepturi quo a aspernatur impedit, explicabo odio quos autem
        atque.
      </p>
      <button class="w-auto p-4 text-xl text-white bg-[#2a2185] rounded-xl" onClick={onHandle}>
        Get Started
      </button>
    </div>
  );
};

export default Started;
