import userPhoto from '../img/user.jpg'
import {PiDotFill} from 'react-icons/pi'
import {AiOutlineMail} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
import { Tabs } from '@mantine/core';
import {HiOutlineHome} from 'react-icons/hi'
import {FiEdit} from 'react-icons/fi'
import { Link, Link as RLink } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useGetSingleUserQuery } from '../redux/api/profileApi'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/services/profileSlice'
import { useEffect } from 'react';
import Loading from './Loading';

const UserProfile = () => {

    const token = Cookies.get('token')
    const d = { token : token , id : 2}
    const {currentData} = useGetSingleUserQuery(d)
    console.log(currentData);
    const dispatch = useDispatch()

    const user = useSelector((state)=>state.profile.user)
      console.log(user);
    useEffect(()=>{
      dispatch(addUser(currentData))
    })

  return (
    <div className=' flex-1 min-h-screen bg-[#202124] p-5 px-6'>
        <div className=' flex justify-between items-center'>
            <div>
                <h1 className=' text-2xl font-medium text-white'>Profile</h1>
                <p className=' text-gray-400 mt-1 font-medium text-xs'>Profile/My Account/Information</p>
            </div>
            <div>
              <Link to={`/profile-edit/${d.id}`}>
              <button className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '>Edit Profile</button>
              </Link>
            </div>
        </div>
        <div className=' mt-[100px] bg-[#171717]'>
            {user ?( <div className=' flex justify-between items-center px-6 '>
                <div className=' flex gap-5 items-center  ps-14 '>
                    <div className='relative'>
                      <div style={{width : '180px',height:'180px'}} className=' rounded-full overflow-hidden bg-slate-300 z-0 mt-[-50px]'>
                          <img src={user.photo} alt="" className=' w-full h-full object-cover z-10'  /> :null
                      </div>
                      <RLink to={`/profile-edit/${d.id}`}>
                          <button className=' edit text-2xl m-0 rounded-full'><FiEdit/></button>
                      </RLink>
                  </div>
                  <div>
                      <h1 className=' text-gray-200 text-2xl font-semibold'>{user.name}</h1>
                      <span className=' text-gray-400 text-xs'>Sale Executive/<PiDotFill className=' inline text-3xl text-[#9ec1f9]'/>Active in 1 hour</span>
                  </div>
                </div>
                <div className=' flex text-white gap-2 items-center'>
                    <div className=' bg-gray-800 p-2 rounded-full'>
                        <AiOutlineMail/>
                    </div>
                    <div className=' bg-gray-800 p-2 rounded-full'>
                        <FiPhoneCall/>
                    </div>
                </div>
            </div>) : <Loading/>
            }
            <div className=' mt-2'>
            {
              user != null ?( <Tabs color="teal" unstyled='true' defaultValue="first">
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
              <Tabs.Panel value="first" className='  h-[320px]'>
                <div>
                  <div className=' flex text-gray-200 items-center font-medium'>
                    <div className=' w-48 font-semibold text-gray-400'>Name</div> 
                    <span className=' me-5'>:</span>
                    <div className=' '>{user?.name}</div>
                  </div>
                  <div className=' flex pt-6 text-gray-200 items-center font-medium'>
                    <div className=' w-48 font-semibold text-gray-400'>Phone</div> 
                    <span className=' me-5'>:</span>
                    <div className=' '>{user?.phone_number}</div>
                  </div>
                  <div className=' flex py-6 text-gray-200 items-center font-medium'>
                    <div className=' w-48 font-semibold text-gray-400'>Date Of Birth</div>
                    <span className=' me-5'>:</span>
                    <div className=' '>{user?.date_of_birth}</div>
                  </div>
                  <div className=' flex pb-6 text-gray-200 items-center font-medium'>
                    <div className=' w-48 font-semibold text-gray-400'>Mail</div>
                    <span className=' me-5'>:</span>
                    <div className=' '>{user?.email}</div>
                  </div>
                  <div className=' flex  text-gray-200 items-center font-medium'>
                    <div className=' w-48 font-semibold text-gray-400'>Gender</div>
                    <span className=' me-5'>:</span>
                    <div className=' '>{user?.gender}</div>
                  </div>
                  <div className=' flex py-6 text-gray-200 items-center font-medium'>
                    <div className=' w-48 font-semibold text-gray-400'>Address</div> 
                    <span className=' me-5'>:</span>
                    <div className=' '>{user?.address}</div>
                  </div>
                </div>
              </Tabs.Panel>
            </Tabs>): null
            }
            </div>
        </div>
    </div>
  )
}

export default UserProfile