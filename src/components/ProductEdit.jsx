import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import {FiUploadCloud} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ProductEdit = () => {

    const [active,setActive] = useState('one')
    const [ui,setUi] = useState(true)
    const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className=' flex-1 bg-[#202124] p-5 px-6 h-pEdit flex flex-col relative '>
        {/* modal */}
        <Modal opened={opened} className=' myModal-inner' onClose={close} title={'Select an image '}  size="xl" >
            <div className="w-full h-full flex flex-col justify-center items-center gap-10 p-5 bg-gray-900">
            <div className=" flex flex-wrap gap-5 justify-start items-center ">
                {/* Upload img start */}
                <div className=' border border-dashed w-[160px] h-[150px] relative border-gray-200 rounded cursor-pointer bg-gray-700'>
                    <div className=' text-gray-200 text-lg text-center my-[40px]'>
                        <FiUploadCloud className=' inline text-4xl'/>
                        <p className=' mt-2'>Upload Image</p>
                    </div>
                    <input type='file' className=' absolute w-full h-full opacity-0 top-0 left-0 ' />
                </div>
                        {/* Upload img end */}
                <div className={`w-[160px] h-[150px] ${ ui == 'lemon' ? 'border border-gray-700 p-1' : null} rounded-lg overflow-hidden`} onClick={()=> setUi('lemon')}>
                    <img src="/lemon.avif" className="w-full h-full object-cover object-center rounded-lg" alt="" />
                </div>
                <div className={`w-[160px] h-[150px] ${ ui == 'lime' ? 'border border-gray-700 p-1' : null} rounded-lg overflow-hidden`} onClick={()=> setUi('lime')}>
                    <img src="/lime.avif" className="w-full h-full object-cover object-center rounded-lg" alt="" />
                </div>
                <div className={`w-[160px] h-[150px] ${ ui == 'straw' ? 'border border-gray-700 p-1' : null} rounded-lg overflow-hidden`} onClick={()=> setUi('straw')}>
                    <img src="/strawberries.avif" className="w-full h-full object-cover object-center rounded-lg" alt="" />
                </div>
                <div className={`w-[160px] h-[150px] ${ ui == 'pine' ? 'border border-gray-700 p-1' : null} rounded-lg overflow-hidden`} onClick={()=> setUi('pine')}>
                    <img src="/pineapple.avif" className="w-full h-full object-cover object-center rounded-lg" alt="" />
                </div>
            </div>
            <button className="w-[100px] h-[40px] font-semibold text-[16px] myBlueBtn ml-auto">
                insert
            </button>
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
        <div className=' mt-12 flex h-[500px]'>
            {
                active == 'one' ?(<div className="p-6 w-[60%] bg-[#171717] rounded">
                <div className=' flex py-4 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Name</div>
                <div className=' flex-1'>
                    <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3' />
                </div>
                </div>
                <div className=' flex py-4 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Brand</div> 
                <div className=' flex-1'>
                    <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3' />
                </div>
                </div>
                <div className=' flex py-4 text-gray-200 items-center font-medium'>
                    <div className=' w-48 font-semibold text-gray-400'>Stock</div> 
                    <div className=' flex-1'>
                        <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3' />
                    </div>
                </div>
                <div className=' flex py-4 text-gray-200 items-center font-medium'>
                    <div className=' w-48 font-semibold text-gray-400'>Unit</div> 
                    <div className=' flex-1'>
                        <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3' />
                    </div>
                </div>
                <div className=' flex py-4 text-gray-200 items-start font-medium'>
                    <div className=' w-48 font-semibold text-gray-400'>More Info</div> 
                    <div className=' flex-1'>
                        <textarea className=' bg-[#202124] border-2 resize-none border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3 h-[100px]' />
                    </div>
                </div>
            </div>):(
                    <div className="p-6 w-[60%] bg-[#171717] h-[250px] rounded">
                <div className=' flex py-4 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Name</div>
                <div className=' flex-1'>
                    <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3' />
                </div>
                </div>
                <div className=' flex py-4 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Brand</div> 
                <div className=' flex-1'>
                    <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3' />
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
                            <span className=' text-gray-300'>password</span>
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
                    <button className=' px-4 py-2 text-gray-200 bg-blue-900 rounded '>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductEdit