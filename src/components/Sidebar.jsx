// import { BiTrash } from "react-icons/bi";
// import { BiSolidUserDetail } from "react-icons/bi";
// import { BiTrash } from "react-icons/bi";
// import { BiSolidUserDetail } from "react-icons/bi";
// import { BiTrash } from "react-icons/bi";

import FilterOutlinedIcon from "@mui/icons-material/FilterOutlined";
import { MdOutlineLogout } from "react-icons/md";
import { PiUserCirclePlusBold } from "react-icons/pi";
import { TbClipboardList } from "react-icons/tb";
import { PiStorefrontDuotone } from "react-icons/pi";
import { FiHome } from "react-icons/fi";
import { PiUserSquareBold } from "react-icons/pi";

import { Accordion } from "@mantine/core";
import { Link } from "react-router-dom";

// import {  useContextCustom } from '../context/stateContext'
//import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useLogoutMutation } from "../redux/api/authApi";
// import { removeUser } from "../redux/services/authSlice";
// import Cookies from "js-cookie";
// import { useState } from "react";

const Sidebar = () => {
  // const theme = useMantineTheme();
  // const getColor = (color) =>
  //   theme.colors[color][theme.colorScheme === "dark" ? 5 : 7];

  // const {showSidebar}=useContextCustom();

  // const token = Cookies.get("token");
  // console.log(token);

  // const [logout] = useLogoutMutation();
  // const nav = useNavigate();
  // const dispatch = useDispatch();

  // const logoutHandler = async () => {
  //   const { data } = await logout(token);
  //   dispatch(removeUser());
  //   if (data?.success) {
  //     nav("/login");
  //   }
  //   console.log(data);
  // };

  return (
    <div
      className={`w-[200px] h-full border-r-2 border-r-[--sidebar-color] z-20 `}
    >
      <div>
        <ul className=" ">
          <li className=" li-bg ">
            <FiHome className=" mr-4" size={"1.5rem"} />
            <p>Overview</p>
          </li>
          <Accordion variant="contained">
            <Accordion.Item value="photos">
              <Accordion.Control
                className="accordion-bg "
                icon={<PiStorefrontDuotone size={"1.8rem"} />}
              >
                <p className="text-base font-['Montserrat'] font-medium">
                  Sale
                </p>
              </Accordion.Control>
              <Accordion.Panel className="accordion-bg li-text">
                <p className="text-sm font-['Montserrat'] font-medium">
                  Cashier
                </p>
              </Accordion.Panel>
              <Accordion.Panel className="accordion-bg li-text ">
                <p className="text-sm font-['Montserrat'] font-medium">
                  Recent
                </p>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="print">
              <Accordion.Control
                className="accordion-bg "
                icon={<TbClipboardList size={"1.8rem"} />}
              >
                <p className="text-base font-['Montserrat'] font-medium">
                  Inventory
                </p>
              </Accordion.Control>
              <Accordion.Panel className="accordion-bg li-text">
                <p className="text-sm font-['Montserrat'] font-medium">
                  Products
                </p>
              </Accordion.Panel>
              <Accordion.Panel className="accordion-bg li-text">
                <p className="text-sm font-['Montserrat'] font-medium">
                  Add Product
                </p>
              </Accordion.Panel>
              <Accordion.Panel className="accordion-bg li-text">
                <p className="text-sm font-['Montserrat'] font-medium">
                  Stock Control
                </p>
              </Accordion.Panel>
              <Accordion.Panel className="accordion-bg li-text">
                <p className="text-sm font-['Montserrat'] font-medium">
                  Manage Brand
                </p>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="camera">
              <Accordion.Control
                className="accordion-bg "
                icon={<PiUserCirclePlusBold size={"1.8rem"} />}
              >
                <p className="text-base font-['Montserrat'] font-medium">
                  User
                </p>
              </Accordion.Control>
              <Accordion.Panel className="accordion-bg li-text">
                <p className="text-sm font-['Montserrat'] font-medium">
                  Overview
                </p>
              </Accordion.Panel>
              <Accordion.Panel className="accordion-bg li-text">
                <p className="text-sm font-['Montserrat'] font-medium">
                  Create User
                </p>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Link to={'/media'}>

          <li className="mt-1 li-bg border-b-[1px] border-b-[--border-color]">
            <FilterOutlinedIcon className=" mr-3" size={"1.8rem"} />
            <p>Media</p>
          </li>
          </Link>
          <Accordion>
            <Accordion.Item value="camera">
              <Accordion.Control
                className="accordion-bg "
                icon={<PiUserSquareBold size={"1.8rem"} />}
              >
                <p className="text-base font-['Montserrat'] font-medium">
                  Profile
                </p>
              </Accordion.Control>
              <Accordion.Panel className="accordion-bg li-text">
                <p className="text-sm font-['Montserrat'] font-medium">
                  My Account
                </p>
              </Accordion.Panel>
              <Accordion.Panel className="accordion-bg li-text">
                <p className="text-sm font-['Montserrat'] font-medium">Edit</p>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <li className=" li-bg">
            <MdOutlineLogout className=" mr-2" size={"1.8rem"} />
            <p>Logout</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

//${showSidebar? "sm:w-[50%] md:w-[270px]":"w-0 -translate-x-[300px]"}
