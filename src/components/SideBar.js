import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";

const SideBar = () => {
  const [bool, setBool] = useState(false);

  const boolHandler = () => {
    setBool(!bool);
  };
  return (
    <Fragment>
      <div className=" w-full flex justify-between p-4 bg-[#2a2185] text-white text-xl">
        <div className="w-full">Image</div>
        <button
          className="text-white sm:hidden text-4xl top-5 left-4 cursor-pointer"
          onClick={boolHandler}
        >
          {bool ? (
            <AiOutlineCloseSquare className=" px-2 bg-[#2a2185] rounded-md" />
          ) : (
            <GiHamburgerMenu className=" px-2 bg-[#2a2185] rounded-md" />
          )}
        </button>
        <ul className=" w-full hidden justify-between sm:flex">
          <li>
            <NavLink
              to="/username/products"
              className={({ isActive }) =>
                isActive
                  ? "p-2.5 flex flex-row w-full bg-slate-400"
                  : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/username/services"
              className={({ isActive }) =>
                isActive
                  ? "p-2.5 flex flex-row w-full bg-slate-400"
                  : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/username/provider"
              className={({ isActive }) =>
                isActive
                  ? "p-2.5 flex flex-row w-full bg-slate-400"
                  : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
              }
            >
              Provider
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "p-2.5 flex flex-row w-full bg-slate-400"
                  : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
              }
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
      {bool && (
        <div className="sm:hidden fixed right-0">
          <ul className=" w-full justify-between flex flex-col min-w-[200px] p-2 bg-[#2a2185] text-xl text-white items-center">
            <li>
              <NavLink
                to="/username/products"
                className={({ isActive }) =>
                  isActive
                    ? "p-2.5 flex flex-row w-full bg-slate-400"
                    : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/username/services"
                className={({ isActive }) =>
                  isActive
                    ? "p-2.5 flex flex-row w-full bg-slate-400"
                    : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/username/provider"
                className={({ isActive }) =>
                  isActive
                    ? "p-2.5 flex flex-row w-full bg-slate-400"
                    : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
                }
              >
                Provider
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "p-2.5 flex flex-row w-full bg-slate-400"
                    : "p-2.5 flex flex-row w-full hover:scale-x-110 transition-all"
                }
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default SideBar;
