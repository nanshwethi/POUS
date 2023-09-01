import {
  Anchor,
  Breadcrumbs,
  Button,
  Group,
  Stepper,
  Tabs,
} from "@mantine/core";

import React, { useRef, useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FiEdit, FiPhoneCall } from "react-icons/fi";
import { PiDotFill } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import { useAddUserMutation } from "../redux/api/userApi";

const CreateUser = () => {

  const inputRef=useRef(null);
  const [image,setImage]=useState("");
  const handleImageClick=()=>{
    
    inputRef.current.click();
  };
  const handleImageChange=(event)=>{
    const file=event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  }
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

 


  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [phone_number,setPhoneNumber]=useState("");
  const [address,setAddress]=useState("");
  const [gender,setGender]=useState("");
  const [date_of_birth,setDateOfBirth]=useState("");
  const [role,setRole]=useState("");
  const [photo,setPhoto]=useState("");
const [addUser]=useAddUserMutation();
const addUserHandler=async(e)=>{
  e.preventDefault();
  const user={name,email,password,phone_number,address,gender,date_of_birth,role,photo};
  const data=await addUser(user);
  console.log(data);
  
}

const handleClick=()=>{
  const MySwal = withReactContent(Swal)

MySwal.fire({
  title: <p>Completed</p>,
  icon: 'success',
  text: 'SuccessFul',
  footer: '<a href="">Why do I have this issue?</a>'
}).then(() => {
  return MySwal.fire(<p>Shorthand works too</p>)
})
}
  
  const items = [
    { title: "User", href: "/userOverview" },
    { title: "CreateUser", href: "/createUser" },
  ].map((item, index) => (
    <Anchor className=" " href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  return (
    <div>
      <div className="font-roboto bg-[--base-color]">
        <div className="">
          <div className=" mx-7 flex justify-between items-center">
            <div className="">
            <h1 className=" text-xl text-white">User</h1>
            <div className=" mt-2">
              <Breadcrumbs>{items}</Breadcrumbs>
            </div>
            </div>
            <div className=" ">
                <Link to={'/userOverview'} className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '>User List</Link>
            </div>
          </div>
          <div>
        <form onSubmit={addUserHandler}>
          
          <Stepper
            active={active}
            className=" mx-20 flex justify-around items-center flex-row-reverse"
            onStepClick={setActive}
            orientation="vertical"
            breakpoint="sm"
          >
            <Stepper.Step
              label="First step"
              className=" text-white"
              description="Create an account"
            >
              <div className=" w-[680px] bg-[#161618]">
                <div className="h-full w-[880px] px-5">
                  <div className=" flex py-4 text-gray-200 items-center font-medium">
                    <div className=" w-48 font-semibold text-gray-400">
                      Name
                    </div>
                    <div className=" flex-1">
                      <input
                        type="text"
                        className=" bg-[#202124] border-2 border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3"
                        value={name}
                        onChange={e =>setName(e.target.value)}
                        

                      />
                    </div>
                  </div>

                  <div className=" flex py-4 text-gray-200 items-center font-medium">
                    <div className=" w-48 font-semibold text-gray-400">
                      Email
                    </div>
                    <div className=" flex-1">
                      <input
                        type="text"
                        className=" bg-[#202124] border-2 border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3"
                        value={email}
                        onChange={e =>setEmail(e.target.value)}
                       
                      />
                    </div>
                  </div>
                  <div className=" flex py-4 text-gray-200 items-center font-medium">
                    <div className=" w-48 font-semibold text-gray-400">
                      Password
                    </div>
                    <div className=" flex-1">
                      <input
                        type="text"
                        className=" bg-[#202124] border-2 border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3"
                        value={password}
                        onChange={e =>setPassword(e.target.value)}
                        
                      />
                    </div>
                  </div>
                  <div className=" flex py-4 text-gray-200 items-center font-medium">
                    <div className=" w-48 font-semibold text-gray-400">
                      Phone Number
                    </div>
                    <div className=" flex-1">
                      <input
                      value={phone_number}
                      onChange={e =>setPhoneNumber(e.target.value)}
                        type="text"
                        className=" bg-[#202124] border-2 border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3"
                      />
                    </div>
                  </div>
                  <div className=" flex py-4 text-gray-200 items-center font-medium">
                    <div className=" w-48 font-semibold text-gray-400">
                      Address
                    </div>
                    <div className=" flex-1">
                      <input
                      value={address}
                      onChange={e =>setAddress(e.target.value)}
                        type="text"
                        className=" bg-[#202124] border-2 border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3"
                      />
                    </div>
                  </div>
                  <div className=" flex py-4 text-gray-200 items-center font-medium">
                    <div className=" w-48 font-semibold text-gray-400">
                      Gender
                    </div>
                    <div className=" flex-1">
                      <div className=" flex justify-start items-center">
                        <div className=" me-4 flex items-center">
                          <input
                          value={gender}
                          onChange={setGender}
                            type="radio"
                            id="male"
                            name="gender"
                            className=" male opacity-0 absolute"
                          />
                          <span className=" fakeRadio me-2"></span>
                          <label htmlFor="male" className=" text-gray-500">
                            male
                          </label>
                        </div>
                        <div className=" flex items-center">
                          <input
                          value={gender}
                          onChange={setGender}
                            type="radio"
                            id="female"
                            name="gender"
                            className="female absolute opacity-0 "
                          />
                          <span className=" fakeRadio me-2"></span>
                          <label htmlFor="female" className="  text-gray-500">
                            female
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" flex py-4 text-gray-200 items-start font-medium">
                    <div className=" w-48 font-semibold text-gray-400">
                      Date Of Birth
                    </div>
                    <div className=" flex-1">
                      <textarea className=" bg-[#202124] border-2 resize-none border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3 h-[100px]"
                      value={date_of_birth} 
                      onChange={e =>setDateOfBirth(e.target.value)}
                      />

                      
                    </div>
                  </div>

                  
                </div>
              </div>
            </Stepper.Step>
            <Stepper.Step
              label="Second step"
              className=" text-white"
              description="Verify email"
            >
              <div className=" w-[680px] bg-[#161618]">
                <div className="h-[400px] w-[880px] px-5">
                  <div className=" flex py-4 text-gray-200 items-center font-medium">
                    <div className=" w-48 font-semibold text-gray-400">
                      Position
                    </div>
                    <div className=" flex-1">
                      <input
                      value={role}
                      onChange={e =>setRole(e.target.value)}
                        type="text"
                        className=" bg-[#202124] border-2 border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3"
                      />
                    </div>
                  </div>
                  <div className=" flex py-4 text-gray-200 items-center font-medium">
                    <div className=" w-48 font-semibold text-gray-400">
                      Email
                    </div>
                    <div className=" flex-1">
                      <input
                        type="text"
                        className=" bg-[#202124] border-2 border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3"
                      />
                    </div>
                  </div>
                  <div className=" flex py-4 text-gray-200 items-center font-medium">
                    <div className=" w-48 font-semibold text-gray-400">
                      Password
                    </div>
                    <div className=" flex-1">
                      <input
                        type="text"
                        className=" bg-[#202124] border-2 border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3"
                      />
                    </div>
                  </div>

                  <div className=" flex py-4 text-gray-200 items-center font-medium">
                    <div className=" w-48 font-semibold text-gray-400">
                      ConFirm Password
                    </div>
                    <div className=" flex-1">
                      <input
                        type="text"
                        className=" bg-[#202124] border-2 border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Stepper.Step>
            <Stepper.Step
              label="Final step"
              className=" text-white"
              description="Get full access"
            >
              <div className=" w-[680px] bg-[#161618]">
                <div className=" flex justify-center items-center h-[400px]">
                  <div className="">
                    <h1 className=" text-white text-center mb-5 font-semibold">
                      Upload Photo
                    </h1>
                   
                      <div className=" border-2 border-blue-400 border-dashed rounded-full w-[180px] h-[180px] flex justify-center items-center">
                        <div className="" onClick={handleImageClick}>
                          {image ? (<img src={URL.createObjectURL(image)} className=" rounded-full w-[170px] h-[170px]" />):(<img className=" rounded-full w-[170px] h-[170px]" src="https://images.unsplash.com/photo-1692731753263-c8b216bb7616?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"/>)}
                          <input type="file" ref={inputRef} 
                          onChange={handleImageChange} className=" hidden"/>

                          
                        </div>

                      </div>
                    
                  </div>
                </div>
              </div>
            </Stepper.Step>
            <Stepper.Completed>
            
        
        <div className=' bg-[#161618]'>
            <div className=' mt-10 flex justify-center items-center px-6'>
                <div className=' flex gap-5 items-center  ps-14 '>
                    <div className='relative'>
                        <div style={{width : '130px',height:'130px'}} className=' rounded-full overflow-hidden mt-[-50px]'>
                            <img src={"https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"} alt="" className='myImg'  />
                        </div>
                        <Link to={'/profile-edit'}>
                            <button className=' edit text-2xl m-0 rounded-full'><FiEdit/></button>
                        </Link>
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
            <div className=" mt-2">
            <Tabs color="teal" unstyled="true" defaultValue="first">
              <Tabs.List>
                <Tabs.Tab
                  value="first"
                  icon={<HiOutlineHome className=" text-blue-400" />}
                >
                  <p className=" text-sm mlb text-gray-400">Personal</p>
                </Tabs.Tab>
                <Tabs.Tab
                  value="second"
                  icon={<HiOutlineHome className=" text-blue-400" />}
                >
                  <p className=" text-sm mlb text-gray-400">
                    Login Information
                  </p>
                </Tabs.Tab>
                <Tabs.Tab
                  value="third"
                  icon={<HiOutlineHome className=" text-blue-400" />}
                >
                  <p className=" text-sm mlb text-gray-400">Password</p>
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="first" className="  h-[200px]">
                <div>
                  <div className=" flex py-4 text-gray-200 items-center font-medium">
                    <div className=" w-48 font-semibold text-gray-400">
                      Date Of Birth
                    </div>
                    <div className=" ">: 12/4/1999</div>
                  </div>
                  <div className=" flex  text-gray-200 items-center font-medium">
                    <div className=" w-48 font-semibold text-gray-400">
                      Gender
                    </div>
                    <div className=" ">: male</div>
                  </div>
                  <div className=" flex py-4 text-gray-200 items-center font-medium">
                    <div className=" w-48 font-semibold text-gray-400">
                      Address
                    </div>
                    <div className=" ">: No2/Baho Street/Bahan/Yangon</div>
                  </div>
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="second" pt="xs" className=" h-[200px]">
                <div>
                  <div className=" flex py-4 text-gray-200 items-center font-medium">
                    <div className=" w-48 font-semibold text-gray-400">
                      Phone
                    </div>
                    <div className="">: 09856787</div>
                  </div>
                  <div className=" flex  text-gray-200 items-center font-medium">
                    <div className=" w-48 font-semibold text-gray-400">
                      Position
                    </div>
                    <div className="">: Sale Excutive</div>
                  </div>
                  <div className=" flex py-4 text-gray-200 items-center font-medium">
                    <div className=" w-48 font-semibold text-gray-400">
                      Mail
                    </div>
                    <div className="">: ethan@gmail.com</div>
                  </div>
                </div>
              </Tabs.Panel>

              <Tabs.Panel
                value="third"
                pt="xs"
                className=" h-[200px]"
              ></Tabs.Panel>
            </Tabs>
          </div>
        </div>
    
            </Stepper.Completed>
          </Stepper>

          <button className=" bg-blue-400 ">Hello</button>
          </form>
          </div>
          <Group position="center" className=" flex justify-around" mt="xl">
            <Button
              className=" bg-blue-500 text-white hover:bg-blue-700 mb-4"
              onClick={prevStep}
            >
              Back
            </Button>
             <Button
              variant="default"
              className=" bg-blue-500 text-white hover:bg-blue-700 mb-4"
              onClick={nextStep}
            >
              Next step
            </Button>
            
          </Group>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
// CreateUser.description="Add simple upload functionally"
