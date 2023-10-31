import React, { useEffect, useState } from 'react'
import {AiOutlinePlus,AiOutlineArrowRight,AiFillDelete} from 'react-icons/ai'
import {BiGridAlt} from 'react-icons/bi'
import {BsListUl,BsSearch,BsTrash3} from 'react-icons/bs'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import {TfiClose} from 'react-icons/tfi'
import {FaAngleDown, FaAngleRight} from 'react-icons/fa'
import { Select } from "@mantine/core";
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loading from './Loading'
import { useDeleteUserMutation, useGetUserQuery } from '../redux/api/userApi'

const UserOverview = () => {

    const token = Cookies.get('token')
    const {currentData,isFetching} = useGetUserQuery(token)
    const [deleteUser] = useDeleteUserMutation()
    const oldData = useSelector((state)=>state.productSlice.oldData)
    const updatedData = useSelector((state)=>state.productSlice.data)
    const [user,setUser] = useState()
    const [sort,setSort] = useState('first')
    const nav = useNavigate()
    console.log(currentData)
    console.log(updatedData)
    console.log(oldData)

    useEffect(()=>{
        setUser(currentData?.users)
        console.log(user)
        
    },[currentData])

    const MySwal = withReactContent(Swal)
   
    const deleteP = async(id)=>{
        console.log(id)
        const d = {token,id}
        const data = await deleteUser(d)
        console.log(data);
        if (data.data == null) {
            MySwal.fire({
                text : 'Successfully Deleted!',
                width : '300px',
                padding : '10px 10px 10px',
                color : '#ffffff',
                background : '#393d3d',
                iconColor : '5dfc68',
            }
                
            )
        }
    }

    const del = (id)=>{
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            background : '#393d3d',
            color : '#ffffff',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteP(id)
            }
        })

    }

    console.log(sort);

  return (
    <div className=' flex-1 bg-[#202124] p-5 px-6 min-h-[117vh] flex flex-col'>
        <div className=''>
            <div className=' flex justify-between items-center'>
                 <div>
                    <h1 className=' text-2xl font-medium text-white'>User</h1>
                    <p className=' text-gray-400 mt-1 font-medium text-xs'>User / Overview</p>
                </div> 
                 <div>
                    
                    <Link to={'/create-user'}>
                    <button className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '><AiOutlinePlus className=' inline'/> Create user</button>
                    </Link>
                </div> 
            </div>
            <div className=' mt-[40px]'>
                <p className=' text-gray-100 font-semibold text-xl'>User Overview</p>
                <div className=' flex justify-between items-center mt-3'>
                    <div className='border-gray-700 rounded border px-2 py-1'>
                        <BsSearch className=" inline text-gray-400 me-3"/>
                        <input type="text" placeholder='search' className=' w-[250px] outline-none bg-transparent text-gray-300 text-sm font-semibold' />
                    </div>
                    <div className=" flex items-baseline">
                            <p className=" text-sm text-gray-400 me-2 ">Sort : </p>
                            <Select
                            defaultValue= {sort}
                            className=" custom-select select-product"
                            style={{marginRight : '20px'}}
                            rightSection={
                                <FaAngleDown size="1rem" color="rgb(209 213 219)" />
                            }
                            rightSectionWidth={30}
                            unstyled
                            data={[
                                { value: "first", label: "first" },
                                { value: "last", label: "last" },
                            ]}
                            onChange={(value) => setSort(value)}
                            size="100px"
                            />
                        </div>
                    {/* <div className=' flex items-center '>
                        <div className=' flex items-center border border-gray-500 rounded border-collapse'>
                            <button className=' border-e border-gray-500 px-1' onClick={()=>changeListUi()}>
                            <BsListUl className={`inline  ${ui ? 'text-blue-400':' text-gray-400'}`}  />
                            </button>
                            <button className=' px-1' onClick={()=>changeGridUi()}>
                            <BiGridAlt className={`inline ${ui ? ' text-gray-400': 'text-blue-400'}`}/>
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
            
        </div>
        {   
            isFetching ? (<Loading/>):( <div>
                {
                    currentData? (<div className=' mt-[50px] selected'>
                      <table className=' w-full text-gray-300 border border-gray-700 text-sm '>
                        <thead>
                        <tr className=''>
                            <th className=' py-4 font-bold text-gray-50 border-b ps-6 text-start border-gray-600 px-1 uppercase '>Name</th>
                            <th className=' py-4 font-bold text-gray-50 border-b text-start border-gray-600 px-1 uppercase '>Position</th>
                            <th className=' py-4 font-bold text-gray-50 border-b text-center border-gray-600 px-1 uppercase '>Email</th>
                            <th className=' py-4 font-bold text-gray-50 border-b text-center border-gray-600 px-1 uppercase '>Created at</th>
                            <th className=' py-4 font-bold text-gray-50 border-b text-end border-gray-600 px-1 uppercase '></th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                sort == 'first' && user? [...currentData?.users].sort((a,b)=> b.name.localeCompare(a.name)).map((v)=>(<tr className=' border-b border-gray-700 ' key={v.id}>
                                    <td className='px-1 text-start py-4 ps-6' >{v.name}</td>
                                    <td className='px-1 text-start py-4' >{v.role}</td>
                                    <td className='px-1 py-4 text-center' >{v.email}</td>
                                    <td className='px-1 py-4 text-center' >{v.created_at.substr(0,10)}</td>
                                    <td className=' py-4 text-center'>
                                        <div className=' flex items-center justify-center gap-3'>
    
                                            <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=> del(v.id)} ><BsTrash3 className=' text-gray-200'/></button>
                                            
                                            <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=>{nav(`/profile-edit/${v.id}`)}}><MdOutlineModeEditOutline className=' text-gray-200'/></button>
                                            
                                            <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=>nav(`/product-detail/${v.id}`)}><AiOutlineArrowRight className=' text-gray-200'/></button>
                                            
                                        </div>
                                    </td>
                                </tr>)):[...currentData?.users].sort((a,b)=> a.name.localeCompare(b.name)).map((v)=>(<tr className=' border-b border-gray-700 ' key={v.id}>
                                    <td className='px-1 text-start py-4 ps-6' >{v.name}</td>
                                    <td className='px-1 text-start py-4' >{v.role}</td>
                                    <td className='px-1 py-4 text-center' >{v.email}</td>
                                    <td className='px-1 py-4 text-center' >{v.created_at.substr(0,10)}</td>
                                    <td className=' py-4 text-center'>
                                        <div className=' flex items-center justify-center gap-3'>
    
                                            <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=> del(v.id)} ><BsTrash3 className=' text-gray-200'/></button>
                                            
                                            <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=>{nav(`/profile-edit/${v.id}`)}}><MdOutlineModeEditOutline className=' text-gray-200'/></button>
                                            
                                            <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=>nav(`/product-detail/${v.id}`)}><AiOutlineArrowRight className=' text-gray-200'/></button>
                                            
                                        </div>
                                    </td>
                                </tr>))                       
                            }
                            
                        </tbody>
                      </table>
                    </div>
                ):<Loading/>
                }
                </div>
            )
            }
        {/* <div className=' mt-auto justify-end flex '>
            <div className=' text-gray-500 border flex items-center border-gray-700 px-4 mt-6'>
            <button
            className={` px-3 py-2 ${
              unit == 1 ? "text-gray-50" : "text-gray-500"
            }`}
            onClick={() => setUnit(1)}>
            1
          </button>
          <button
            className={` px-3 py-2 ${
              unit == 2 ? "text-gray-50" : "text-gray-500"
            }`}
            onClick={() => setUnit(2)}>
            2
          </button>
          <button
            className={` px-3 py-2 ${
              unit == 4 ? "text-gray-50" : "text-gray-500"
            }`}
            onClick={() => setUnit(3)}>
            <FaAngleRight />
          </button>
            </div>
        </div> */}
        
    </div>
  )
}

export default UserOverview