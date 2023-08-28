import FilterOutlinedIcon from "@mui/icons-material/FilterOutlined";
import { MdOutlineLogout } from "react-icons/md";
import { PiUserCirclePlusBold } from "react-icons/pi";
import { TbClipboardList } from "react-icons/tb";
import { PiStorefrontDuotone } from "react-icons/pi";
import { FiHome } from "react-icons/fi";
import { PiUserSquareBold } from "react-icons/pi";

import { Accordion } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import Dot from "./Dot";
import { useLogoutMutation } from "../redux/api/authApi";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/services/authSlice";
import Cookies from "js-cookie";
import { useContextCustom } from "../context/stateContext";
import { useState } from "react";

const Sidebar = () => {
  // const theme = useMantineTheme();
  // const getColor = (color) =>
  //   theme.colors[color][theme.colorScheme === "dark" ? 5 : 7];

  // const [,set]=useState(false);
  const [isActivedOverview, setIsActivedOverview] = useState(false);
  const [isActivedMedia, setIsActivedMedia] = useState(false);
  const [isActivedLogout, setIsActivedLogout] = useState(false);

  const { setCurrent } = useContextCustom();

  const token = Cookies.get("token");
  console.log(token);

  const [logout] = useLogoutMutation();
  const nav = useNavigate();
  const dispatch = useDispatch();

  const defaulLiHandler = () => {
    setIsActivedOverview(false);
    setIsActivedMedia(false);
    setIsActivedLogout(false);
  };

  const liHandler = (liname) => {
    defaulLiHandler();
    liname(true);
  };
  const logoutHandler = async () => {
    const data = await logout(token);
    dispatch(removeUser());
    if (data) {
      nav("/login");
    }
    console.log(data);
  };

  return (
    <div className=" w-[300px] sidebar-height border-r-[1px] border-r-[--border-color] z-20 ">
      <ul className=" ">
        <Link to={"/"}>
          <li className=" li-bg ">
            <FiHome
              className=" mr-4 text-[var(--secondary-color)]"
              size={"1.5rem"}
            />
            <p
              onClick={() => liHandler(setIsActivedOverview)}
              className={`${
                isActivedOverview
                  ? "text-[var(--font-color)]"
                  : "text-[var(--secondary-color)]"
              }`}
            >
              Overview
            </p>
          </li>
        </Link>
        <Accordion variant="contained">
          <Accordion.Item value="photos">
            <Accordion.Control
              className="accordion-bg  "
              icon={
                <PiStorefrontDuotone
                  className="text-[var(--secondary-color)]"
                  size={"1.8rem"}
                />
              }
            >
              <p className="text-base font-['Montserrat'] font-medium">Sale</p>
            </Accordion.Control>
            <Accordion.Panel className="accordion-bg li-text">
              <p className="text-sm font-['Montserrat'] font-medium">
                <Dot className="" />
                <Link to={'/shop'}>
                Cashier
                </Link>
              </p>
            </Accordion.Panel>
            <Accordion.Panel className="accordion-bg li-text ">
              <p className="text-sm font-['Montserrat'] font-medium">
                <Dot className="z-20" />
                <Link to={'/shop-list'}>
                Recent
                </Link>
              </p>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="print">
            <Accordion.Control
              className="accordion-bg "
              icon={
                <TbClipboardList
                  className="text-[var(--secondary-color)]"
                  size={"1.8rem"}
                />
              }
            >
              <p className="text-base font-['Montserrat'] font-medium">
                Inventory
              </p>
            </Accordion.Control>
            <Accordion.Panel className="accordion-bg li-text">
              <p className="text-sm font-['Montserrat'] font-medium">
                <Dot className="z-20" />
                <Link to={'/product'}>
                 Products
                </Link>
              </p>
            </Accordion.Panel>
            <Accordion.Panel className="accordion-bg li-text">
              <Link to={"/add-product"}>
                <p
                  onClick={() => setCurrent(1)}
                  className="text-sm font-['Montserrat'] font-medium"
                >
                  <Dot className="z-20" />
                  Add Product
                </p>
              </Link>
            </Accordion.Panel>
            <Accordion.Panel className="accordion-bg li-text">
              <p className="text-sm font-['Montserrat'] font-medium">
                <Dot className="z-20" />
                <Link to={'/stock'}>
                Stock Control
                </Link>
              </p>
            </Accordion.Panel>
            <Accordion.Panel className="accordion-bg li-text">
              <p className="text-sm font-['Montserrat'] font-medium">
                <Dot className="z-20" />
                <Link to={'/brand'}>
                  Manage Brand
                </Link>
              </p>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="camera">
            <Accordion.Control
              className="accordion-bg "
              icon={
                <PiUserCirclePlusBold
                  className="text-[var(--secondary-color)]"
                  size={"1.8rem"}
                />
              }
            >
              <p className="text-base font-['Montserrat'] font-medium">User</p>
            </Accordion.Control>
            <Accordion.Panel className="accordion-bg li-text">
              <Link to={"/user-overview"}>
                <p className="text-sm font-['Montserrat'] font-medium">
                  <Dot className="z-20" />
                  Overview
                </p>
              </Link>
            </Accordion.Panel>
            <Accordion.Panel className="accordion-bg li-text">
              <Link to={"/create-user"}>
                <p className="text-sm font-['Montserrat'] font-medium">
                  <Dot className="z-20" />
                  Create User
                </p>
              </Link>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <Link to={"/media"}>
          <li className=" li-bg ">
            <FilterOutlinedIcon
              className=" mr-3 text-[var(--secondary-color)]"
              size={"1.8rem"}
            />
            <p
              onClick={() => liHandler(setIsActivedMedia)}
              className={`${
                isActivedMedia
                  ? "text-[var(--font-color)]"
                  : "text-[var(--secondary-color)]"
              }`}
            >
              Media
            </p>
          </li>
        </Link>
        <Accordion>
          <Accordion.Item value="camera">
            <Accordion.Control
              className="accordion-bg "
              icon={
                <PiUserSquareBold
                  className="text-[var(--secondary-color)]"
                  size={"1.8rem"}
                />
              }
            >
              <p className="text-base font-['Montserrat'] font-medium">
                Profile
              </p>
            </Accordion.Control>
            <Accordion.Panel className="accordion-bg li-text">
              <Link to={"/user-profile"}>
                <p className="text-sm font-['Montserrat'] font-medium">
                  <Dot className="z-20" />
                  My Account
                </p>
              </Link>
            </Accordion.Panel>
            <Accordion.Panel className="accordion-bg li-text">
              <Link to={"/profile-edit"}>
                <p className="text-sm font-['Montserrat'] font-medium">
                  <Dot className="z-20" />
                  Edit
                </p>
              </Link>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <li className=" li-bg" onClick={logoutHandler}>
          <MdOutlineLogout
            className=" mr-2 text-[var(--secondary-color)]"
            size={"1.8rem"}
          />
          <p
            onClick={() => liHandler(setIsActivedLogout)}
            className={`${
              isActivedLogout
                ? "text-[var(--font-color)]"
                : "text-[var(--secondary-color)]"
            }`}
          >
            Logout
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

//${showSidebar? "sm:w-[50%] md:w-[270px]":"w-0 -translate-x-[300px]"}