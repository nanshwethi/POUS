import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {FiEdit} from 'react-icons/fi'
import {HiOutlineHome} from 'react-icons/hi'
import {FaAngleRight} from 'react-icons/fa'
import pro1 from '../img/pro1.jpg'
import { useGetSingleProductQuery } from '../redux/api/productApi'
import Cookies from 'js-cookie'
import Loading from './Loading'

const ProductDetail = () => {

    const token = Cookies.get('token')
    const {id} = useParams()
    const forProduct = {token,id}
    const {data} = useGetSingleProductQuery(forProduct)
    console.log(data);

  return (
    <div className=' flex-1 bg-[#202124] p-5 px-6 min-h-screen'>
        <div className=' flex justify-between items-center'>
            <div>
                <h1 className=' text-2xl font-medium text-white'>Product Detail</h1>
                <p className=' text-gray-400 mt-1 font-medium text-xs'>Inentory/Product list/Product detail</p>
            </div>
            <div>
                <Link to={`/product`}>
                <button className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '>Products</button>
                </Link>
            </div>
        </div>

        {
            data?.data ? (<div className=' mt-[140px] '>
                <div className=' bg-[#171717] w-[83%] me-5'>
                    <div className=' flex items-center ps-14'>
                        <div className='relative '>
                            <div  className=' mt-[-120px]'>
                                <img src={data.data.photo} alt="" className=' rounded-full ' style={{width : '180px',height:'180px'}}/>
                            </div>
                            <Link to={`/product/${id}`}>
                                <button className=' edit text-2xl m-0 rounded-full'><FiEdit/></button>
                            </Link>
                        </div>
                        <div className=' pt-12 px-10'>
                            <p className=' text-3xl font-extrabold text-gray-200 mb-6'>{data.data.name}</p>
                            <div>
                                <p className=' text-gray-400 mb-2'>Sale Price : <span>{data.data.sale_price}</span></p>
                                <p className=' text-gray-400 mb-2'>Actual Price : <span>{data.data.actual_price}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='  pt-10 pb-6 border-b border-gray-600'>
                        <div className=' ps-14 flex items-baseline'>
                        <HiOutlineHome className=' text-blue-400 me-2'/>
                        <span className=' text-gray-200 '>Information</span>
                        </div>
                    </div>
                    <div className=' mt-[20px] ps-14 '>
                        {/* <div className=' flex py-5 text-gray-200 items-center font-medium'>
                            <div className=' w-48 font-semibold text-gray-400'>Name</div>
                            <div className=''>: Avocado</div>
                        </div> */}
                        <div className=' flex justify-between  text-gray-200 items-center font-medium'>
                            <div className=' w-48 font-semibold text-gray-400'>Brand</div>
                            <div className=' flex-1'>: {data.data.name}</div>
                        </div>
                        <div className=' flex justify-between py-5 text-gray-200 items-center font-medium'>
                            <div className=' w-48 font-semibold text-gray-400'>Stock</div> 
                            <div className=' flex-1'>: {data.data.total_stock}</div>
                        </div>
                        <div className=' flex justify-between text-gray-200 items-center font-medium'>
                            <div className=' w-48 font-semibold text-gray-400'>Unit</div> 
                            <div className=' flex-1'>: {data.data.unit}</div>
                        </div>
                        <div className=' flex justify-between pt-5 pb-12  text-gray-200 items-start font-medium '>
                            <div className=' w-48 font-semibold text-gray-400'>More Information</div> 
                            <div className=' flex-1'>: {data.data.more_information}</div>
                        </div>
                    </div>
                </div>
                {/* <div className=' flex-1'>
                    <div className=''>
                        <table className='  bg-[#171717] w-full text-gray-300 border border-gray-700 text-sm '>
                            <caption className=' bg-[#171717] uppercase text-start py-4 text-gray-200 px-3 border border-b-0 border-gray-700 rounded-t'>Stock history</caption>
                            <thead>
                            <tr className=' text-gray-100 border-b border-gray-700'>
                                <th className=' py-4 ps-3 text-center px-1 uppercase font-medium text-xs'>No</th>
                                <th className=' py-4 text-start px-1 uppercase font-medium text-xs'>User Name</th>
                                <th className=' py-4 text-end px-1 uppercase font-medium text-xs'>Added Quantity</th>
                                <th className=' py-4 pe-5 text-end px-1 uppercase font-medium text-xs'>Created At</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr className=' text-gray-100 border-b border-gray-700'>
                                    <td className='px-1 text-center  py-4' >1</td>
                                    <td className='px-1 text-start py-4' >Avocado</td>
                                    <td className='px-1 text-end py-4' >3</td>
                                    <td className='px-1 pe-5 py-4 text-end break-words' >12:20:15AM 2021</td>
                                </tr>
                                <tr className=' text-gray-100'>
                                    <td className='px-1 text-center  py-4' >1</td>
                                    <td className='px-1 text-start py-4' >Avocado</td>
                                    <td className='px-1 text-end py-4' >3</td>
                                    <td className='px-1 pe-5 py-4 text-end break-words' >12:20:15AM 2021</td>
                                </tr>
                            </tbody>
                        </table>
                    <div className=' text-end mt-2'>
                            <div className=' text-gray-500 border inline-flex items-center rounded border-gray-700 px-4 mt-2'>
                                <div className=" px-3 py-2 text-gray-300">1</div>
                                <div className=" px-3 py-2">2</div>
                                <div className=" px-3 py-2">3</div>
                                <div className=" px-3 py-2">4</div>
                                <div className=" px-3 py-2"><FaAngleRight/></div>
                            </div>
                        </div> 
                    </div>
                    <div className=' mt-10 mb-5'>
                        <table className='  bg-[#171717] w-full text-gray-300 border border-gray-700 text-sm '>
                            <caption className=' bg-[#171717] uppercase text-start py-4 text-gray-200 px-3 border border-b-0 border-gray-700 rounded-t'>Stock history</caption>
                            <thead>
                            <tr className=' text-gray-100 border-b border-gray-700'>
                                <th className=' py-4 ps-3 text-center px-1 uppercase font-medium text-xs'>No</th>
                                <th className=' py-4 text-start px-1 uppercase font-medium text-xs'>sale quantity</th>
                                <th className=' py-4 text-end px-1 uppercase font-medium text-xs'>sale price</th>
                                <th className=' py-4 pe-5 text-end px-1 uppercase font-medium text-xs'>sale date</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr className=' text-gray-100 border-b border-gray-700'>
                                    <td className='px-1 text-center  py-4' >1</td>
                                    <td className='px-1 text-start py-4' >Avocado</td>
                                    <td className='px-1 text-end py-4' >3</td>
                                    <td className='px-1 pe-5 py-4 text-end break-words' >12:20:15AM 2021</td>
                                </tr>
                                <tr className=' text-gray-100'>
                                    <td className='px-1 text-center  py-4' >1</td>
                                    <td className='px-1 text-start py-4' >Avocado</td>
                                    <td className='px-1 text-end py-4' >3</td>
                                    <td className='px-1 pe-5 py-4 text-end break-words' >12:20:15AM 2021</td>
                                </tr>
                            </tbody>
                        </table>
                    <div className=' text-end mt-2'>
                            <div className=' text-gray-500 border inline-flex items-center rounded border-gray-700 px-4 mt-2'>
                                <div className=" px-3 py-2 text-gray-300">1</div>
                                <div className=" px-3 py-2">2</div>
                                <div className=" px-3 py-2">3</div>
                                <div className=" px-3 py-2">4</div>
                                <div className=" px-3 py-2"><FaAngleRight/></div>
                            </div>
                        </div> 
                    </div>
                </div> */}
            </div>):<Loading/>
        }
        
    </div>
  )
}

export default ProductDetail