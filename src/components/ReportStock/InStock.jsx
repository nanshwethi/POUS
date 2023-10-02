import React, { useState } from 'react'
import {AiOutlinePlus,AiOutlineArrowRight,AiFillDelete} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import {BsListUl,BsSearch,BsTrash3} from 'react-icons/bs'
import {BiGridAlt} from 'react-icons/bi'
import { MdOutlineModeEditOutline} from 'react-icons/md'
import { useGetInStockQuery } from '../../redux/api/reportStockApi'
import Cookies from 'js-cookie'
import Loading from '../Loading'
import { useDeleteStockMutation } from '../../redux/api/stockApi'
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";


const InStock = () => {

  const token = Cookies.get('token')
  const forInstock = {token,p : 1}
  const {currentData} = useGetInStockQuery(forInstock)
  const [deleteStock] = useDeleteStockMutation();
  const MySwal = withReactContent(Swal);
  

  console.log(currentData);
  const nav = useNavigate()

  const delStock = async (id) => {
    console.log(id);
    const d = { token, id };
    const data = await deleteStock(d);
    console.log(data);
    if (data.data == null) {
      MySwal.fire({
        text: "Successfully Deleted!",
        width: "300px",
        padding: "10px 10px 10px",
        color: "#ffffff",
        background: "#393d3d",
        iconColor: "5dfc68",
      });
    }
  };

  const del = (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      background: "#393d3d",
      color: "#ffffff",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        delStock(id);
      }
    });
  };
  
  return (
    <div className=' flex-1 bg-[#202124] p-5 px-6 min-h-screen '>
      <div className=' flex flex-col'>
        <div className=''>
            <div className=' flex justify-between items-center'>
                <div>
                    <h1 className=' text-2xl font-medium text-white'>Report</h1>
                    <p className=' text-gray-400 mt-1 font-medium text-xs'>Inventory / report / instock</p>
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
                <div className=' mt-3'>
                    <div className='border-gray-700 inline rounded border px-2 py-1'>
                        <BsSearch className=" inline text-gray-400 me-3"/>
                        <input type="text" placeholder='search' className=' w-[250px] outline-none bg-transparent text-gray-300 text-sm font-semibold' />
                    </div>
                    
                </div>
            </div>
            {
              currentData ? (
                <div className=' mt-[50px]'>
              <table className=' w-full text-gray-300 border border-gray-700 text-sm '>
                  <thead>
                  <tr className=''>
                      <th className=' py-4 border-b ps-6 text-start border-gray-600 px-1 uppercase font-medium'>Name</th>
                      <th className=' py-4 border-b text-start border-gray-600 px-1 uppercase font-medium'>Brand</th>
                      <th className=' py-4 border-b text-end border-gray-600 px-1 uppercase font-medium'>Unit</th>
                      <th className=' py-4 border-b text-end border-gray-600 px-1 uppercase font-medium'>Sale Price</th>
                      <th className=' py-4 border-b text-end border-gray-600 px-1 uppercase font-medium'>Stock</th>
                      <th className=' py-4 border-b text-end border-gray-600 px-1 uppercase font-medium'>Stock Level</th>
                      <th className=' py-4 border-b text-end border-gray-600 px-1 uppercase font-medium'></th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      
                       currentData.data?.map(i=>(<tr className=' border-b border-gray-700 ' key={i.id} >
                      <td className='px-1 text-start py-4 ps-6' >{i.name}</td>
                      <td className='px-1 text-start py-4' >{i.brand}</td>
                      <td className='px-1 py-4 text-end' >{i.unit}</td>
                      <td className='px-1 py-4 text-end' >{i.sale_price}</td>
                      <td className='px-1 py-4 text-end' >{i.total_stock}</td>
                      <td className='px-1 py-4 text-end' > <span className=' border border-green-600 text-green-400 px-3 rounded-full bg-[#3e4c38] py-2'>{i.stock_level}</span></td>
                      <td className=' pe-5 py-4'>
                          <div className=' flex items-center justify-end gap-3'>

                              {/* <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=> del(i.id)} ><BsTrash3 className=' text-gray-200'/></button> */}
                              
                              <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=>nav(`/stock-edit/${i.id}`)}><MdOutlineModeEditOutline className=' text-gray-200'/></button>
                              
                              <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=>nav(`/product-detail/${i.id}`)}><AiOutlineArrowRight className=' text-gray-200'/></button>
                            
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
      </div>
      
    </div>
    
        

  )
}

export default InStock