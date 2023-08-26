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
// import { BrandingWatermarkOutlined } from "@mui/icons-material";

const Sidebar = () => {
  // const theme = useMantineTheme();
  // const getColor = (color) =>
  //   theme.colors[color][theme.colorScheme === "dark" ? 5 : 7];

  const { setCurrent,liHandler,
    sidebarActived } = useContextCustom();

  const token = Cookies.get("token");
  console.log(token);

  const [logout] = useLogoutMutation();
  const nav = useNavigate();
  const dispatch = useDispatch();

  const addProductHandler = () => {
    setCurrent(1);
    liHandler("add product");
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
              onClick={() => liHandler("overview")}
              className={`${
                sidebarActived==="overview"
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
                onClick={() => liHandler("cashier")}
                className={`${
                  sidebarActived==="cashier"
                    ? "text-[var(--font-color)]"
                    : "text-[var(--secondary-color)]"
                } text-sm font-['Montserrat'] font-medium `}
              >
                <Dot className="z-20" />
                Cashier
              </p>
            </Accordion.Panel>
            <Accordion.Panel className="accordion-bg li-text ">
              <Link to={'/recent'}>
              <p
                onClick={() => liHandler("recent")}
                className={`${
                  sidebarActived==="recent"
                    ? "text-[var(--font-color)]"
                    : "text-[var(--secondary-color)]"
                } text-sm font-['Montserrat'] font-medium `}
              >
                <Dot className="z-20" />
                Recent
              </p></Link>
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
                onClick={() => liHandler("products")}
                className={`${
                  sidebarActived==="products"
                    ? "text-[var(--font-color)]"
                    : "text-[var(--secondary-color)]"
                } text-sm font-['Montserrat'] font-medium `}
              >
                <Dot className="z-20" />
                <Link to={"/product"}>Products</Link>
              </p>
            </Accordion.Panel>
            <Accordion.Panel className="accordion-bg li-text">
              <Link to={"/add-product"}>
                <p
                  onClick={addProductHandler}
                  className={`${
                    sidebarActived==="add product"
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
                onClick={() => liHandler("stock")}
                className={`${
                  sidebarActived==="stock"
                    ? "text-[var(--font-color)]"
                    : "text-[var(--secondary-color)]"
                } text-sm font-['Montserrat'] font-medium `}
              >
                <Dot className="z-20" />
                <Link to={"/stock"}>Stock Control</Link>
              </p>
            </Accordion.Panel>
            <Accordion.Panel className="accordion-bg li-text">
              <p
                onClick={() => liHandler("brand")}
                className={`${
                  sidebarActived==="brand"
                    ? "text-[var(--font-color)]"
                    : "text-[var(--secondary-color)]"
                } text-sm font-['Montserrat'] font-medium `}
              >
                <Dot className="z-20" />
                <Link to={"/brand"}>Manage Brand</Link>
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
                  onClick={() => liHandler("user overview")}
                  className={`${
                    sidebarActived==="user overview"
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
                  onClick={() => liHandler("user create")}
                  className={`${
                    sidebarActived==="user create"
                      ? "text-[var(--font-color)]"
                      : "text-[var(--secondary-color)]"
                  } text-sm font-['Montserrat'] font-medium `}
                >
                  <Dot className="z-20" />
                  Create User
                </p>
              </Link>
            </Accordion.Panel>
            <Accordion.Panel className="accordion-bg li-text">
              <Link to={"/banned-user"}>
                <p
                  onClick={() => liHandler("user banned")}
                  className={`${
                    sidebarActived==="user banned"
                      ? "text-[var(--font-color)]"
                      : "text-[var(--secondary-color)]"
                  } text-sm font-['Montserrat'] font-medium `}
                >
                  <Dot className="z-20" />
                  Banned User
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
              onClick={() => liHandler("media")}
              className={`${
                sidebarActived==="media"
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
                  onClick={() => liHandler("my account")}
                  className={`${
                    sidebarActived==="my account"
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
                  onClick={() => liHandler("edit")}
                  className={`${
                    sidebarActived==="edit"
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
            onClick={() => liHandler("logout")}
            className={`${
              sidebarActived==="logout"
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
