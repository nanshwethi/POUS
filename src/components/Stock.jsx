import React, { useEffect, useState } from 'react'
import {BsListUl,BsSearch} from 'react-icons/bs'
import {TfiClose} from 'react-icons/tfi'
import {FaAngleRight,FaAngleDown} from 'react-icons/fa'
import { Select } from '@mantine/core';


const Stock = () => {
    
  return (
    <div className=' flex-1 bg-[#202124] p-5 px-6 min-h-screen flex flex-col relative overflow-hidden'>
        <div className=''>
            <div>
                <h1 className=' text-2xl font-medium text-white'>Stock Control</h1>
                <p className=' text-gray-400 mt-1 font-medium text-xs'>Inventory / Stock control</p>
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
            <div className=' mt-[50px]'>
                <table className=' w-full text-gray-300 border border-gray-700 text-sm '>
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
        <div className=' mt-auto justify-end flex '>
            <div className=' text-gray-500 border flex items-center border-gray-700 px-4 mt-2'>
                <div className=" px-3 py-2 text-gray-300">1</div>
                <div className=" px-3 py-2">2</div>
                <div className=" px-3 py-2">3</div>
                <div className=" px-3 py-2">4</div>
                <div className=" px-3 py-2"><FaAngleRight/></div>
            </div>
        </div>
        
    </div>
  )
}

export default Stock