import user from '../img/user.jpg'
import {PiDotFill} from 'react-icons/pi'
import {AiOutlineMail} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
import ProfileTab from './ProfileTab'
import {FiEdit} from 'react-icons/fi'
import { Link as RLink } from 'react-router-dom'

const UserProfile = () => {
  return (
    <div className=' flex-1 bg-[#202124] p-5 px-6 min-h-screen'>
        <div className=' flex justify-between items-center'>
            <div>
                <h1 className=' text-2xl font-medium text-white'>Profile</h1>
                <p className=' text-gray-400 mt-1 font-medium text-xs'>Profile/My Account/Information</p>
            </div>
            <div>
                <button className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '>My Profile</button>

            </div>
        </div>
        <div className=' mt-[100px] bg-[#171717]'>
            <div className=' flex justify-between items-center px-6 '>
                <div className=' flex gap-5 items-center  ps-14 '>
                    <div className='relative'>
                        <div style={{width : '180px',height:'180px'}} className=' rounded-full overflow-hidden mt-[-50px]'>
                            <img src={user} alt="" className='myImg'  />
                        </div>
                        <RLink to={'/profile-edit'}>
                            <button className=' edit text-2xl m-0 rounded-full'><FiEdit/></button>
                        </RLink>
                    </div>
                    <div>
                        <h1 className=' text-gray-200 text-2xl font-semibold'>Ethan James</h1>
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
            </div>
            <div className=' mt-2'>
                <ProfileTab/>
            </div>
        </div>
    </div>
  )
}

export default UserProfile