import React from 'react'
import {AiOutlinePlus,AiOutlineArrowRight,AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {BsListUl,BsSearch,BsTrash3} from 'react-icons/bs'
import {BiGridAlt} from 'react-icons/bi'



const InStock = () => {

  

  return (
    <div></div>
    // <div className=' flex-1 bg-[#202124] p-5 px-6 min-h-screen flex flex-col relative overflow-hidden'>
    //     <div className=''>
    //         <div className=' flex justify-between items-center'>
    //             <div>
    //                 <h1 className=' text-2xl font-medium text-white'>Products</h1>
    //                 <p className=' text-gray-400 mt-1 font-medium text-xs'>Inventory / products</p>
    //             </div>
    //             <div>
    //                 <Link to={'/shop'}>
    //                 <button className=' px-5 py-2 text-[#8ab4f8] border-2 border-gray-500 rounded font-medium me-3'>Go to shop</button>
    //                 </Link>
    //                 <Link to={'/add-product'}>
    //                 <button className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '> <AiOutlinePlus className=' inline'/> Add Product</button>
    //                 </Link>
    //             </div>
    //         </div>
    //         <div className=' mt-[40px]'>
    //             <p className=' text-gray-100 font-semibold text-xl'>Products Overview</p>
    //             <div className=' flex justify-between items-center mt-3'>
    //                 <div className='border-gray-700 rounded border px-2 py-1'>
    //                     <BsSearch className=" inline text-gray-400 me-3"/>
    //                     <input type="text" placeholder='search' className=' w-[250px] outline-none bg-transparent text-gray-300 text-sm font-semibold' />
    //                 </div>
    //                 <div className=' flex items-center border border-gray-500 rounded border-collapse'>
    //                     <button className=' border-e border-gray-500 px-1' onClick={()=>changeListUi()}>
    //                     <BsListUl className={`inline  ${ui ? 'text-blue-400':' text-gray-400'}`}  />
    //                     </button>
    //                     <button className=' px-1' onClick={()=>changeGridUi()}>
    //                     <BiGridAlt className={`inline ${ui ? ' text-gray-400': 'text-blue-400'}`}/>
    //                     </button>
    //                 </div>
                    
    //             </div>
    //         </div>
    //         {
    //             ui ? (<div className=' mt-[50px] selected'>
                
    //                  <table className=' w-full text-gray-300 border border-gray-700 text-sm '>
    //                 <thead>
    //                 <tr className=''>
    //                     <th className=' py-4 border-b ps-6 text-start border-gray-600 px-1 uppercase font-medium'>Name</th>
    //                     <th className=' py-4 border-b text-start border-gray-600 px-1 uppercase font-medium'>Brand</th>
    //                     <th className=' py-4 border-b text-end border-gray-600 px-1 uppercase font-medium'>Unit</th>
    //                     <th className=' py-4 border-b text-end border-gray-600 px-1 uppercase font-medium'>Sale Price</th>
    //                     <th className=' py-4 border-b text-end border-gray-600 px-1 uppercase font-medium'>Stock</th>
    //                     <th className=' py-4 border-b text-end border-gray-600 px-1 uppercase font-medium'></th>
    //                 </tr>
    //                 </thead>
    //                 <tbody>
    //                     {
                            
    //                         products?.map((v)=>(<tr className=' border-b border-gray-700 ' key={v.id}>
    //                             <td className='px-1 text-start py-4 ps-6' >{v.name}</td>
    //                             <td className='px-1 text-start py-4' >{v.brand_name}</td>
    //                             <td className='px-1 py-4 text-end' >{v.unit}</td>
    //                             <td className='px-1 py-4 text-end' >{v.sale_price}</td>
    //                             <td className='px-1 py-4 text-end' >{v.total_stock}</td>
    //                             <td className=' pe-5 py-4'>
    //                                 <div className=' flex items-center justify-end gap-3'>

    //                                     <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=> del(v.id)} ><BsTrash3 className=' text-gray-200'/></button>
                                        
    //                                     <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=>nav(`/product/${v.id}`)}><MdOutlineModeEditOutline className=' text-gray-200'/></button>
                                        
    //                                     <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=>nav(`/product-detail/${v.id}`)}><AiOutlineArrowRight className=' text-gray-200'/></button>
                                        
    //                                 </div>
    //                             </td>
    //                         </tr>))
                            
    //                     }
                        
                       
    //                 </tbody>
    //             </table>
                
    //         </div>):(<div className=' mt-[50px]'>
    //             <div className=' flex gap-4 flex-wrap'>
    //                 {
    //                     products?.map((v)=>(<div className=' border border-gray-700 rounded overflow-hidden' key={v.id}>
    //                     <img src={v.photo} alt="" className=' w-[180px] h-[160px] object-cover' />
    //                     <div className=' text-gray-400 p-3 text-end'>
    //                         <p>{v.name}</p>
    //                         <p className=' font-bold'>{v.sale_price}</p>
    //                     </div>
    //                 </div>))
    //                 }
                    
    //             </div>
    //         </div>)
    //         }
    //     </div>
    //     <div className=' mt-auto justify-end flex '>
    //         <div className=' text-gray-500 border flex items-center border-gray-700 px-4 mt-6'>
    //         <button
    //         className={` px-3 py-2 ${
    //           unit == 1 ? "text-gray-50" : "text-gray-500"
    //         }`}
    //         onClick={() => setUnit(1)}>
    //         1
    //       </button>
    //       <button
    //         className={` px-3 py-2 ${
    //           unit == 2 ? "text-gray-50" : "text-gray-500"
    //         }`}
    //         onClick={() => setUnit(2)}>
    //         2
    //       </button>
    //       <button
    //         className={` px-3 py-2 ${
    //           unit == 4 ? "text-gray-50" : "text-gray-500"
    //         }`}
    //         onClick={() => setUnit(3)}>
    //         <FaAngleRight />
    //       </button>
    //         </div>
    //     </div>
        
    // </div>
  )
}

export default InStock