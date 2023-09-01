import { Anchor , Breadcrumbs } from '@mantine/core';
import React from 'react'
import { BiCopy } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const BannedUser = () => {
	const items = [
		{ title: "User", href: "/userOverview" },
		{ title: "CreateUser", href: "/createUser" },
	  ].map((item, index) => (
		<Anchor className=" " href={item.href} key={index}>
		  {item.title}
		</Anchor>
	  )); 

	  const handleRestore=()=>{
		const MySwal = withReactContent(Swal)
	  
	  MySwal.fire({
		title: <p>Completed</p>,
		icon: 'success',
		text: 'SuccessFul',
		footer: '<a href="">Why do I have this issue?</a>',
    background: '	#000',
	  })
	  }
  return (
	<div className="h-full w-full">
      <section className="container h-full px-4 font-roboto bg-[--base-color] text-[--secondary-color] min-h-screen">
      <div className="mx-6 flex justify-between items-center">
            <div className=" mt-4">
            <h1 className=" text-xl text-white">User</h1>
            <div className=" mt-3">
              <Breadcrumbs>{items}</Breadcrumbs>
            </div>
            </div>
            <div className=" ">
                <Link to={'/create-user'} className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '> Create User</Link>
            </div>
          </div>

          <div className=" mx-6 flex justify-between items-center">
            <div className="">
            <h1 className=' text-xl font-semibold'>Banned User Overview</h1>
            <input type="text" placeholder='Search here' className=' mt-4 bg-[--border-color] px-2 py-1 rounded-md' />
            </div>
          </div>

        <div className=" mx-4 flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                <td className="px-1 text-center  py-4"></td>
                <td
                  // onClick={() => imgModalHandler(index)}
                  className="px-1 text-end py-4 cursor-pointer"
                >
                
                </td>
                <td className="px-1 text-end py-4"></td>
                <td className="px-1 py-4 text-end"></td>
                <td className="px-1 pe-4 py-4 text-end"></td>

                <td>
                  <div className="w-[60px] mx-auto flex justify-end items-center gap-2 z-20">
                    <button
                      // onClick={() => deletePhotoHandler(photo?.id)}
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
  )
}

export default BannedUser