import React from "react";
import { NavLink } from "react-router-dom";
import image from "../images/4957136.jpg";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const id = useParams('id');
  // const [data,setData] = useState([]);

  // useEffect(async()=>{
  //   const response = await axios.get('');
  //   setData(response);
  // },[data])
  return (
    <div className="flex flex-col lg:flex-row p-4">
      <img src={image} width="500px" height="500px"></img>
      <div className="max-w-xl mx-auto flex flex-col text-xl items-center">
        <h1>Product Name</h1>
        <p className="p-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          fugiat assumenda id fugit similique corrupti quam magnam in, iusto
          adipisci excepturi quo a aspernatur impedit, explicabo odio quos is
          autem atque.
        </p>
        <p className="p-4">Price</p>
        <p className="p-4">Tags</p>
        <p className="p-4">Stock</p>
        <div className="flex flex-col sm:flex-row justify-between min-w-[300px]">
          <button
            type="submit"
            className="h-auto  w-auto mb-2 p-3 bg-[#2a2185] inline-block rounded-xl text-white text-xl"
          >
            Update
          </button>
          <button
            type="submit"
            className="h-auto  w-auto mb-2 p-3 bg-[#2a2185] inline-block rounded-xl text-white text-xl"
          >
            Delete
          </button>
        </div>
      </div>
      <button
        type="submit"
        className="h-12  w-36 mb-2 p-3 bg-[#2a2185] inline-block rounded-xl text-white text-xl"
      >
        <NavLink to="..">GoBack</NavLink>
      </button>
    </div>
  );
};

export default ServiceDetails;
