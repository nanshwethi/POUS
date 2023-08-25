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

  const [isActivedCashier, setIsActivedCashier] = useState(false);
  const [isActivedRecent, setIsActivedRecent] = useState(false);
  const [isActivedProducts, setIsActivedProducts] = useState(false);
  const [isActivedAddProduct, setIsActivedAddProduct] = useState(false);
  const [isActivedStock, setIsActivedStock] = useState(false);
  const [isActivedBrands, setIsActivedBrands] = useState(false);
  const [isActivedUserOverview, setIsActivedUserOverview] = useState(false);
  const [isActivedUserCreate, setIsActivedUserCreate] = useState(false);
  const [isActivedUserBanned, setIsActivedUserBanned] = useState(false);
  const [isActivedMyAccount, setIsActivedMyAccount] = useState(false);
  const [isActivedEdit, setIsActivedEdit] = useState(false);

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

  const addProductHandler = () => {
    setCurrent(1);
    setIsActivedCashier(true);
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
              <p
                onClick={() => liHandler(setIsActivedCashier)}
                className={`${
                  isActivedCashier
                    ? "text-[var(--font-color)]"
                    : "text-[var(--secondary-color)]"
                } text-sm font-['Montserrat'] font-medium `}
              >
                <Dot className="z-20" />
                Cashier
              </p>
            </Accordion.Panel>
            <Accordion.Panel className="accordion-bg li-text ">
              <p
                onClick={() => liHandler(setIsActivedRecent)}
                className={`${
                  isActivedRecent
                    ? "text-[var(--font-color)]"
                    : "text-[var(--secondary-color)]"
                } text-sm font-['Montserrat'] font-medium `}
              >
                <Dot className="z-20" />
                Recent
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
              <p
                onClick={() => liHandler(setIsActivedProducts)}
                className={`${
                  isActivedProducts
                    ? "text-[var(--font-color)]"
                    : "text-[var(--secondary-color)]"
                } text-sm font-['Montserrat'] font-medium `}
              >
                <Dot className="z-20" />
                <Link to={'/product'}>
                 Products
                </Link>
              </p>
            </Accordion.Panel>
            <Accordion.Panel className="accordion-bg li-text">
              <Link to={"/add-product"}>
                <p
                  onClick={addProductHandler}
                  className={`${
                    isActivedCashier
                      ? "text-[var(--font-color)]"
                      : "text-[var(--secondary-color)]"
                  } text-sm font-['Montserrat'] font-medium `}
                >
                  <Dot className="z-20" />
                  Add Product
                </p>
              </Link>
            </Accordion.Panel>
            <Accordion.Panel className="accordion-bg li-text">
              <p
                onClick={() => liHandler(setIsActivedStock)}
                className={`${
                  isActivedStock
                    ? "text-[var(--font-color)]"
                    : "text-[var(--secondary-color)]"
                } text-sm font-['Montserrat'] font-medium `}
              >
                <Dot className="z-20" />
                <Link to={'/stock'}>
                Stock Control
                </Link>
              </p>
            </Accordion.Panel>
            <Accordion.Panel className="accordion-bg li-text">
              <p
                onClick={() => liHandler(setIsActivedBrands)}
                className={`${
                  isActivedBrands
                    ? "text-[var(--font-color)]"
                    : "text-[var(--secondary-color)]"
                } text-sm font-['Montserrat'] font-medium `}
              >
                <Dot className="z-20" />
<<<<<<< HEAD
                Manage Brands
=======
                <Link to={'/brand'}>
                  Manage Brand
                </Link>
>>>>>>> 17b8e8d245a2d5f592c6304245e836b309934ac7
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
                <p
                  onClick={() => liHandler(setIsActivedUserOverview)}
                  className={`${
                    isActivedUserOverview
                      ? "text-[var(--font-color)]"
                      : "text-[var(--secondary-color)]"
                  } text-sm font-['Montserrat'] font-medium `}
                >
                  <Dot className="z-20" />
                  Overview
                </p>
              </Link>
            </Accordion.Panel>
            <Accordion.Panel className="accordion-bg li-text">
              <Link to={"/create-user"}>
                <p
                  onClick={() => liHandler(setIsActivedUserCreate)}
                  className={`${
                    isActivedUserCreate
                      ? "text-[var(--font-color)]"
                      : "text-[var(--secondary-color)]"
                  } text-sm font-['Montserrat'] font-medium `}
                >
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
                <p
                  onClick={() => liHandler(setIsActivedMyAccount)}
                  className={`${
                    isActivedMyAccount
                      ? "text-[var(--font-color)]"
                      : "text-[var(--secondary-color)]"
                  } text-sm font-['Montserrat'] font-medium `}
                >
                  <Dot className="z-20" />
                  My Account
                </p>
              </Link>
            </Accordion.Panel>
            <Accordion.Panel className="accordion-bg li-text">
              <Link to={"/profile-edit"}>
                <p
                  onClick={() => liHandler(setIsActivedEdit)}
                  className={`${
                    isActivedEdit
                      ? "text-[var(--font-color)]"
                      : "text-[var(--secondary-color)]"
                  } text-sm font-['Montserrat'] font-medium `}
                >
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