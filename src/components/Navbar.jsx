// import { useContextCustom } from "../context/stateContext";
import { BiMenu } from "react-icons/bi";
import {PiMoonStarsFill} from "react-icons/pi"
import {BiUserCircle} from "react-icons/bi"
import {BiSolidBellRing} from "react-icons/bi"
// import Cookies from "js-cookie";
// import { useDispatch } from "react-redux";
// import { useLogoutMutation } from "../redux/api/authApi";
// import { removeUser } from "../redux/services/authSlice";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // const { setShowSidebar, showSidebar } = useContextCustom();

  //const { user } = useSelector((state) => state.authSlice);
  //const { token } = useSelector((state) => state.authSlice);
  // const user = JSON.parse(Cookies.get("user"));
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
    <div className="container-fluid h-[45px] p-5 flex justify-between items-center bg-[--base-color] text-[--secondary-color] border-2 border-[--border-color]">
      <div className=" flex gap-1 items-center">
        <BiMenu
          size={"2rem"}
          // onClick={() => setShowSidebar(!showSidebar)}
          // className={`hover:cursor-pointer p-2 w-12 h-12 rounded-full `}
        />
        <h2 className="text-title-logo">MMS</h2>
      </div>
      <div className=" flex gap-2.5 items-center ">
        <BiSolidBellRing size={"1.5rem"}/>
        <PiMoonStarsFill size={"1.7rem"}/>
        <BiUserCircle size={"1.7rem"}/>
      </div>
    </div>
  );
};

export default Navbar;
