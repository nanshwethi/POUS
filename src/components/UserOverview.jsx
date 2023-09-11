import { Anchor, Breadcrumbs } from "@mantine/core";
import React from "react";
import { AiOutlineArrowRight, AiOutlineMinus } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";

import { useGetUserQuery } from "../redux/api/userApi";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiCopy } from "react-icons/bi";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";


const UserOverview = () => {

  const token=Cookies.get("token");
  console.log(token);
  
    const { data } =  useGetUserQuery(token);
    console.log(data);
 
 
  const items = [
    { title: "User", href: "/user-overview" },
    { title: "CreateUser", href: "/create-user" },
  ].map((item, index) => (
    <Anchor className=" text-3xl font-semibold" href={item.href} key={index}>
      {item.title}
    </Anchor>
  )); 

   const handleBanned=()=>{
    const MySwal = withReactContent(Swal)
  
   MySwal.fire(
   'The Internet?',
    'That thing is still around?',
    'question'
  )
   }
  
  
  return (
    <div className="h-full w-full">
      <section className=" container h-full font-roboto bg-[--base-color]">
      <div className=" px-7 flex justify-between items-center">
            <div className=" pt-4">
            <h1 className=" text-xl text-white">User</h1>
            <div className=" pt-3">
              <Breadcrumbs>{items}</Breadcrumbs>
            </div>
            </div>
            <div className=" ">
                <Link to={'/createUser'} className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '>Create User</Link>
            </div>
          </div>

        <div className=" px-4 flex flex-col pt-6">
          <div className="-px-4 -py-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden borderborder-gray-700 md:rounded-lg">
              <table className=" w-full text-gray-200 border border-gray-700 text-sm ">
        <thead>
          <tr className=" border-b border-b-gray-700">
            <th className=" py-4 text-start px-1 uppercase font-medium">No</th>
            <th className=" py-4 text-start px-1 uppercase font-medium">Name</th>
            <th className=" py-4 text-start px-1 uppercase font-medium">
              Position
            </th>
            <th className=" py-4 text-start px-1 uppercase font-medium">
              Email
            </th>
            <th className=" py-4 pe-4 text-start px-1 uppercase font-medium">
              Created At
            </th>
            <th className=" py-4 pe-4 text-start px-1 uppercase font-medium"></th>
          </tr>
        </thead>
        <tbody className=" text-gray-100">
          {data?.map((user, index) => {
            return (
              <tr className=" border-b border-b-gray-700 ">
                <td className="px-1 text-start py-4">{index}</td>
                <td
                  className="px-1 text-start py-4 cursor-pointer"
                >
                  {user?.name}
                </td>
                <td className="px-1 text-start py-4">{user?.role}</td>
                <td className="px-1 py-4 text-start">{user?.email}</td>
                <td className="px-1 pe-4 py-4 text-start">{user?.created_at}</td>

                <td>
                  <div className="w-[60px] mx-auto flex justify-end items-center gap-4 z-20">
                    <button
                      onClick={handleBanned}
                      className={`text-[--secondary-color] text-xl basis-1/2 hover:text-red-500 `}
                    >
                      <AiOutlineMinus/>
                    </button>
                    <button
                      
                      className={`text-[--secondary-color] text-xl basis-1/2 hover:text-[#8AB4F8] `}
                    >
                      <MdOutlineEdit/>
                    </button>
                    <button
                      
                      className={`text-[--secondary-color] text-xl basis-1/2 hover:text-[#8AB4F8] `}
                    >
                     <AiOutlineArrowRight/>
                    </button>
                
                  </div>
                </td>
              </tr>
            );
          })} 
        </tbody>
      </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserOverview;

