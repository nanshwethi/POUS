import React from "react";
import { Tabs } from "@mantine/core";

const UpdateUser = () => {
  return (
    <div>
      <div className=" ">
        <div className=" h-screen">
          {/* bg-[#3F4245] */}
          <div className="flex justify-between item-center">
            <div className=" text-start">
              <h1 className=" text-xl font-semibold">User</h1>
              <div className=" text-sm">User/Overview</div>
            </div>
            <button className=" bg-[#8AB4F8] w-24 h-10 rounded text-[#202124]">
              User List
            </button>
          </div>
          <div className=" w-3/4">
            {/* bg-[#161618] */}
            <div className=" flex justify-evenly items-center">
              <div className="">
                <img
                  src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                  className=" w-28 h-28 rounded-full"
                />
              </div>
              <div className="">
                <h1 className=" text-xl">Ethan James</h1>
                <p className=" text-sm">Sale Executive</p>
              </div>
              <div className=" ">
                <i className="">
                  {/* <IoMailOpenOutline/> */}
                  {/* <BiPhoneCall/> */}
                </i>
              </div>
            </div>

            <Tabs defaultValue="chat" className=" mt-10" inverted>
              <Tabs.List>
                <Tabs.Tab value="chat" className=" mr-6">
                  Chat
                </Tabs.Tab>
                <Tabs.Tab value="gallery" className=" mr-6">
                  Gallery
                </Tabs.Tab>
                <Tabs.Tab value="account">Account</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="chat" pb="xs">
                <ul className=" text-start mt-5">
                  <li className="">Phone</li>
                  <li className="">Mail</li>
                  <li className="">Address</li>
                  <li className="">Gender</li>
                  <li className="">Date Of Birth</li>
                </ul>
              </Tabs.Panel>
              <Tabs.Panel value="gallery" pb="xs">
                Gallery panel
              </Tabs.Panel>
              <Tabs.Panel value="account" pb="xs">
                Account panel
              </Tabs.Panel>
            </Tabs>

            {/* <ul className=" ">
				<li className=''>Phone</li>
				<li className=''>Mail</li>
				<li className=''>Address</li>
				<li className=''>Gender</li>
				<li className=''>Date Of Birth</li>


			</ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
