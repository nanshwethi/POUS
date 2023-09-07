import React, { useEffect, useState } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import {FiUploadCloud} from 'react-icons/fi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useGetSingleBrandQuery, useUpdateBrandMutation } from '../redux/api/brandApi';
import { addOldData, addUpdateAgent, addUpdateCompany, addUpdateData, addUpdateDesc, addUpdateName, addUpdatePhone } from '../redux/services/brandSlice';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const BrandEdit = () => {

    const nav = useNavigate()
    const {id} = useParams()
    const token = Cookies.get('token')
    const forBrand = {id,token}
    const {currentData} = useGetSingleBrandQuery(forBrand)
    const [updateBrand] = useUpdateBrandMutation()
    const oldData = useSelector((state)=>state.brandSlice.oldData)
    const updateData = useSelector((state)=>state.brandSlice.updateData)
    const n = document.querySelector('.name')
    console.dir(n);
    const dispatch = useDispatch()
    console.log(currentData?.data);
    console.log(oldData);
    console.log(updateData);

    const MySwal = withReactContent(Swal)

    useEffect(()=>{
        dispatch(addOldData(currentData?.data))
        dispatch(addUpdateName(currentData?.data.name))
        dispatch(addUpdateCompany(currentData?.data.company))
        dispatch(addUpdateAgent(currentData?.data.agent))
        dispatch(addUpdateDesc(currentData?.data.description))
        dispatch(addUpdatePhone(currentData?.data.phone_no))
    },[currentData])

    
    const update = async()=>{
        console.log(id)
        const d = {token,id,content : updateData}
        const data = await updateBrand(d)
        console.log(data);
        // dispatch(addUpdateData(data?.data?.data))
        console.log(updateData);
        if (data?.data) {
            const Toast = MySwal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                padding : '10px 10px 10px',
                color : '#ffffff',
                background : '#393d3d',
                timer: 3000,
                customClass : {
                    timerProgressBar : 'progress-bar'
                },
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'successfully updated your brand'
              })
        }
    }

    const save = (e)=>{

        MySwal.fire({
            title: <p>Hello World</p>,
            didOpen: () => {
                // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                MySwal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    width : '400px',
                    padding : '0px 10px 20px',
                    color : '#ffffff',
                    background : '#393d3d',
                    iconColor : '5dfc68',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Save'
                }).then((result) => {
                    if (result.isConfirmed) {
                        update()
                    }
                })
            },
            })
        
    }

  return (
    <div className=' flex-1 bg-[#202124] p-5 px-6 flex flex-col relative '>
        
        <div className=''>
            <div className=' flex justify-between items-center'>
                <div>
                    <h1 className=' text-2xl font-medium text-white'>Brand</h1>
                    <p className=' text-gray-400 mt-1 font-medium text-xs'>Inventory / products / edit Brand</p>
                </div>
                <div>
                    <Link to={'/brand'}>
                    <button className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '>Brand</button>
                    </Link>
                </div>
            </div>
        </div>
        {
            oldData ? <div className=' mt-12'>
                <div className="p-6 w-[60%] bg-[#171717] rounded  ">
                    <div className=' flex py-4 text-gray-200 items-center font-medium'>
                        <div className=' w-48 font-semibold text-gray-400'>Name</div>
                        <div className=' flex-1'>
                            <Tooltip title="minimum 3 characters required " arrow={true} disableHoverListener={true} disableInteractive={true}>
                                <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3 name' minLength={3}  placeholder={`${oldData.name}`} onChange={(e)=>dispatch(addUpdateName(e.target.value))}  />
                            </Tooltip>
                        </div>
                        </div>
                    <div className=' flex py-4 text-gray-200 items-center font-medium'>
                        <div className=' w-48 font-semibold text-gray-400'>Company</div> 
                        <div className=' flex-1'>
                        <Tooltip title="minimum 3 characters required " arrow={true} disableHoverListener={true} disableInteractive={true}>
                            <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3' placeholder={`${oldData.company}`}  onChange={(e)=>dispatch(addUpdateCompany(e.target.value))}/>
                        </Tooltip>
                        </div>
                    </div>
                    <div className=' flex py-4 text-gray-200 items-start font-medium'>
                        <div className=' w-48 font-semibold text-gray-400'>Agent</div> 
                        <div className=' flex-1'>
                            <input type='text' className=' bg-[#202124] border-2 resize-none border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3 ' placeholder={`${oldData.agent}`} onChange={(e)=>dispatch(addUpdateAgent(e.target.value))} />
                        </div>
                    </div>
                    <div className=' flex py-4 text-gray-200 items-start font-medium'>
                        <div className=' w-48 font-semibold text-gray-400'>Phone</div> 
                        <div className=' flex-1'>
                            <input type='number' className=' bg-[#202124] border-2 resize-none border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3 ' placeholder={`${oldData.phone_no}`} onChange={(e)=>dispatch(addUpdatePhone(e.target.value))} />
                        </div>
                    </div>
                    <div className=' flex py-4 text-gray-200 items-start font-medium'>
                        <div className=' w-48 font-semibold text-gray-400'>Description</div> 
                        <div className=' flex-1'>
                            <textarea className=' bg-[#202124] border-2 resize-none border-[#313337] rounded h-[150px] text-slate-400 outline-none w-full py-2 px-3 ' placeholder={`${oldData.description}`} onChange={(e)=>dispatch(addUpdateDesc(e.target.value))} />
                        </div>
                    </div>
                    <div className=' mt-[50px] text-end'>
                        <button className=' px-6 py-2 text-gray-50 bg-[#273c5d] font-semibold rounded' onClick={(e)=> save(e)}>Save</button>
                    </div>
                </div>
            
        </div>:null
        }
        
    </div>
  )
}

export default BrandEdit