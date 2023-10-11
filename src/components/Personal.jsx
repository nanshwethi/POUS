import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {createAddress, createDateOfBirth, createGender, createName} from '../redux/services/userSlice'
import { BsCalendarCheck } from 'react-icons/bs'

const Personal = () => {
    const [date,setDate] = useState('yyy / mmm / ddd')
    const dispatch = useDispatch()
    const content = useSelector((state)=>state.userSlice.user)


  return (
    <form className=' w-full' autoComplete='off'>
        <div className=' flex py-4 w-full text-gray-200 items-center font-medium'>
        <label className=' w-48 font-medium text-gray-200'>Name</label>
            <div className=' flex-1'>
                <input type="name" className=' bg-[#202124] border-2 border-[#313337] focus:border-gray-500 rounded text-slate-200 outline-none w-full py-2 px-3'  required defaultValue={content.name} onChange={(e)=>dispatch(createName(e.target.value))}  />
            </div>
        </div>
        <div className=' flex py-4 text-gray-200 items-center font-medium'>
            <div className=' w-48 font-medium text-gray-200'>Date Of Birth</div> 
                <div className=' flex-1 flex justify-start items-center  relative bg-[#202124] border-2 py-2 px-3 date focus:border-gray-500 border-[#313337] rounded text-slate-300 '>
                <BsCalendarCheck className=' text-blue-00 text-xl me-3 my-1'/>
                <input type="date" required className=' w-full h-full top-0 left-0 opacity-0 absolute ' onChange={(e)=>{
                dispatch(createDateOfBirth(e.target.value))
                setDate(e.target.value)
                }}/>
                <span className='' >{content.date_of_birth}</span>
                </div>
        </div>
        <div className=' flex py-6 text-gray-200 items-center font-medium'>
        <div className=' w-48 font-medium text-gray-200'>Gender</div>
        <div className=' flex-1'>
            <div className=' flex justify-start items-center'>
                <div className=' me-4 flex items-center'>
                <input type="radio" id='male' name='gender' required className={`male opacity-0 absolute text-slate-200`}  onClick={(e)=>dispatch(createGender('male'))}/>
                <span className=' fakeRadio me-2'></span>
                <label htmlFor="male" className=' text-gray-500'>male</label>
                </div>
                <div className=' flex items-center'>
                <input type="radio" id='female' name='gender' required className='female absolute opacity-0 text-slate-200' onClick={(e)=> dispatch(createGender('female'))} />
                <span className=' fakeRadio me-2'></span>
                <label htmlFor="female" className='  text-gray-500'>female</label>
                </div>
            </div>
            
        </div>
        </div>
        <div className=' flex py-4 text-gray-200 items-start font-medium'>
            <div className=' w-48 font-medium text-gray-200'>Address</div> 
            <div className=' flex-1'>
                <textarea className=' bg-[#202124] border-2 resize-none border-[#313337] rounded text-slate-200 outline-none w-full py-1 px-3 h-[150px]' required defaultValue={content.address} onChange={(e)=>dispatch(createAddress(e.target.value))} />
            </div>
        </div>
    </form>
  )
}

export default Personal