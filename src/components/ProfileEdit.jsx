import user from "../img/user.jpg";
import { PiDotFill } from "react-icons/pi";
import { AiOutlineMail,AiOutlinePlus } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { Loader, Tabs } from '@mantine/core';
import {HiOutlineHome} from 'react-icons/hi'
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { addAddress, addCurrentP, addDateOfBirth, addEmail, addGender, addName, addPConfrim, addPassword, addPhone_number, addPhoto, addRole, addUser, addp } from '../redux/services/profileSlice';
import { useChangePassswordMutation, useGetSingleUserQuery, useUpdateProfileMutation } from '../redux/api/profileApi';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Tooltip from '@mui/material/Tooltip';
import { Modal, Group, Button } from '@mantine/core';
import { modals } from '@mantine/modals'
import {FiUploadCloud} from 'react-icons/fi'
import { useDisclosure } from '@mantine/hooks';
import { useGetPhotoQuery } from "../redux/api/mediaApi";
import Loading from "./Loading";



const ProfileEdit = () => {

  const token = Cookies.get('token')
  const user = useSelector((state)=> state.profile.user)
  const content = useSelector((state)=> state.profile.data)
  const password = useSelector((state)=> state.profile.password)
  const {id} = useParams()
  const forUser = {token,id}
  const {currentData} = useGetSingleUserQuery(forUser)
  const [updateProfile] = useUpdateProfileMutation()
  const [changePassword] = useChangePassswordMutation()
  const getPhoto = useGetPhotoQuery(token)
  const dispatch = useDispatch()
  const [selectfoto,setSelectfoto] = useState()
  console.log(user);
  console.log(currentData );
  console.log(password);
  console.log(getPhoto);
  const [opened, { open, close }] = useDisclosure(false);


  const check =()=>{
    const male = document.querySelector('.male')
    const female = document.querySelector('.female')
    if(male != undefined && female != undefined){
      if(content?.gender == 'male'){
        male.checked = true
        female.checked = false
      }else{
        male.checked = false
        female.checked = true
      }
    }

  }

  useEffect(()=>{
    dispatch(addUser(currentData))
    dispatch(addName(currentData?.name))
    dispatch(addEmail(currentData?.email))
    dispatch(addGender(currentData?.gender))
    dispatch(addPhone_number(currentData?.phone_number))
    dispatch(addAddress(currentData?.address))
    dispatch(addRole(currentData?.role))
    dispatch(addDateOfBirth(currentData?.date_of_birth))
    dispatch(addPhoto(currentData?.photo))

    check()
    
  },[currentData])

  console.log(content);

  const MySwal = withReactContent(Swal)

  const save = async()=>{
   
      if(password.current_password != null && password.password != null && password_confirmation != null){
        const forPassword = {token,password}
        const pd = await changePassword(forPassword)
        console.log(pd);
        console.log(forPassword);
      }

      const forUpdate = { id,token,content}
      const {data} = await updateProfile(forUpdate)
      
      console.log(data);
      if( data ){
        
        console.log(user);
        const Toast = MySwal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          padding : '10px 10px 10px',
          color : '#ffffff',
          background : '#393d3d',
          timer: 3000,
          customClass : {
              timerProgressBar : 'progress-bar'
          },
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'successfully updated'
        })
      }else if(pd?.message){
        const Toast = MySwal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          padding : '10px 10px 10px',
          color : '#ffffff',
          background : '#393d3d',
          timer: 3000,
          customClass : {
              timerProgressBar : 'progress-bar'
          },
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }

        })

        Toast.fire({
          icon: 'success',
          title: pd.message
        })
      }
  }

  const selectPhoto = ()=>{
        
    dispatch(addPhoto(selectfoto.url))
    console.log('mm');
    modals.close('modal-brand')
  }
    
  

  return (
    <div className=' flex-1 bg-[#202124] min-h-[110vh] relative'>

        <Modal opened={opened} className=' myModal-inner' onClose={close} id='modal-brand' title={'Select an image '}  size="xl" >
            <div className="w-full h-full flex flex-col items-center gap-10 p-5 bg-gray-900">
                <div className=" flex flex-wrap w-full gap-5 items-center ">
                    {/* Upload img start */}
                    {/* <div className=' border border-dashed w-[160px] h-[150px] relative border-gray-200 rounded cursor-pointer bg-gray-700'>
                        <div className=' text-gray-200 text-lg text-center my-[40px]'>
                            <FiUploadCloud className=' inline text-4xl'/>
                            <p className=' mt-2'>Upload Image</p>
                        </div>
                        <input type='file' className=' absolute w-full h-full opacity-0 top-0 left-0 ' />
                            {/* Upload img end */}
                    {/* </div>  */}
                    {
                        getPhoto?.currentData?(getPhoto.currentData.data.map((i)=>(<div key={i.id}>
                            <div className={`w-[160px] h-[150px] ${ selectfoto?.id == i.id ? 'border border-gray-700 p-1' : null} rounded-lg overflow-hidden`} onClick={()=> setSelectfoto(i)}>
                                <img src={`${i.url}`} className="w-full h-full object-cover object-center rounded-lg" alt="" />
                            </div>
                        </div>))
                        ):(
                          <div className=' flex w-full min-h-[150px] justify-center items-center'>
                                <div className=' relative'>
                                    <div className=' w-[50px] h-[50px] rounded-full z-0  bg-[#4381b4] loading'></div>
                                    <div className=' w-[45px] h-[45px] absolute right-[0.15rem] top-[0.173rem] bg-[#202124] rounded-full z-50'>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <Group className=' w-full'>
                    <Button onClick={close} unstyled className=' ms-auto'>
                        <div className=" px-4 py-2 font-semibold text-[16px] myBlueBtn ml-auto" onClick={()=>selectPhoto()}>
                            insert
                        </div>
                    </Button>
                </Group>
            </div>
        </Modal>
        {/* breadcrumb & btn */}
        <div className=' flex justify-between p-5 pb-0 px-6 items-center'>
            <div>
                <h1 className=' text-2xl font-medium text-white'>Profile</h1>
                <p className=' text-gray-400 mt-1 text-xs font-medium'>Profile/My Account /Information</p>
            </div>
            <div>
                <Link to={'/user-profile'}>
                <button className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '>My Profile</button>
                </Link>
            </div>
        </div>
        {
          currentData?(
            <div>
              <div className=' mt-[100px] bg-[#171717] mx-6'>
        {/* img */}
          <div className=' flex justify-between items-center px-6 '>
              <div className=' flex gap-5 items-center  ps-14 '>
                  <div className='relative'>
                      <div style={{width : '180px',height:'180px'}} className=' rounded-full overflow-hidden bg-slate-300 mt-[-50px] z-0'>
                          {
                            user?.photo?(<img src={user.photo} alt="" className=' h-full w-full object-cover z-10'/>) : (<img src={selectfoto?.url} alt="" className=' w-full h-full object-cover z-10'/>)
                          }
                          <img src={user} alt="" className='myImg'  />
                      </div>
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
          <Tabs color="teal" unstyled defaultValue="first">
        <Tabs.List className=' tab-list  '>
          <Tabs.Tab value="first" icon={<HiOutlineHome className=' text-blue-400'/>} >
            <p className=' text-sm mlb text-gray-400'>Personal</p>
          </Tabs.Tab>
          {/* <Tabs.Tab value="second" icon={<HiOutlineHome className=' text-blue-400'/>} >
          <p className=' text-sm mlb text-gray-400'>Login Information</p>
          </Tabs.Tab> */}
          <Tabs.Tab value="third" icon={<HiOutlineHome className=' text-blue-400'/>} >
          <p className=' text-sm mlb text-gray-400'>Password</p>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first" className=' h-[700px]'>
          <div>
            <div className=' flex py-4 text-gray-200 items-center font-medium'>
              <div className=' w-48 font-semibold text-gray-400'>Name</div>
              <div className=' flex-1'>
                  <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-4/6 py-2 px-3' placeholder={user?.name} onChange={(e)=>dispatch(addName(e.target.value))}/>
              </div>
            </div>
            <div className=' flex py-4 text-gray-200 items-center font-medium'>
              <div className=' w-48 font-semibold text-gray-400'>Phone</div> 
              <div className=' flex-1'>
                  <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-4/6 py-2 px-3' placeholder={user?.phone_number} onChange={(e)=>dispatch(addPhone_number(e.target.value))} />
              </div>
            </div>
            <div className=' flex py-4 text-gray-200 items-center font-medium'>
              <div className=' w-48 font-semibold text-gray-400'>Gender</div>
              <div className=' flex-1'>
                  <div className=' flex justify-start items-center'>
                    <div className=' me-4 flex items-center'>
                      <input type="radio" id='male' name='gender' className={`male opacity-0 absolute`}  onClick={(e)=>dispatch(addGender('male'))}/>
                      <span className=' fakeRadio me-2'></span>
                      <label htmlFor="male" className=' text-gray-500'>male</label>
                    </div>
                    <div className=' flex items-center'>
                      <input type="radio" id='female' name='gender' className='female absolute opacity-0 ' onClick={(e)=> dispatch(addGender('female'))} />
                      <span className=' fakeRadio me-2'></span>
                      <label htmlFor="female" className='  text-gray-500'>female</label>
                    </div>
                  </div>
                  
              </div>
            </div>
            <div className=' flex py-4 text-gray-200 items-center font-medium'>
              <div className=' w-48 font-semibold text-gray-400'>Email</div> 
              <div className=' flex-1'>
                  <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-4/6 py-2 px-3' placeholder={user?.email} onChange={(e)=>dispatch(addEmail(e.target.value))}/>
              </div>
            </div>
            <div className=' flex py-4 text-gray-200 items-start font-medium'>
              <div className=' w-48 font-semibold text-gray-400'>Address</div> 
              <div className=' flex-1'>
                  <textarea className=' bg-[#202124] border-2 resize-none border-[#313337] rounded text-slate-400 outline-none w-4/6 py-2 px-3 h-[100px]' placeholder={user?.address} onChange={(e)=>dispatch(addAddress(e.target.value))}/>
              </div>
            </div>
            <Group position="right" unstyled className=' ms-[200px] w-[200px] myBrandModal h-[60px] mt-4'>
                <Button onClick={open}>
                    <div className=' w-full h-[100px] relative border-gray-200 rounded cursor-pointer bg-gray-700'>
                        <div className={`text-gray-200 text-lg font-light text-center py-8 `}>
                            <AiOutlinePlus className=' inline'/> <span>Edit profile image</span>
                        </div>
                        {/* <input type='file' className=' absolute w-full h-full opacity-0 top-0 left-0 uploadImgInput hidden ' /> */}
                    </div>
                </Button>
            </Group>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="third" pt="xs" className=' h-[400px]' >
        <div>
            <div className=' flex py-4 text-gray-200 items-center font-medium'>
              <div className=' w-48 font-semibold text-gray-400'>Current Password</div>
              <div className=' flex-1'>
                <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-4/6 py-2 px-3' onChange={(e)=>dispatch(addCurrentP(e.target.value))} />
                
              </div>
            </div>
            <div className=' flex py-4 text-gray-200 items-center font-medium'>
              <div className=' w-48 font-semibold text-gray-400'>New Password</div> 
              
              <div className=' flex-1'>
                <Tooltip title="minimum 8 characters required " arrow={true} disableHoverListener={true} disableInteractive={true}>
                  <input type="text"  className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-4/6 py-2 px-3' onChange={(e)=>dispatch(addp(e.target.value))} />
                </Tooltip>
              </div>

            </div>
            <div className=' flex py-4 text-gray-200 items-center font-medium'>
              <div className=' w-48 font-semibold text-gray-400'>Password Confirmation</div> 
              <div className=' flex-1'>
                <input type="text"  className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-4/6 py-2 px-3' onChange={(e)=>dispatch(addPConfrim(e.target.value))} />

              </div>

            </div>
          </div>
        </Tabs.Panel>
      </Tabs>
          </div>
        </div>
        <div className=' border border-b-0 border-t border-[#404044] myfooter w-full'>
            {/* <div className=' flex bg-[#121212] ps-24 py-4'>
                {/* <button className=' px-5 py-2 font-semibold text-[#7f8189] border me-4 text-xs uppercase border-[#646569] rounded'>Cancel</button> */}
                {/* <button className=' px-5 py-2 font-semibold text-[#292929] bg-[#8ab4f8] text-xs uppercase  rounded' onClick={()=>save()}>Save</button> */}
            {/* </div> */}
           <div className=' bg-[#121212] ps-6 py-4'>
              <button className=' px-5 py-2 font-semibold text-[#292929] bg-[#8ab4f8] text-xs uppercase  rounded' onClick={()=>save()}>Save</button>
           </div>
        </div>
            </div>
          ):(<Loading/>)
        }
    </div>
  );
};

export default ProfileEdit;
