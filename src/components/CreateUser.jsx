import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import {FiUploadCloud} from 'react-icons/fi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useGetPhotoQuery } from '../redux/api/mediaApi';
import Loading from './Loading';
import { PiUserFocusFill } from 'react-icons/pi';
import { BsCalendarCheck } from 'react-icons/bs';
import { addUserEmail, createPassword, createPhone, createPhoto, createRole } from '../redux/services/userSlice';
import { useAddUserMutation } from '../redux/api/userApi';
import { TfiClose } from 'react-icons/tfi';
import Personal from './Personal';
import Tooltip from '@mui/material/Tooltip';


const CreateUser = () => {

    const token = Cookies.get('token')
    const [active,setActive] = useState('one')
    
    const [opened, { open, close }] = useDisclosure(false);
    const getPhoto = useGetPhotoQuery(token)
    const [selectfoto,setSelectfoto] = useState()
    const [isNull,setIsNull] = useState(true)
    const dispatch = useDispatch()
    const nav = useNavigate()
    const content = useSelector((state)=>state.userSlice.user)
    const [createUser] = useAddUserMutation()
   
    console.log(getPhoto)
    console.log(content)

    const MySwal = withReactContent(Swal)

    const submit = async(e)=>{
        const d = {content,token}
        const dt = await createUser(d)
        console.log(dt);
        console.log(d);
        console.log(content);
        if( dt?.data){
            
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
                title: ' successfully created a new user'
              })

            // setTimeout(()=> nav(`/user-profile/${id}`),3500)
           
        }
            
    }

    const isValidate = (e)=>{
        for( const property in content){
            content[property] == null || content[property] == '' ? setIsNull(true) : setIsNull(false)
            console.log(isNull);
            if(isNull == true){
                Swal.fire({
                    title: 'Try again!!',
                    text: "All input fileds are required",
                    icon: 'warning',
                    width : '400px',
                    padding : '0px 10px 20px',
                    color : '#ffffff',
                    background : '#393d3d',
                })
            }else{
                submit();
            }
        }
        
    }

    const selectPhoto = ()=>{
        dispatch(createPhoto(selectfoto.url))
    }

    const selectFromLocal = (e)=>{
        console.dir(e.target)
        dispatch(createPhoto(e.target.value))
    }

    const isOneOrTwo = (a)=>{
        if(a == 'one'){
            console.log('one');
            return(
                <Personal/>
            )
        }else if(a == 'two'){
            console.log('two');
            return(
                <form autoComplete='off'>
                    <div className=' flex py-4 text-gray-200 items-center font-medium'>
                        <label className=' w-48 font-medium text-gray-200'>Email</label> 
                        <div className=' flex-1'>
                        <input type='email' className=' bg-[#202124] border-2 focus:border-gray-500   border-[#313337] rounded text-slate-200 outline-none w-full py-2 px-3 ' required defaultValue={content.email} onChange={(e)=>dispatch(addUserEmail(e.target.value))} />
                        </div>
                    </div>
                    <div className=' flex py-4 text-gray-200 items-center font-medium'>
                    <div className=' w-48 font-medium text-gray-200'>Position</div> 
                    <div className=' flex-1'>
                        <input type="text" className=' bg-[#202124] border-2 focus:border-gray-500  border-[#313337] rounded text-slate-200 outline-none w-full py-2 px-3' required defaultValue={content.role} onChange={(e)=>dispatch(createRole(e.target.value))}/>
                    </div>
                    </div>
                    <div className=' flex py-4 text-gray-200 items-center font-medium'>
                        <div className=' w-48 font-medium text-gray-200'>Phone</div> 
                        <div className=' flex-1'>
                         <Tooltip title="minimum 11 characters required " arrow={true} disableHoverListener={true} disableInteractive={true}>
                        <input type='number' className=' bg-[#202124] border-2 focus:border-gray-500  border-[#313337] rounded text-slate-200 outline-none w-full py-2 px-3 ' required defaultValue={content.phone_number} onChange={(e)=>dispatch(createPhone(e.target.value))} />
                        </Tooltip>
                        </div>
                    </div>
                    <div className=' flex py-4 text-gray-200 items-center font-medium'>
                    <div className=' w-48 font-medium text-gray-200'>Password</div> 
                    <div className=' flex-1'>
                    <input type='password' className=' bg-[#202124] border-2 focus:border-gray-500  border-[#313337] rounded text-slate-200 outline-none w-full py-2 px-3 ' required onChange={(e)=>dispatch(createPassword(e.target.value))} />
                    </div>
                    </div>
                </form>
            )
        }else{
            console.log('three');
            return(
                <form className='p-6 w-[100%] mt-[100px] flex items-center justify-center bg-[#171717] min-h-[200px] rounded border border-gray-700'>
                    {
                        content.photo != null && selectfoto ? <div className='  w-[200px] h-[200px] rounded-full bg-gray-700 border-2 relative border-blue-400 z-0 o border-dashed'>
                        <div className=' w-full h-full rounded-full overflow-hidden'>
                        <TfiClose className=' absolute top-[10px] right-[7px] bg-slate-500 text-3xl p-1 font-bold text-gray-200 cursor-pointer' onClick={()=>setSelectfoto(null)}/>
                        <img src={selectfoto?.url} className=' w-full h-full top-0  left-0 object-cover z-20' alt="" />
                        </div>
                        </div>  : <div className='  w-[200px] h-[200px] rounded-full bg-gray-700 overflow-hidden border-2 relative border-blue-400 z-0 o border-dashed'>
                        <Group position="center" className=' myModal-user w-full h-full absolute z-10'>
                        <Button onClick={open} className='w-full h-full '>
                        <PiUserFocusFill className=' text-6xl text-gray-300 absolute top-16 left-[67px]'/>
                        </Button>
                        </Group>
                        </div>
                        
                    }
                
                </form>
            )
        }
    }
    

    

  return (
    <div className=' flex-1 bg-[#202124] p-5 px-6 min-h-[120vh] flex flex-col relative '>
        
        <Modal opened={opened} className=' myModal-inner' onClose={close} id='modal-brand' title={'Select an image '}  size="xl" >
            <div className="w-full h-full flex flex-col justify-center items-center gap-10 p-5 bg-gray-900">
                <div className=" flex flex-wrap w-full gap-5 justify-start items-center ">
                    {/* Upload img start */}
                    <div className=' border border-dashed w-[160px] h-[150px] relative border-gray-200 rounded cursor-pointer bg-gray-700'>
                        <div className=' text-gray-200 text-lg text-center my-[40px]'>
                            <FiUploadCloud className=' inline text-4xl'/>
                            <p className=' mt-2'>Upload Image</p>
                        </div>
                        <input type='file' className=' absolute w-full h-full opacity-0 top-0 left-0 ' onChange={(e)=>selectFromLocal(e)} />
                            Upload img end
                    </div>
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
        <div className=''>
            <div className=' flex justify-between items-center'>
                <div>
                    <h1 className=' text-2xl font-medium text-white'>User</h1>
                    <p className=' text-gray-400 mt-1 font-medium text-xs'>User / create user</p>
                </div>
                <div >
                    <Link to={'/user-overview'} >
                    <button className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '>User list</button>
                    </Link>
                </div>
            </div>
        </div>
        {
           
            <div className=' mt-12 flex h-[500px]'>
                <div className="p-6 w-[60%] bg-[#171717] rounded h-[500px]">
                {
                 isOneOrTwo(active)
                }  
                </div>
            <div className=' flex-1 flex flex-col ps-20'>
                <div>
                    <div className=' relative '>
                        <div className=' absolute pt-12'>
                            <button className={` rounded-full ${active == 'one' ? 'bg-blue-900 text-gray-300' :'bg-gray-950 text-blue-400'} py-4 px-6 me-4 text-lg font-semibold border border-blue-900`} onClick={(e)=> setActive('one')}>1</button>
                            <span className=' text-gray-300'>Personal</span>
                            <div className=' divider h-[100px] w-[1px] absolute left-[30px] top-[120px] border-e border-gray-700' ></div>
                        </div>
                        <div className=' absolute top-[240px]'>
                            <button className={`text-blue-400 rounded-full ${active == 'two' ? 'bg-blue-900 text-gray-300' :'bg-gray-950 text-blue-400'} py-4 px-6 me-4 text-lg font-semibold border border-blue-900`} onClick={(e)=>{
                                 setActive('two')
                                }}>2</button>
                            <span className=' text-gray-300'>login info</span>
                            <div className=' divider h-[100px] w-[1px] absolute left-[30px] top-[80px] border-e border-gray-700' ></div>
                        </div>
                        <div className=' absolute top-[440px] flex '>
                        
                            <span className={`text-blue-400 rounded-full ${active == 'three' ? 'bg-blue-900 text-gray-300' :'bg-gray-950 text-blue-400'} py-4 px-6 me-4 text-lg font-semibold border border-blue-900`} onClick={(e)=> setActive('three')}>3</span>
                        <span className=' text-gray-300'>photo</span>
                        </div>
                    </div>
                </div>
                <div className=' mt-auto mb-[-80px]'>
                    {/* <button className=' px-4 py-2 text-gray-200 bg-blue-900 rounded' type='submit' onClick={(e)=>submit(e)}>Create</button> */}
                    <button className=' px-4 py-2 text-gray-200 bg-blue-900 rounded' type='submit' onClick={(e)=>isValidate(e)}>Create</button>

                </div>
            </div>
        </div>
        }
        
    </div>
  )
}

export default CreateUser