import React, { useEffect, useState } from 'react'
import {BsListUl,BsSearch} from 'react-icons/bs'
import {TfiClose} from 'react-icons/tfi'
import {FaAngleRight,FaAngleDown} from 'react-icons/fa'
import {AiOutlinePlus} from 'react-icons/ai'
import { Select } from '@mantine/core';
// import { useCreateBrandMutation, useDeleteBrandMutation, useGetBrandsQuery } from '../redux/api/brandApi'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { addAgent, addCompany, addDesc, addName, addPhone, addPhoto } from '../redux/services/brandSlice'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {BsTrash3} from 'react-icons/bs'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';
import { Modal, Group, Button } from '@mantine/core';
import { modals } from '@mantine/modals'
import { useDisclosure } from '@mantine/hooks';
import {FiUploadCloud} from 'react-icons/fi'
import { useGetPhotoQuery } from '../redux/api/mediaApi'
import Loading from './Loading'
import { useCreateBrandMutation, useDeleteBrandMutation, useGetBrandQuery } from '../redux/api/branApi'

const Brand = () => {
    const token = Cookies.get('token')
    const uploadImg = document.querySelector('.uploadImgInput')
    console.dir(uploadImg)
    const [offcanvas,setOffcanvas] = useState(false);
    const [opened, { open, close }] = useDisclosure(false);
    const [p,setP] = useState(1)
    const forBrand = {token,p}
    const {currentData} = useGetBrandQuery(forBrand)
    const getPhoto = useGetPhotoQuery(token)
    const [create] = useCreateBrandMutation()
    const [deleteBrand] = useDeleteBrandMutation()
    const [upload,setUpload] = useState(true)
    const [selectfoto,setSelectfoto] = useState()
    const dispatch = useDispatch()
    const nav = useNavigate()
    const content = useSelector((state)=> state.brandSlice.data)
    console.log(currentData);
    console.log(content);
    const MySwal = withReactContent(Swal)

    const createNew = async()=>{
        const d = {token,content}
        // console.log(data)
        // const {data} = await create(d)
        const data = await create(d)
        console.log(data);
        if(data?.data){

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
                title: 'successfully created a new brand'
              })

            // MySwal.fire({
            //     title: <p>Hello World</p>,
            //     didOpen: () => {
            //         // `MySwal` is a subclass of `Swal` with all the same instance & static methods
            //         MySwal.fire(
            //             {
            //                 icon: 'success',
            //                 title: 'Successfully Created New Brand',
            //                 width : '400px',
            //                 padding : '0px 10px 20px',
            //                 color : '#ffffff',
            //                 background : '#393d3d',
            //                 iconColor : '5dfc68',
            //                 showConfirmButton : false,
            //                 buttonsStyling : false,
            //             }
            //         )
            //     },
            //     })
        }
    }

    const save=()=>{

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
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
        
                        createNew()
                        
                    } else if (result.isDenied) {
                      Swal.fire('Changes are not saved', '', 'info')
                    }
                })
            },
            })

        
        
    }

    const deleteB = async(id)=>{
        console.log(id)
        const d = {token,id}
        const data = await deleteBrand(d)
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
                
            ).then((result)=>{
                if(result.isConfirmed){
                    window.location.reload()
                }
            })
        }
    }

    const del = (id)=>{

        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            width : '400px',
            padding : '0px 10px 20px',
            color : '#ffffff',
            background : '#393d3d',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteB(id)
                
            }
        })

    }


    const selectPhoto = ()=>{
        setUpload(false)
        dispatch(addPhoto(selectfoto.url))
        console.log('mm');
        modals.close('modal-brand')
    }

    console.log(getPhoto)

  return (
    <div className=' flex-1 bg-[#202124] h-screen relative overflow-x-hidden'>
        {/* modal */}
        <Modal opened={opened} className=' myModal-inner' onClose={close} id='modal-brand' title={'Select an image '} size="xl" >
            <div className="w-full h-full flex flex-col justify-center items-center gap-10 p-5 bg-gray-900">
                <div className=" flex w-full flex-wrap gap-5 justify-start  ">
                    {/* Upload img start */}
                    {/* <div className=' border border-dashed w-[160px] h-[150px] relative border-gray-200 rounded cursor-pointer bg-gray-700'>
                        <div className=' text-gray-200 text-lg text-center my-[40px]'>
                            <FiUploadCloud className=' inline text-4xl'/>
                            <p className=' mt-2'>Upload Image</p>
                        </div>
                        <input type='file' className=' absolute w-full h-full opacity-0 top-0 left-0 ' />
                            {/* Upload img end */}
                    {/* </div> */}
                    {
                        getPhoto?.currentData?(getPhoto.currentData.data.map((i)=>(<div key={i.id}>
                            <div className={`w-[160px] h-[150px] ${ selectfoto?.id == i.id ? 'border border-gray-700 p-1' : null} rounded-lg overflow-hidden`} onClick={()=> setSelectfoto(i)}>
                                <img src={`${i.url}`} className="w-full h-full object-cover rounded-lg" alt="" />
                            </div>
                            
                        </div>))
                        ):(
                            <div className=' flex w-full min-h-[150px] justify-center items-center'>
                                <div className=' relative'>
                                    <div className=' w-[50px] h-[50px] rounded-full z-0  bg-[#4381b4] loading'></div>
                                    <div className=' w-[45px] h-[45px] absolute right-[0.15rem] top-[0.173rem] bg-[#202124] rounded-full z-50'>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <Group className=' w-full'>
                    <Button onClick={close} unstyled className=' ms-auto'>
                        <div className=" px-4 py-2 font-semibold text-[16px] myBlueBtn ml-auto" onClick={()=>selectPhoto()}>
                            insert
                        </div>
                    </Button>
                </Group>
            </div>
        </Modal>
        <div className=' p-5 px-6 flex flex-col justify-between h-screen '>
            <div className=' flex-1 '>
                <div className=' flex justify-between items-center'>
                    <div>
                        <h1 className=' text-2xl font-medium text-white'>Manage Brand</h1>
                        <p className=' text-gray-400 mt-1 font-medium text-xs'>Inventory / Manage Brand</p>
                    </div>
                    <div>
                        <button className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium ' onClick={()=>setOffcanvas(!offcanvas)}> <AiOutlinePlus className=' inline'/> Add Brand</button>
                    </div>
                </div>
                <div className=' mt-[40px] flex justify-between items-center'>
                    <div>
                        <p className=' text-gray-100 font-semibold text-xl'>Products Overview</p>
                        <div className=' mt-3'>
                            <div className='border-gray-700 rounded border inline px-2 py-1'>
                                <BsSearch className=" inline text-gray-400 me-3"/>
                                <input type="text" placeholder='search' className=' w-[250px] outline-none bg-transparent text-gray-300 text-sm font-semibold' onChange={(e)=>console.log(e)} />
                            </div>
                        </div>
                    </div>
                    <div className=' flex items-baseline'>
                        <p className=' text-sm text-gray-400 me-2'>Sort : </p>
                        <Select
                            defaultValue={'last'}
                            className=' custom-select'
                            rightSection={<FaAngleDown size="1rem" color='rgb(209 213 219)'/>}
                            rightSectionWidth={30}
                            unstyled
                            data={[
                                { value: 'last', label: 'last' },
                                { value: 'first', label: 'first' },
                                
                            ]}
                        />
                    </div>
                </div>
                {/* table */}
                {
                    currentData?(
                        <div className=' mt-[50px] selected'>
                    <table className=' w-full text-gray-200 border border-gray-700 text-sm '>
                        <thead>
                        <tr className=' border-b border-b-gray-700'>
                            <th className=' py-4 text-start px-1 ps-6 uppercase font-medium'>Brand Name</th>
                            <th className=' py-4 text-start px-1 uppercase font-medium'>Company Name</th>
                            <th className=' py-4  px-1 uppercase font-medium'>Agent</th>
                            <th className=' py-4 pe-4 text-end px-1 uppercase font-medium'>Phone No</th>
                            <th className=' py-4 pe-4 text-end px-1 uppercase font-medium'>
                            
                            </th>
                        </tr>
                        </thead>
                        <tbody className=' text-gray-100'>
                            {
                                currentData?.data?.map((v)=>(<tr className=' border-b border-b-gray-700 ' key={v.id}>
                                <td className='px-1 text-start py-4 ps-6' >{v.name}</td>
                                <td className='px-1 text-start py-4' >{v.company}</td>
                                <td className='px-1 py-4 text-center' >{v.agent}</td>
                                <td className='px-1 pe-4 py-4 text-end' >{v.phone_no}</td>
                                <td className='px-1 pe-4 py-4 text-center' >
                                    <div className=' flex items-center justify-center gap-3'>
                                        <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=> del(v.id)} ><BsTrash3 className=' text-gray-200'/></button>
                                        <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=>nav(`/brand-edit/${v.id}`)}><MdOutlineModeEditOutline className=' text-gray-200'/></button>
                                    </div>
                                </td>
                            </tr>))
                            }
                        </tbody>
                    </table>
                </div>
                    ):(<Loading/>)
                } 
            </div>
            
            {/* pagination */}
            <div className=' mt-auto justify-end flex '>
                <div className=' text-gray-500 border flex items-center border-gray-700 px-4 mt-2'>
                    <button className={`px-3 py-2 ${p == 1 ? 'text-gray-50': null}`} onClick={()=>setP(1)}>1</button>
                    <button className={`px-3 py-2 ${p == 2 ? 'text-gray-50': null}`} onClick={()=>setP(2)}>2</button>
                    <button className={`px-3 py-2 ${p == 3 ? 'text-gray-50': null}`} onClick={()=>setP(3)}>3</button>
                    {/* <button className=" px-3 py-2">4</button>
                    <button className=" px-3 py-2" onClick={()=>setP(1)}><FaAngleRight/></button> */}
                </div>
            </div>
        </div>
        {/* offcanvas */}
        <div className={` custom-offcanvas ${offcanvas && 'openAni'} bg-[#26272c] min-h-screen flex flex-col p-8`}>
            <div className=' '>
                
                <div className=' flex justify-between items-center'>
                    <p className=' text-gray-200 font-bold text-xl'>Add New Brand</p>
                    <button className=' text-gray-50' onClick={()=> setOffcanvas(!offcanvas)}><TfiClose/></button>
                </div>
                <Group position="center" unstyled className=' myBrandModal h-[105px] mt-10'>
                    <Button onClick={open}>
                        <div className=' border border-dashed w-full h-[100px] relative border-gray-200 rounded cursor-pointer bg-gray-700'>
                            <div className={`text-gray-200 text-lg text-center py-8 ${ upload ? 'block':'hidden' }`}>
                                <AiOutlinePlus className=' inline'/> <span>Add Image</span>
                            </div>
                            <img src={selectfoto?.url} className={`w-full h-full object-cover ${ upload ? 'hidden': 'block'}`} alt="" />
                            {/* <input type='file' className=' absolute w-full h-full opacity-0 top-0 left-0 uploadImgInput hidden ' /> */}
                        </div>
                    </Button>
                </Group>
                
                <div className=' pt-7'>
                    <div>
                        <p className=' text-gray-300 mb-2'>Brand Name</p>
                        <Tooltip title="minimum 3 characters required " arrow={true} disableHoverListener={true} disableInteractive={true}>
                        <input type="text" name="" id="" className=' outline-none p-2 border bg-transparent text-gray-200 rounded border-gray-700' onChange={(e)=>dispatch(addName(e.target.value))} />

                        </Tooltip>

                    </div>
                    <div className=' my-8'>
                        <p className=' text-gray-300 mb-2'>Company Name</p>
                        <Tooltip title="minimum 3 characters required " arrow={true} disableHoverListener={true} disableInteractive={true}>
                            <input type="text" name="" id="" className=' outline-none p-2 border bg-transparent text-gray-200 rounded border-gray-700' onChange={(e)=>dispatch(addCompany(e.target.value))} />

                        </Tooltip>
                    </div>
                    <div>
                        <p className=' text-gray-300 mb-2'>Agent</p>
                        <Tooltip title="minimum 3 characters required " arrow={true} disableHoverListener={true} disableInteractive={true}>
                            <input type="text" name="" id="" className=' outline-none p-2 border bg-transparent text-gray-200 rounded border-gray-700' onChange={(e)=>dispatch(addAgent(e.target.value))} />
                        </Tooltip>
                    </div>
                    <div className=' my-8'>
                        <p className=' text-gray-300 mb-2'>Phone</p>
                        <Tooltip title="minimum 3 characters required " arrow={true} disableHoverListener={true} disableInteractive={true}>
                        <input type="number" name="" id="" className=' outline-none p-2 border bg-transparent text-gray-200 rounded border-gray-700' onChange={(e)=>dispatch(addPhone(e.target.valueAsNumber))} />
                        </Tooltip>
                    </div>
                    <div className=''>
                        <p className=' text-gray-300 mb-2'>Description</p>
                        <textarea className=' outline-none text-gray-200 h-[130px] resize-none p-2 border bg-transparent rounded border-gray-700' onChange={(e)=>dispatch(addDesc(e.target.value))}/>
                    </div>
                </div>
            </div>
            <div className=' mt-10 '>
                <button className=' bg-slate-400 block w-full text-center py-2  text-lg text-gray-900 font-extrabold rounded' onClick={()=>save()}>Save</button>
            </div>
        </div>
        
    </div>
  )
}

export default Brand