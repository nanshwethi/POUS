import React, { useEffect, useState } from 'react'
import {AiOutlinePlus,AiOutlineArrowRight,AiFillDelete} from 'react-icons/ai'
import {BiGridAlt} from 'react-icons/bi'
import {BsListUl,BsSearch,BsTrash3} from 'react-icons/bs'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import {TfiClose} from 'react-icons/tfi'
import {FaAngleDown, FaAngleRight} from 'react-icons/fa'
import { Select } from "@mantine/core";
import pro1 from '../img/pro1.jpg'
import pro2 from '../img/pro2.jpg'
import pro3 from '../img/pro3.jpg'
import pro4 from '../img/pro4.jpg'
import pro5 from '../img/pro5.jpg'
import pro6 from '../img/pro6.jpg'
import pro7 from '../img/pro7.jpg'
import loti from '../img/loti.gif'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useDeleteProductMutation, useGetProductsQuery, useGetSingleProductQuery } from '../redux/api/productApi'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loading from './Loading'

const Product = () => {

    const [ui,setUi] = useState(true);
    const token = Cookies.get('token')
    const [unit,setUnit] = useState(1)
    const d = {p : unit,token}
    const {currentData,isFetching} = useGetProductsQuery(d)
    const [deleteProduct] = useDeleteProductMutation()
    const oldData = useSelector((state)=>state.productSlice.oldData)
    const updatedData = useSelector((state)=>state.productSlice.data)
    const [products,setProducts] = useState()
    const [sort,setSort] = useState('high')
    const nav = useNavigate()
    console.log(currentData)
    console.log(updatedData)
    console.log(oldData)

     

    useEffect(()=>{
        setProducts(currentData?.data)
        console.log(products)
        
    },[currentData,oldData])

    
    const changeGridUi =()=>{
        const data = document.querySelector('.selected')
        data != null && setUi(false)
           
    }

    const changeListUi =()=>{
        const data = document.querySelector('.selected')
        data == null && setUi(true)
           
    }

    const MySwal = withReactContent(Swal)
   

    const deleteP = async(id)=>{
        console.log(id)
        const d = {token,id}
        const data = await deleteProduct(d)
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
                    <h1 className=' text-2xl font-medium text-white'>Products</h1>
                    <p className=' text-gray-400 mt-1 font-medium text-xs'>Inventory / products</p>
                </div>
                <div>
                    <Link to={'/shop'}>
                    <button className=' px-5 py-2 text-[#8ab4f8] border-2 border-gray-500 rounded font-medium me-3'>Go to shop</button>
                    </Link>
                    <Link to={'/add-product'}>
                    <button className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '> <AiOutlinePlus className=' inline'/> Add Product</button>
                    </Link>
                </div>
            </div>
            <div className=' mt-[40px]'>
                <p className=' text-gray-100 font-semibold text-xl'>Products Overview</p>
                <div className=' flex justify-between items-center mt-3'>
                    <div className='border-gray-700 rounded border px-2 py-1'>
                        <BsSearch className=" inline text-gray-400 me-3"/>
                        <input type="text" placeholder='search' className=' w-[250px] outline-none bg-transparent text-gray-300 text-sm font-semibold' />
                    </div>
                    <div className=' flex items-center '>
                        <div className=" flex items-baseline">
                            <p className=" text-sm text-gray-400 me-2 ">Sort : </p>
                            <Select
                            defaultValue= 'high'
                            className=" custom-select select-product"
                            style={{marginRight : '20px'}}
                            rightSection={
                                <FaAngleDown size="1rem" color="rgb(209 213 219)" />
                            }
                            rightSectionWidth={30}
                            unstyled
                            data={[
                                { value: "high", label: "high" },
                                { value: "low", label: "low" },
                            ]}
                            onChange={(value) => setSort(value)}
                            size="100px"
                            />
                        </div>
                        <div className=' flex items-center border border-gray-500 rounded border-collapse'>
                            <button className=' border-e border-gray-500 px-1' onClick={()=>changeListUi()}>
                            <BsListUl className={`inline  ${ui ? 'text-blue-400':' text-gray-400'}`}  />
                            </button>
                            <button className=' px-1' onClick={()=>changeGridUi()}>
                            <BiGridAlt className={`inline ${ui ? ' text-gray-400': 'text-blue-400'}`}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        {   
            isFetching ? (<Loading/>):( <div>
                {
                    currentData?.data.length>=1 ? (
                        ui ? (<div className=' mt-[50px] selected'>
                    
                         <table className=' w-full text-gray-300 border border-gray-700 text-sm '>
                        <thead>
                        <tr className=''>
                            <th className=' py-4 font-bold text-gray-50 border-b ps-6 text-start border-gray-600 px-1 uppercase '>Name</th>
                            <th className=' py-4 font-bold text-gray-50 border-b text-start border-gray-600 px-1 uppercase '>Brand</th>
                            <th className=' py-4 font-bold text-gray-50 border-b text-end border-gray-600 px-1 uppercase '>Unit</th>
                            <th className=' py-4 font-bold text-gray-50 border-b text-end border-gray-600 px-1 uppercase '>Sale Price</th>
                            <th className=' py-4 font-bold text-gray-50 border-b text-end border-gray-600 px-1 uppercase '>Stock</th>
                            <th className=' py-4 font-bold text-gray-50 border-b text-end border-gray-600 px-1 uppercase '></th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                sort == 'high' && products ? [...currentData?.data].sort((a,b)=> b.sale_price - a.sale_price).map((v)=>(<tr className=' border-b border-gray-700 ' key={v.id}>
                                    <td className='px-1 text-start py-4 ps-6' >{v.name}</td>
                                    <td className='px-1 text-start py-4' >{v.brand_name}</td>
                                    <td className='px-1 py-4 text-end' >{v.unit}</td>
                                    <td className='px-1 py-4 text-end' >{v.sale_price}</td>
                                    <td className='px-1 py-4 text-end' >{v.total_stock}</td>
                                    <td className=' py-4 text-center'>
                                        <div className=' flex items-center justify-center gap-3'>
    
                                            <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=> del(v.id)} ><BsTrash3 className=' text-gray-200'/></button>
                                            
                                            <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=>{nav(`/product/${v.id}`)}}><MdOutlineModeEditOutline className=' text-gray-200'/></button>
                                            
                                            <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=>nav(`/product-detail/${v.id}`)}><AiOutlineArrowRight className=' text-gray-200'/></button>
                                            
                                        </div>
                                    </td>
                                </tr>)):[...currentData?.data].sort((a,b)=> a.sale_price- b.sale_price).map((v)=>(<tr className=' border-b border-gray-700 ' key={v.id}>
                                    <td className='px-1 text-start py-4 ps-6' >{v.name}</td>
                                    <td className='px-1 text-start py-4' >{v.brand_name}</td>
                                    <td className='px-1 py-4 text-end' >{v.unit}</td>
                                    <td className='px-1 py-4 text-end' >{v.sale_price}</td>
                                    <td className='px-1 py-4 text-end' >{v.total_stock}</td>
                                    <td className=' py-4 text-center'>
                                        <div className=' flex items-center justify-center gap-3'>
    
                                            <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=> del(v.id)} ><BsTrash3 className=' text-gray-200'/></button>
                                            
                                            <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=>{nav(`/product/${v.id}`)}}><MdOutlineModeEditOutline className=' text-gray-200'/></button>
                                            
                                            <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=>nav(`/product-detail/${v.id}`)}><AiOutlineArrowRight className=' text-gray-200'/></button>
                                            
                                        </div>
                                    </td>
                                </tr>))                       
                            }
                            
                        </tbody>
                    </table>
                    
                </div>):(<div className=' mt-[50px]'>
                    <div className=' flex gap-4 flex-wrap'>
                        {
                            sort == 'high' && products ? [...currentData?.data].sort((a,b)=> b.sale_price - a.sale_price).map((v)=>(<div className=' border border-gray-700 rounded overflow-hidden' key={v.id}>
                            <img src={v.photo} alt="" className=' w-[180px] h-[160px] object-cover' />
                            <div className=' text-gray-400 p-3 text-end'>
                                <p>{v.name}</p>
                                <p className=' font-bold'>{v.sale_price}</p>
                            </div>
                        </div>)):[...currentData?.data].sort((a,b)=> a.sale_price - b.sale_price).map((v)=>(<div className=' border border-gray-700 rounded overflow-hidden' key={v.id}>
                            <img src={v.photo} alt="" className=' w-[180px] h-[160px] object-cover' />
                            <div className=' text-gray-400 p-3 text-end'>
                                <p>{v.name}</p>
                                <p className=' font-bold'>{v.sale_price}</p>
                            </div>
                        </div>))
                        }
                        
                    </div>
                </div>)
                ):<div className=' min-h-[400px] flex items-center justify-center'>
                    <img src={loti} alt="" />
                </div>
                }
                </div>
            )
            }
        <div className=' mt-auto justify-end flex '>
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
        </div>
        
    </div>
  )
}

export default Product