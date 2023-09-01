import React from "react";
import { Tabs } from "@mantine/core";
import ProfileTab from "../components/ProfileTab";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { FiEdit, FiPhoneCall } from "react-icons/fi";
import { PiDotFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const UpdateUser = () => {
  return (
    <div>
      <div className=" ms-[200px] bg-[#202124] p-5 px-6 min-h-screen">
        <div className=" flex justify-between items-center">
          <div>
            <h1 className=" text-2xl font-medium text-white">Profile</h1>
            <p className=" text-gray-400 mt-1 font-medium text-xs">
              Profile/My Account/Information
            </p>
          </div>
          <div>
            <button className=" px-5 py-2 bg-[#8ab4f8] rounded font-medium ">
              My Profile
            </button>
          </div>
        </div>
        <div className=" mt-[100px] bg-[#171717]">
          <div className=" flex justify-between items-center px-6 ">
            <div className=" flex gap-5 items-center  ps-14 ">
              <div className="relative">
                <div
                  style={{ width: "180px", height: "180px" }}
                  className=" rounded-full mt-[-50px]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                    alt=""
                    className=" w-28 h-28 rounded-full"
                  />
                </div>
                <Link to={"/profileEdit"}>
                  <button className=" edit text-2xl m-0 rounded-full">
                    <FiEdit />
                  </button>
                </Link>
              </div>
              <div>
                <h1 className=" text-gray-200 text-2xl font-semibold">
                  Ethan James
                </h1>
                <span className=" text-gray-400 text-xs">
                  Sale Executive/
                  <PiDotFill className=" inline text-3xl text-[#9ec1f9]" />
                  Active in 1 hour
                </span>
              </div>
            </div>
            <div className=" flex text-white gap-2 items-center">
              <div className=" bg-gray-800 p-2 rounded-full">
                <AiOutlineMail />
              </div>
              <div className=" bg-gray-800 p-2 rounded-full">
                <FiPhoneCall />
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
      </div>
    </div>
  );
};

export default UpdateUser;
