import { Anchor, Breadcrumbs } from "@mantine/core";
import React from "react";
import { AiOutlineArrowRight, AiOutlineEdit, AiOutlineMinus } from "react-icons/ai";
import { HiOutlineMinus } from "react-icons/hi";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import { Swal } from "sweetalert2";
import { useGetUserQuery } from "../redux/api/userApi";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiCopy } from "react-icons/bi";
// import Swal from 'sweetalert2/dist/sweetalert2.js';
// import '@sweetalert2/theme-dark/dark.scss';

const UserOverview = () => {

  const token=Cookies.get("token");
  
    // const { data } =  useGetUserQuery(token);
    // // console.log(data?.data);
    // const user1=data?.data[0];
    // const user2=data?.data[1];
    
 
  const items = [
    { title: "User", href: "/userOverview" },
    { title: "CreateUser", href: "/createUser" },
  ].map((item, index) => (
    <Anchor className=" " href={item.href} key={index}>
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
    <div className="min-h-screen w-full">
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
            <th className=" py-4 text-center px-1 uppercase font-medium">No</th>
            <th className=" py-4 text-end px-1 uppercase font-medium">Name</th>
            <th className=" py-4 text-end px-1 uppercase font-medium">
              Account
            </th>
            <th className=" py-4 text-end px-1 uppercase font-medium">
              Extension
            </th>
            <th className=" py-4 pe-4 text-end px-1 uppercase font-medium">
              File Size
            </th>
            <th className=" py-4 pe-4 text-end px-1 uppercase font-medium"></th>
          </tr>
        </thead>
        <tbody className=" text-gray-100">
          {/* {imgs?.map((photo, index) => {
            return ( */}
              <tr className=" border-b border-b-gray-700 ">
                <td className="px-1 text-center py-4"></td>
                <td
                  className="px-1 text-end py-4 cursor-pointer"
                >
                  {/* {photo?.name} */}
                </td>
                <td className="px-1 text-end py-4"></td>
                <td className="px-1 py-4 text-end"></td>
                <td className="px-1 pe-4 py-4 text-end"></td>

                <td>
                  <div className="w-[60px] mx-auto flex justify-end items-center gap-2 z-20">
                    <button
                      
                      className={`text-[--secondary-color] basis-1/2 hover:text-[#8AB4F8]px-1 `}
                    >
                      <RiDeleteBinLine size={"1.3rem"} />
                    </button>
                    <button
                      // onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}

                      // onClick={() => copyHandler(photo?.url)}
                      className={`text-[--secondary-color] basis-1/2 hover:text-[#8AB4F8]px-1 `}
                    >
                      <BiCopy size={"1.3rem"} />
                    </button>
                  </div>
                </td>
              </tr>
            {/* );
          })} */}
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

