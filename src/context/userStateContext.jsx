import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const userStateContext = createContext();

export const StateContextProvider = ({ children }) => {
  StateContextProvider.propTypes = {
    children: PropTypes.any,
  };

  const [showModal, setShowModal] = useState();
  const [current, setCurrent] = useState(1);
  
  // for add product

  const [name, setName] = useState('table');
  const [date_of_birth,setDate_of_birth,] = useState('');
  const [gender,setGender] = useState('single');
  const [address,setAddress] = useState('ddd');
  const [role,setRole] = useState(3);
  const [email,setEmail] = useState(400);
  const [phone_number,setPhone_number] = useState(600);
  const [password,setPassword] = useState(600);
  const [password_confirmation,setPassword_confirmation] = useState(600);
  const [photo,setPhoto]=useState(null);

  const nextStepperHandler = () => {
    if (current < 4) {
      setCurrent(current + 1);
    }
    
    //else if (current === 4) {
    //   setCurrent(1);
    // }
  };
  // for sidebar

  const [sidebarActived,setSidebarActived]=useState();
  const liHandler = (liname) => {
    setSidebarActived(liname);
  };


  const [closeDate, setCloseDate] = useState(false);


  const data = {
        name,
		setName,
		date_of_birth,
		setDate_of_birth,
		gender,
		setGender,
		address,
		setAddress,
		role,
		setRole,
		email,
		setEmail,
		phone_number,
		setPhone_number,
		password,
		setPassword,
		password_confirmation,
		setPassword_confirmation,photo, setPhoto,showModal,setShowModal,nextStepperHandler,current,setCurrent,liHandler,sidebarActived,setSidebarActived,
    closeDate,setCloseDate
  };

  return <userStateContext.Provider value={data}>{children}</userStateContext.Provider>;
};

export const useUserContextCustom = () => useContext(userStateContext);
