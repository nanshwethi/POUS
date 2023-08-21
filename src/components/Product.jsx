import React, { useEffect, useState } from 'react'
import {AiOutlinePlus,AiOutlineArrowRight,AiOutlineClose} from 'react-icons/ai'
import {BiGridAlt} from 'react-icons/bi'
import {BsListUl,BsSearch} from 'react-icons/bs'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import {TfiClose} from 'react-icons/tfi'
import {FaAngleRight} from 'react-icons/fa'
import pro1 from '../img/pro1.jpg'
import pro2 from '../img/pro2.jpg'
import pro3 from '../img/pro3.jpg'
import pro4 from '../img/pro4.jpg'
import pro5 from '../img/pro5.jpg'
import pro6 from '../img/pro6.jpg'
import pro7 from '../img/pro7.jpg'
import { Link } from 'react-router-dom'



const Product = () => {

    const [ui,setUi] = useState(true);
    const [offcanvas,setOffcanvas] = useState(false);

    const changeGridUi =()=>{
        const data = document.querySelector('.selected')
        data != null && setUi(false)
           
    }

    const changeListUi =()=>{
        const data = document.querySelector('.selected')
        data == null && setUi(true)
           
    }

    

  return (
    <div className=' flex-1 bg-[#202124] p-5 px-6 min-h-screen flex flex-col relative overflow-hidden'>
        <div className=''>
            <div className=' flex justify-between items-center'>
                <div>
                    <h1 className=' text-2xl font-medium text-white'>Products</h1>
                    <p className=' text-gray-400 mt-1 font-medium text-xs'>Inventory / products</p>
                </div>
                <div>
                    <button className=' px-5 py-2 text-[#8ab4f8] border-2 border-gray-500 rounded font-medium me-3'>Go to shop</button>
                    <button className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '> <AiOutlinePlus className=' inline'/> Add Product</button>
                </div>
            </div>
            <div className=' mt-[40px]'>
                <p className=' text-gray-100 font-semibold text-xl'>Products Overview</p>
                <div className=' flex justify-between items-center mt-3'>
                    <div className='border-gray-700 rounded border px-2 py-1'>
                        <BsSearch className=" inline text-gray-400 me-3"/>
                        <input type="text" placeholder='search' className=' w-[250px] outline-none bg-transparent text-gray-300 text-sm font-semibold' />
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
            {
                ui ? (<div className=' mt-[50px] selected'>
                <table className=' w-full text-gray-300 border border-gray-700 text-sm '>
                    <thead>
                    <tr className=''>
                        <th className=' py-4 border-b text-center border-gray-600 px-1 uppercase font-medium'>No</th>
                        <th className=' py-4 border-b text-start border-gray-600 px-1 uppercase font-medium'>Name</th>
                        <th className=' py-4 border-b text-start border-gray-600 px-1 uppercase font-medium'>Brand</th>
                        <th className=' py-4 border-b text-end border-gray-600 px-1 uppercase font-medium'>Unit</th>
                        <th className=' py-4 border-b text-end border-gray-600 px-1 uppercase font-medium'>Sale Price</th>
                        <th className=' py-4 border-b text-end border-gray-600 px-1 uppercase font-medium'>Stock</th>
                        <th className=' py-4 border-b text-end border-gray-600 px-1 uppercase font-medium'></th>
                    </tr>
                    </thead>
                    <tbody>
                        
                        <tr className=' '>
                            <td className='px-1 text-center  py-4' >1</td>
                            <td className='px-1 text-start py-4' >Avocado</td>
                            <td className='px-1 text-start py-4' >USA</td>
                            <td className='px-1 py-4 text-end' >s</td>
                            <td className='px-1 py-4 text-end' >10000</td>
                            <td className='px-1 py-4 text-end' >10</td>
                            <td className=' pe-5 py-4'>
                                <div className=' flex items-center justify-end gap-2'>
                                    <button className=' px-2 py-2 bg-slate-600 rounded-full' onClick={()=> setOffcanvas(!offcanvas)}><AiOutlinePlus className=' text-gray-200'/></button>
                                    <button className=' px-2 py-2 bg-slate-600 rounded-full'><MdOutlineModeEditOutline className=' text-gray-200'/></button>
                                    <Link to={'/product-detail'}>
                                        <button className=' px-2 py-2 bg-slate-600 rounded-full'><AiOutlineArrowRight className=' text-gray-200'/></button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>):(<div className=' mt-[50px]'>
                <div className=' flex gap-4 flex-wrap'>
                    <div className=' border border-gray-700 rounded overflow-hidden'>
                        <img src={pro1} alt="" className=' w-[180px] h-[160px]' />
                        <div className=' text-gray-400 p-3 text-end'>
                            <p>Avocado</p>
                            <p className=' font-bold'>1000Ks</p>
                        </div>
                    </div>
                    <div className=' border border-gray-700 rounded overflow-hidden'>
                        <img src={pro2} alt="" className=' w-[180px] h-[160px]' />
                        <div className=' text-gray-400 p-3 text-end'>
                            <p>Avocado</p>
                            <p>1000Ks</p>
                        </div>
                    </div>
                    <div className=' border border-gray-700 rounded overflow-hidden'>
                        <img src={pro3} alt="" className=' w-[180px] h-[160px]' />
                        <div className=' text-gray-400 p-3 text-end'>
                            <p>Avocado</p>
                            <p>1000Ks</p>
                        </div>
                    </div>
                    <div className=' border border-gray-700 rounded overflow-hidden'>
                        <img src={pro4} alt="" className=' w-[180px] h-[160px]' />
                        <div className=' text-gray-400 p-3 text-end'>
                            <p>Avocado</p>
                            <p>1000Ks</p>
                        </div>
                    </div>
                    <div className=' border border-gray-700 rounded overflow-hidden'>
                        <img src={pro5} alt="" className=' w-[180px] h-[160px]' />
                        <div className=' text-gray-400 p-3 text-end'>
                            <p>Avocado</p>
                            <p>1000Ks</p>
                        </div>
                    </div>
                    <div className=' border border-gray-700 rounded overflow-hidden'>
                        <img src={pro6} alt="" className=' w-[180px] h-[160px]' />
                        <div className=' text-gray-400 p-3 text-end'>
                            <p>Avocado</p>
                            <p>1000Ks</p>
                        </div>
                    </div>
                    <div className=' border border-gray-700 rounded overflow-hidden'>
                        <img src={pro7} alt="" className=' w-[180px] h-[160px]' />
                        <div className=' text-gray-400 p-3 text-end'>
                            <p>Avocado</p>
                            <p>1000Ks</p>
                        </div>
                    </div>
                </div>
            </div>)
            }
        </div>
        <div className=' mt-auto justify-end flex '>
            <div className=' text-gray-500 border flex items-center border-gray-700 px-4 mt-2'>
                <div className=" px-3 py-2 text-gray-300">1</div>
                <div className=" px-3 py-2">2</div>
                <div className=" px-3 py-2">3</div>
                <div className=" px-3 py-2">4</div>
                <div className=" px-3 py-2"><FaAngleRight/></div>
            </div>
        </div>
        {/* offcanvas */}
        <div className={` custom-offcanvas ${offcanvas && 'openAni'} bg-[#26272c] flex flex-col p-8`}>
            <div className=' '>
                <div className=' flex justify-between items-center'>
                    <p className=' text-gray-200 font-bold text-xl'>Add Stock</p>
                    <button className=' text-gray-50' onClick={()=> setOffcanvas(!offcanvas)}><TfiClose/></button>
                </div>
                <div className=' pt-7'>
                    <div>
                        <p className=' text-gray-300 mb-2'>Quantity</p>
                        <input type="text" name="" id="" className=' outline-none p-2 border bg-transparent text-gray-400 rounded border-gray-700' />
                    </div>
                    <div className=' mt-3'>
                        <p className=' text-gray-300 mb-2'>More</p>
                        <textarea className=' outline-none text-gray-400 h-[130px] resize-none p-2 border bg-transparent rounded border-gray-700' />
                    </div>
                </div>
            </div>
            <div className=' mt-auto '>
                <div className=' bg-slate-400 text-center py-2 text-lg text-gray-900 font-extrabold rounded'>Add</div>
            </div>
        </div>
    </div>
  )
}

export default Product