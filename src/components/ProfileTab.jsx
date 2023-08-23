import React, { useRef } from 'react'
import { Tabs } from '@mantine/core';
import {HiOutlineHome} from 'react-icons/hi'

const ProfileTab = () => {

    return (
        <Tabs color="teal" unstyled='true' defaultValue="first">
          <Tabs.List>
            <Tabs.Tab value="first" icon={<HiOutlineHome className=' text-blue-400'/>} >
              <p className=' text-sm mlb text-gray-400'>Personal</p>
            </Tabs.Tab>
            {/* <Tabs.Tab value="second" icon={<HiOutlineHome className=' text-blue-400'/>} >
             <p className=' text-sm mlb text-gray-400'>Login Information</p>
            </Tabs.Tab>
            <Tabs.Tab value="third" icon={<HiOutlineHome className=' text-blue-400'/>} >
            <p className=' text-sm mlb text-gray-400'>Password</p>
            </Tabs.Tab> */}
          </Tabs.List>
    
          <Tabs.Panel value="first" className='  h-[300px]'>
            <div>
              <div className=' flex text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Name</div> 
                <div className=' '>:  Ethan James</div>
              </div>
              <div className=' flex pt-6 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Phone</div> 
                <div className=' '>:  0911122233</div>
              </div>
              <div className=' flex py-6 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Date Of Birth</div>
                <div className=' '>:  12/4/1999</div>
              </div>
              <div className=' flex  text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Gender</div>
                <div className=' '>:  male</div>
              </div>
              <div className=' flex py-6 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Address</div> 
                <div className=' '>:  No2/Baho Street/Bahan/Yangon</div>
              </div>
              
            </div>
          </Tabs.Panel>
    
          {/* <Tabs.Panel value="second" pt="xs" className='  h-[200px]'>
          <div>
              <div className=' flex py-4 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Phone</div>
                <div className=''>: 09856787</div>
              </div>
              <div className=' flex  text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Position</div>
                <div className=''>: Sale Excutive</div>
              </div>
              <div className=' flex py-4 text-gray-200 items-center font-medium'>
                <div className=' w-48 font-semibold text-gray-400'>Mail</div> 
                <div className=''>: ethan@gmail.com</div>
              </div>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="third" pt="xs" className=' h-[200px]'>
            
          </Tabs.Panel> */}

        </Tabs>
      );
}

export default ProfileTab