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
// import Swal from 'sweetalert2/dist/sweetalert2.js';
// import '@sweetalert2/theme-dark/dark.scss';

const UserOverview = () => {

  const token=Cookies.get("token");
  
    const { data } =  useGetUserQuery(token);
    // console.log(data?.data);
    const user1=data?.data[0];
    const user2=data?.data[1];
    
 
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
    <div>
      <section className=" container mx-8 font-roboto bg-[--base-color] w-[900px] min-h-screen">
      <div className=" mx-7 flex justify-between items-center">
            <div className=" mt-4">
            <h1 className=" text-xl text-white">User</h1>
            <div className=" mt-3">
              <Breadcrumbs>{items}</Breadcrumbs>
            </div>
            </div>
            <div className=" ">
                <Link to={'/createUser'} className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '>Create User</Link>
            </div>
          </div>

        <div className=" mx-4 flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden borderborder-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className=" bg-gray-800">
                    <tr>
                    <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        No
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  text-gray-400"
                      >
                        Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        Position
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        Email
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        Created At
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-400"
                      >
                        
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" text-start divide-y divide-gray-700 bg-gray-900">
                  <tr className="">
                      <td className="px-4 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {user1?.id}
                      </td>
                      <td className=" text-start px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>{user1?.name}</h1>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>{user1?.gender}</h1>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>{user1?.email}</h1>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>{user1?.created_at}</h1>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                          <button className="text-lg bg-[--border-color] rounded-full w-7 h-7 flex justify-center items-center transition-colors duration-200 text-gray-300 hover:text-red-500 focus:outline-none" onClick={handleBanned} >
                            <AiOutlineMinus/>
                          </button>

                          <button className="text-lg bg-[--border-color] rounded-full w-7 h-7 flex justify-center items-center transition-colors duration-200 text-gray-300 hover:text-red-500 focus:outline-none" >
                          <MdOutlineEdit/>
                          </button>
                          <button className="text-lg bg-[--border-color] rounded-full w-7 h-7 flex justify-center items-center transition-colors duration-200 text-gray-300 hover:text-red-500 focus:outline-none">
                          <AiOutlineArrowRight/>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="">
                      <td className="px-4 py-4 text-sm font-medium text-white whitespace-nowrap">
                        {user2?.id}
                      </td>
                      <td className=" text-start px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>{user2?.name}</h1>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>{user2?.gender}</h1>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>{user2?.email}</h1>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>{user2?.created_at}</h1>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                          <button className="text-lg bg-[--border-color] rounded-full w-7 h-7 flex justify-center items-center transition-colors duration-200 text-gray-300 hover:text-red-500 focus:outline-none" onClick={handleBanned}>
                            <AiOutlineMinus/>
                          </button>

                          <button className="text-lg bg-[--border-color] rounded-full w-7 h-7 flex justify-center items-center transition-colors duration-200 text-gray-300 hover:text-red-500 focus:outline-none">
                          <MdOutlineEdit/>
                          </button>
                          <button className="text-lg bg-[--border-color] rounded-full w-7 h-7 flex justify-center items-center transition-colors duration-200 text-gray-300 hover:text-red-500 focus:outline-none">
                          <AiOutlineArrowRight/>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="">
                      <td className="px-4 py-4 text-sm font-medium text-white whitespace-nowrap">
                        1
                      </td>
                      <td className=" text-start px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>Snow</h1>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>Admin</h1>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>snow99@gmail.com</h1>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>12/3/1998</h1>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                          <button className="text-lg bg-[--border-color] rounded-full w-7 h-7 flex justify-center items-center transition-colors duration-200 text-gray-300 hover:text-red-500 focus:outline-none" onClick={handleBanned}>
                            <AiOutlineMinus/>
                          </button>

                          <button className="text-lg bg-[--border-color] rounded-full w-7 h-7 flex justify-center items-center transition-colors duration-200 text-gray-300 hover:text-red-500 focus:outline-none">
                          <MdOutlineEdit/>
                          </button>
                          <button className="text-lg bg-[--border-color] rounded-full w-7 h-7 flex justify-center items-center transition-colors duration-200 text-gray-300 hover:text-red-500 focus:outline-none">
                          <AiOutlineArrowRight/>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="">
                      <td className="px-4 py-4 text-sm font-medium text-white whitespace-nowrap">
                        1
                      </td>
                      <td className=" text-start px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>Snow</h1>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>Admin</h1>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>snow99@gmail.com</h1>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>12/3/1998</h1>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                          <button className="text-lg bg-[--border-color] rounded-full w-7 h-7 flex justify-center items-center transition-colors duration-200 text-gray-300 hover:text-red-500 focus:outline-none" onClick={handleBanned}>
                            <AiOutlineMinus/>
                          </button>

                          <button className="text-lg bg-[--border-color] rounded-full w-7 h-7 flex justify-center items-center transition-colors duration-200 text-gray-300 hover:text-red-500 focus:outline-none">
                          <MdOutlineEdit/>
                          </button>
                          <button className="text-lg bg-[--border-color] rounded-full w-7 h-7 flex justify-center items-center transition-colors duration-200 text-gray-300 hover:text-red-500 focus:outline-none">
                          <AiOutlineArrowRight/>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="">
                      <td className="px-4 py-4 text-sm font-medium text-white whitespace-nowrap">
                        1
                      </td>
                      <td className=" text-start px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>Snow</h1>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>Admin</h1>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>snow99@gmail.com</h1>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">
                        <h1>12/3/1998</h1>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                          <button className="text-lg bg-[--border-color] rounded-full w-7 h-7 flex justify-center items-center transition-colors duration-200 text-gray-300 hover:text-red-500 focus:outline-none" onClick={handleBanned}>
                            <AiOutlineMinus/>
                          </button>

                          <button className="text-lg bg-[--border-color] rounded-full w-7 h-7 flex justify-center items-center transition-colors duration-200 text-gray-300 hover:text-red-500 focus:outline-none">
                          <MdOutlineEdit/>
                          </button>
                          <button className="text-lg bg-[--border-color] rounded-full w-7 h-7 flex justify-center items-center transition-colors duration-200 text-gray-300 hover:text-red-500 focus:outline-none">
                          <AiOutlineArrowRight/>
                          </button>
                        </div>
                      </td>
                    </tr>
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

