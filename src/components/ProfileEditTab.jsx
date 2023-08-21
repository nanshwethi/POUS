import React, { useEffect, useState } from 'react'
import { Tabs } from '@mantine/core';
import {HiOutlineHome} from 'react-icons/hi'

const ProfileEditTab = () => {

    return (
        <Tabs color="teal" unstyled defaultValue="first">
          <Tabs.List className=' tab-list  '>
            <Tabs.Tab value="first" icon={<HiOutlineHome className=' text-blue-400'/>} >
              <p className=' text-sm mlb text-gray-400'>Personal</p>
            </Tabs.Tab>
            <Tabs.Tab value="second" icon={<HiOutlineHome className=' text-blue-400'/>} >
             <p className=' text-sm mlb text-gray-400'>Login Information</p>
            </Tabs.Tab>
            <Tabs.Tab value="third" icon={<HiOutlineHome className=' text-blue-400'/>} >
            <p className=' text-sm mlb text-gray-400'>Password</p>
            </Tabs.Tab>
          </Tabs.List>
    
          <Tabs.Panel value="first" className=' h-[400px]'>
            <div>
              <div className=' flex py-4 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Name</div>
                <div className=' flex-1'>
                    <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-4/6 py-2 px-3' />
                </div>
              </div>
              <div className=' flex py-4 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Phone</div> 
                <div className=' flex-1'>
                    <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-4/6 py-2 px-3' />
                </div>
              </div>
              <div className=' flex py-4 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Gender</div>
                <div className=' flex-1'>
                    <div className=' flex justify-start items-center'>
                      <div className=' me-4 flex items-center'>
                        <input type="radio" id='male' name='gender' className=' male opacity-0 absolute' />
                        <span className=' fakeRadio me-2'></span>
                        <label htmlFor="male" className=' text-gray-500'>male</label>
                      </div>
                      <div className=' flex items-center'>
                        <input type="radio" id='female' name='gender' className='female absolute opacity-0 ' />
                        <span className=' fakeRadio me-2'></span>
                        <label htmlFor="female" className='  text-gray-500'>female</label>
                      </div>
                    </div>
                    
                </div>
              </div>
              
              <div className=' flex py-4 text-gray-200 items-start font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Address</div> 
                <div className=' flex-1'>
                    <textarea className=' bg-[#202124] border-2 resize-none border-[#313337] rounded text-slate-400 outline-none w-4/6 py-2 px-3 h-[100px]' />
                </div>
              </div>
            </div>
          </Tabs.Panel>
    
          <Tabs.Panel value="second" pt="xs" className=' h-[400px]'>
          <div>
              <div className=' flex py-4 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Phone Number</div>
                <div className=' flex-1'>
                    <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-4/6 py-2 px-3' />
                </div>
              </div>
              <div className=' flex py-4 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Email</div> 
                <div className=' flex-1'>
                    <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-4/6 py-2 px-3' />
                </div>
              </div>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="third" pt="xs" className=' h-[400px]' >
          <div>
              <div className=' flex py-4 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Current Password</div>
                <div className=' flex-1'>
                    <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-4/6 py-2 px-3' />
                </div>
              </div>
              <div className=' flex py-4 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>New Password</div> 
                <div className=' flex-1'>
                    <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-4/6 py-2 px-3' />
                </div>
              </div>
              <div className=' flex py-4 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Confirm Password</div> 
                <div className=' flex-1'>
                    <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-4/6 py-2 px-3' />
                </div>
              </div>
            </div>
          </Tabs.Panel>

        </Tabs>
    );
}

export default ProfileEditTab