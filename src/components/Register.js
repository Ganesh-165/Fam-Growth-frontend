import React from "react";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import image from '../images/Secure login-rafiki.svg'

function Register() {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [password, setpassword] = useState(null);
  const [confPassword, setconfPassword] = useState(null);
  const [phoneNo,setPhoneNo] = useState(null);
  const [address,setAdress] = useState(null);
  const [dob,setDOB] = useState(null);

  const navigate = useNavigate();
  const onRegisterHandler = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/2 max-w-3xl origin-top animate-image hidden lg:block">
        <img src={image} alt="Image" className="max-w-3xl my-auto relative rounded-3xl"/>
      </div>
      <div className='min-h-screen flex w-full flex-col max-w-3xl origin-center animate-container'>
        <div className='p-7 mx-0 my-auto relative w-full'>
          <h1 className="text-3xl font-bold">
            Register to <br /> Create a Account
          </h1>
          <div className='mt-6 xl:mt-10'>
            <form onSubmit={onRegisterHandler} className="flex flex-col gap-4">
              <label class="xl:text-xl text-xl text-black">Enter the FirstName</label>
              <input
                type="text"
                placeholder="Eneter Here"
                onChange={(e) => setFirstname(e.target.value)}
                required
                className="p-2 text-slate-950 rounded-lg border-none"
              ></input>
              <label class="xl:text-xl text-xl text-black">Enter the LastName</label>
              <input
                type="text"
                placeholder="Eneter Here"
                onChange={(e) => setLastname(e.target.value)}
                required
                className="p-2 text-slate-950 rounded-lg border-none"
              ></input>
              <label class="xl:text-xl text-xl text-black">Enter the Email</label>
              <input
                type="email"
                placeholder="Eneter Here"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 text-slate-950 rounded-lg border-none"
              ></input>
              <label class="xl:text-xl text-xl text-black">Enter the DOB</label>
              <input
                type="date"
                placeholder="Eneter Here"
                onChange={(e) => setDOB(e.target.value)}
                required
                className="p-2 text-slate-950 rounded-lg border-none"
              ></input>
              <label class="xl:text-xl text-xl text-black">Enter the Password</label>
              <input
                type="password"
                placeholder="Eneter Here"
                onChange={(e) => setpassword(e.target.value)}
                required
                className="p-2 text-slate-950 rounded-lg border-none"
              ></input>
              <label class="xl:text-xl text-xl text-black">Enter the ConformPassword</label>
              <input
                type="password"
                placeholder="Eneter Here"
                onChange={(e) => setconfPassword(e.target.value)}
                required
                className="p-2 text-slate-950 rounded-lg border-none"
              ></input>
              <label class="xl:text-xl text-xl text-black">Enter the PhoneNumber</label>
              <input
                type="number"
                placeholder="Eneter Here"
                onChange={(e) => setPhoneNo(e.target.value)}
                required
                className="p-2 text-slate-950 rounded-lg border-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              ></input>
              <label class="xl:text-xl text-xl text-black">Enter the address</label>
              <textarea
                type="text"
                placeholder="Eneter Here"
                onChange={(e) => setAdress(e.target.value)}
                required
                className="p-2 text-slate-950 rounded-lg border-none"
              ></textarea>
              <div className="flex flex-row justify-between mt-10 text-3xl my-auto">
              <button type="submit" className="h-14 w-56 bg-[#2a2185] inline-block rounded-xl text-white text-2xl">Submit</button>
              </div>
              <p className="text-xl ">
                <NavLink to="..">Login Here!</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;



//radiobutton(involved in bussiness s or no);
  //bussiness name
//Dob