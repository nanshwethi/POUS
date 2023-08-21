import React, { useEffect, useState } from 'react'
import {BsListUl,BsSearch} from 'react-icons/bs'
import {TfiClose} from 'react-icons/tfi'
import {FaAngleRight,FaAngleDown} from 'react-icons/fa'
import {AiOutlinePlus} from 'react-icons/ai'
import { Select } from '@mantine/core';



const Brand = () => {

    const [offcanvas,setOffcanvas] = useState(false);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

  return (
    <div className=' flex-1 bg-[#202124] p-5 px-6 h-brand flex flex-col relative overflow-hidden'>
        <div className=''>
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
                            <input type="text" placeholder='search' className=' w-[250px] outline-none bg-transparent text-gray-300 text-sm font-semibold' />
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
            <div className=' mt-[50px] selected'>
                <table className=' w-full text-gray-200 border border-gray-700 text-sm '>
                    <thead>
                    <tr className=' border-b border-b-gray-700'>
                        <th className=' py-4 text-center px-1 uppercase font-medium'>No</th>
                        <th className=' py-4 text-start px-1 uppercase font-medium'>Product Name</th>
                        <th className=' py-4 text-start px-1 uppercase font-medium'>User Name</th>
                        <th className=' py-4 text-end px-1 uppercase font-medium'>Added quantity</th>
                        <th className=' py-4 pe-4 text-end px-1 uppercase font-medium'>Created At</th>
                    </tr>
                    </thead>
                    <tbody className=' text-gray-100'>
                        <tr className=' border-b border-b-gray-700 '>
                            <td className='px-1 text-center  py-4' >1</td>
                            <td className='px-1 text-start py-4' >Avocado</td>
                            <td className='px-1 text-start py-4' >Snow</td>
                            <td className='px-1 py-4 text-end' >4</td>
                            <td className='px-1 pe-4 py-4 text-end' >12/7/2023</td>
                        </tr>
                        <tr className='  border-b border-b-gray-700 '>
                            <td className='px-1 text-center  py-4' >1</td>
                            <td className='px-1 text-start py-4' >Avocado</td>
                            <td className='px-1 text-start py-4' >Snow</td>
                            <td className='px-1 py-4 text-end' >4</td>
                            <td className='px-1 pe-4 py-4 text-end' >12/7/2023</td>
                        </tr>
                        <tr className=' '>
                            <td className='px-1 text-center  py-4' >1</td>
                            <td className='px-1 text-start py-4' >Avocado</td>
                            <td className='px-1 text-start py-4' >Snow</td>
                            <td className='px-1 py-4 text-end' >4</td>
                            <td className='px-1 pe-4 py-4 text-end' >12/7/2023</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
        {/* pagination */}
        <div className=' mt-auto justify-end flex '>
            <div className=' text-gray-500 border flex items-center border-gray-700 px-4 mt-2'>
                <button className=" px-3 py-2 text-gray-300">1</button>
                <button className=" px-3 py-2">2</button>
                <button className=" px-3 py-2">3</button>
                <button className=" px-3 py-2">4</button>
                <button className=" px-3 py-2"><FaAngleRight/></button>
            </div>
        </div>
        {/* offcanvas */}
        <div className={` custom-offcanvas ${offcanvas && 'openAni'} bg-[#26272c] flex flex-col p-8`}>
            <div className=' '>
                
                <div className=' flex justify-between items-center'>
                    <p className=' text-gray-200 font-bold text-xl'>Add New Brand</p>
                    <button className=' text-gray-50' onClick={()=> setOffcanvas(!offcanvas)}><TfiClose/></button>
                </div>
                <div className=' border border-dashed w-full h-[100px] relative border-gray-200 rounded mt-7 cursor-pointer bg-gray-700'>
                    <div className=' text-gray-200 text-lg text-center py-8'>
                        <AiOutlinePlus className=' inline'/> <span>Add Image</span>
                    </div>
                    <input type='file' className=' absolute w-full h-full opacity-0 top-0 left-0 ' />
                </div>
                <div className=' pt-7'>
                    <div>
                        <p className=' text-gray-300 mb-2'>Brand Name</p>
                        <input type="text" name="" id="" className=' outline-none p-2 border bg-transparent text-gray-200 rounded border-gray-700' />
                    </div>
                    <div className=' my-3'>
                        <p className=' text-gray-300 mb-2'>Company Name</p>
                        <input type="text" name="" id="" className=' outline-none p-2 border bg-transparent text-gray-200 rounded border-gray-700' />
                    </div>
                    <div>
                        <p className=' text-gray-300 mb-2'>Agent</p>
                        <input type="text" name="" id="" className=' outline-none p-2 border bg-transparent text-gray-200 rounded border-gray-700' />
                    </div>
                    <div className=' my-3'>
                        <p className=' text-gray-300 mb-2'>Phone</p>
                        <input type="text" name="" id="" className=' outline-none p-2 border bg-transparent text-gray-200 rounded border-gray-700' />
                    </div>
                    <div className=''>
                        <p className=' text-gray-300 mb-2'>Description</p>
                        <textarea className=' outline-none text-gray-200 h-[130px] resize-none p-2 border bg-transparent rounded border-gray-700' />
                    </div>
                </div>
            </div>
            <div className=' mt-10 '>
                <div className=' bg-slate-400 text-center py-2  text-lg text-gray-900 font-extrabold rounded'>Save</div>
            </div>
        </div>
    </div>
  )
}

export default Brand