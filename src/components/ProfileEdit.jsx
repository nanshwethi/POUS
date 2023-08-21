import user from "../img/user.jpg";
import { PiDotFill } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import ProfileEditTab from "./ProfileEditTab";

const ProfileEdit = () => {
  return (
    <div className=' flex-1 bg-[#202124] h-edit-profile relative'>
        {/* breadcrumb & btn */}
        <div className=' flex justify-between p-5 pb-0 px-6 items-center'>
            <div>
                <h1 className=' text-2xl font-medium text-white'>Profile</h1>
                <p className=' text-gray-400 mt-1 text-xs font-medium'>Profile/My Account/Information</p>
            </div>
            <div>
                <button className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '>My Profile</button>
            </div>
        </div>
        {/* img & tabs */}
        <div className=' mt-[100px] bg-[#171717] mx-6'>
            {/* img */}
            <div className=' flex justify-between items-center px-6 '>
                <div className=' flex gap-5 items-center  ps-14 '>
                    <div className='relative'>
                        <div style={{width : '180px',height:'180px'}} className=' rounded-full overflow-hidden mt-[-50px]'>
                            <img src={user} alt="" className='myImg'  />
                        </div>
                        <button className=' edit text-2xl m-0 rounded-full'><FiEdit/></button>
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
            {/* tabs */}
            <div className=' mt-2'>
            <ProfileEditTab/>
            </div>
        </div>
        {/* footer */}
        <div className=' border border-b-0 border-t border-[#404044] myfooter w-full'>
            <div className=' flex bg-[#121212] ps-24 py-4'>
                <button className=' px-5 py-2 font-semibold text-[#7f8189] border me-4 text-xs uppercase border-[#646569] rounded'>Cancel</button>
                <button className=' px-5 py-2 font-semibold text-[#292929] bg-[#8ab4f8] text-xs uppercase  rounded'>Save</button>
            </div>
        </div>
    </div>
  );
};

export default ProfileEdit;
