import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import {FiUploadCloud} from 'react-icons/fi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useGetSingleProductQuery, useUpdateProductMutation } from '../redux/api/productApi';
import { useDispatch, useSelector } from 'react-redux';
import { addOldData, updateActualPrice, updateBrandId, updateMoreInfo, updateName, updateSalePrice, updateUnit, updateStock, updatePhoto } from '../redux/services/productSlice';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useGetPhotoQuery } from '../redux/api/mediaApi';
import Loading from './Loading';


const ProductEdit = () => {

    const token = Cookies.get('token')
    const [active,setActive] = useState('one')
    const {id} = useParams()
    const [ui,setUi] = useState(true)
    const [opened, { open, close }] = useDisclosure(false);
    const data = {token,id}
    const {currentData} = useGetSingleProductQuery(data)
    const getPhoto = useGetPhotoQuery(token)
    console.log(currentData)
    const [success,setSuccess] = useState(false)
    const [selectfoto,setSelectfoto] = useState()
    const dispatch = useDispatch()
    const nav = useNavigate()
    const content = useSelector((state)=>state.productSlice.data)
    const oldData = useSelector((state)=>state.productSlice.oldData)
    console.log(content)
    console.log(oldData)
    console.log(getPhoto)
    const [update] = useUpdateProductMutation()

    const MySwal = withReactContent(Swal)

    useEffect(()=>{
        dispatch(addOldData(currentData?.data))
        dispatch(updateName(currentData?.data.name))
        dispatch(updateBrandId(6))
        dispatch(updateStock(currentData?.data.total_stock))
        dispatch(updateSalePrice(currentData?.data.sale_price))
        dispatch(updateActualPrice(currentData?.data.actual_price))
        dispatch(updateMoreInfo(currentData?.data.more_information))
        dispatch(updateUnit(currentData?.data.unit))
        
    },[currentData])
   
    const submit = async()=>{
        const d = {content,id,token}
        const dt = await update(d)
        console.log(dt);
        console.log(d);
        dispatch(addOldData(dt?.data?.data))
        console.log(oldData);
        if( dt?.data){

            MySwal.fire({
            didOpen: () => {
                // `MySwal` is a subclass of `Swal` with all the same instance & static methods
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
                    title: ' updated product'
                  })
            },
            })
           
        }
            
    }

    const selectPhoto = ()=>{
        dispatch(updatePhoto(selectfoto.url))
    }

    const selectFromLocal = (e)=>{
        console.dir(e.target)
        dispatch(updatePhoto(e.target.value))
    }

  return (
    <div className=' flex-1 bg-[#202124] p-5 px-6 h-pEdit flex flex-col relative '>
        
        <Modal opened={opened} className=' myModal-inner' onClose={close} id='modal-brand' title={'Select an image '}  size="xl" >
            <div className="w-full h-full flex flex-col justify-center items-center gap-10 p-5 bg-gray-900">
                <div className=" flex flex-wrap w-full gap-5 justify-start items-center ">
                    {/* Upload img start */}
                    {/* <div className=' border border-dashed w-[160px] h-[150px] relative border-gray-200 rounded cursor-pointer bg-gray-700'>
                        <div className=' text-gray-200 text-lg text-center my-[40px]'>
                            <FiUploadCloud className=' inline text-4xl'/>
                            <p className=' mt-2'>Upload Image</p>
                        </div>
                        <input type='file' className=' absolute w-full h-full opacity-0 top-0 left-0 ' onChange={(e)=>selectFromLocal(e)} />
                            Upload img end
                    </div> */}
                    {
                        getPhoto?.currentData?(getPhoto.currentData.data.map((i)=>(<div key={i.id}>
                            <div className={`w-[160px] h-[150px] ${ selectfoto?.id == i.id ? 'border border-gray-700 p-1' : null} rounded-lg overflow-hidden`} onClick={()=> setSelectfoto(i)}>
                                <img src={`${i.url}`} className="w-full h-full object-cover object-center rounded-lg" alt="" />
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
        <div className=''>
            <div className=' flex justify-between items-center'>
                <div>
                    <h1 className=' text-2xl font-medium text-white'>Products</h1>
                    <p className=' text-gray-400 mt-1 font-medium text-xs'>Inventory / products / edit product</p>
                </div>
                <div>
                    <Link to={'/product'}>
                    <button className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '>Product list</button>
                    </Link>
                </div>
            </div>
        </div>
        {
            oldData ? <div className=' mt-12 flex h-[500px]'>
            {
                active == 'one' ?(<div className="p-6 w-[60%] bg-[#171717] rounded h-[500px]">
                <div className=' flex py-4 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Name</div>
                <div className=' flex-1'>
                    <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3' placeholder={`${oldData.name}`} onChange={(e)=>dispatch(updateName(e.target.value))}  />
                </div>
                </div>
                {/* <div className=' flex py-4 text-gray-200 items-center font-medium'>
                    <div className=' w-48 font-semibold text-gray-400'>Brand</div> 
                    <div className=' flex-1'>
                        <input type="number" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3' placeholder={`${oldData.sale_price}`}  onChange={(e)=>dispatch(updateSalePrice(e.target.value))}/>
                    </div>
                </div> */}
                <div className=' flex py-4 text-gray-200 items-center font-medium'>
                    <div className=' w-48 font-semibold text-gray-400'>Stock</div> 
                    <div className=' flex-1'>
                        <input type="number" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3' placeholder={`${oldData.total_stock}`}  onChange={(e)=>dispatch(updateStock(e.target.valueAsNumber))}/>
                    </div>
                </div>
                <div className=' flex py-4 text-gray-200 items-center font-medium'>
                    <div className=' w-48 font-semibold text-gray-400'>Unit</div> 
                    <div className=' flex-1'>
                        <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3' placeholder={`${oldData.unit}`}  onChange={(e)=>dispatch(updateUnit(e.target.value))}/>
                    </div>
                </div>
                <div className=' flex py-4 text-gray-200 items-start font-medium'>
                    <div className=' w-48 font-semibold text-gray-400'>More</div> 
                    <div className=' flex-1'>
                        <textarea className=' bg-[#202124] border-2 resize-none border-[#313337] rounded text-slate-400 outline-none w-full py-1 px-3 h-[150px]' placeholder={`${oldData.more_information}`} onChange={(e)=>dispatch(updateMoreInfo(e.target.value))} />

                    </div>
                </div>
                
            </div>):(
                <div className="p-6 w-[60%] bg-[#171717] h-[300px] rounded">
                    <div className=' flex py-4 text-gray-200 items-center font-medium'>
                    <div className=' w-48 font-semibold text-gray-400'>Actual Price</div> 
                    <div className=' flex-1'>
                        <input type="number" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3' placeholder={`${oldData.actual_price}`} onChange={(e)=>dispatch(updateActualPrice(e.target.value))}/>
                    </div>
                </div>
                <div className=' flex py-4 text-gray-200 items-start font-medium'>
                    <div className=' w-48 font-semibold text-gray-400'>Sale Price</div> 
                    <div className=' flex-1'>
                    <input type='number' className=' bg-[#202124] border-2  border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3 ' placeholder={`${oldData.sale_price}`} onChange={(e)=>dispatch(updateSalePrice(e.target.value))} />

                    </div>
                </div>
            </div>)
            }   
            <div className=' flex-1 flex flex-col ps-20'>
                <div>
                    <div className=' relative '>
                        <div className=' absolute pt-12'>
                            <button className={` rounded-full ${active == 'one' ? 'bg-blue-900 text-gray-300' :'bg-gray-950 text-blue-400'} py-4 px-6 me-4 text-lg font-semibold border border-blue-900`} onClick={(e)=> setActive('one')}>1</button>
                            <span className=' text-gray-300'>information</span>
                            <div className=' divider h-[100px] w-[1px] absolute left-[30px] top-[120px] border-e border-gray-700' ></div>
                        </div>
                        <div className=' absolute top-[240px]'>
                            <button className={`text-blue-400 rounded-full ${active == 'two' ? 'bg-blue-900 text-gray-300' :'bg-gray-950 text-blue-400'} py-4 px-6 me-4 text-lg font-semibold border border-blue-900`} onClick={(e)=> setActive('two')}>2</button>
                            <span className=' text-gray-300'>price</span>
                            <div className=' divider h-[100px] w-[1px] absolute left-[30px] top-[80px] border-e border-gray-700' ></div>
                        </div>
                        <div className=' absolute top-[440px] flex '>
                        <Group position="center" unstyled className=' myModal'>
                            <Button onClick={open}>
                            <span className={`text-blue-400 rounded-full ${active == 'three' ? 'bg-blue-900 text-gray-300' :'bg-gray-950 text-blue-400'} py-4 px-6 me-4 text-lg font-semibold border border-blue-900`} onClick={(e)=> setActive('three')}>3</span>
                            </Button>
                        </Group>
                        <span className=' text-gray-300'>photo</span>
                        </div>
                    </div>
                </div>
                <div className=' mt-auto mb-[-80px]'>
                    <button className=' px-4 py-2 text-gray-200 bg-blue-900 rounded ' onClick={()=>submit()}>Submit</button>
                </div>
            </div>
        </div>:<Loading/>
        }
        
    </div>
  )
}

export default ProductEdit