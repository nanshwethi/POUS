import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  StateContextProvider.propTypes = {
    children: PropTypes.any,
  };

  const [showModal, setShowModal] = useState();
  const [current, setCurrent] = useState(1);
  
  // for add product

  const [productName, setProductName] = useState('');
  const [brand, setBrand] = useState('');
  const [unit, setUnit] = useState('single');
  const [productInfo, setProductInfo] = useState('');
  const [stock, setStock] = useState();
  const [actualPrice, setActualPrice] = useState();
  const [salePrice, setSalePrice] = useState();
  const [photo,setPhoto]=useState(null);

  const nextStepperHandler = () => {
    if (current < 4) {
      setCurrent(current + 1);
    }
    
    //else if (current === 4) {
    //   setCurrent(1);
    // }
  };

  const[saleClose,setSaleClose]=useState(false);
  // for sidebar
  const [sidebarActived,setSidebarActived]=useState();
  const liHandler = (liname) => {
    setSidebarActived(liname);
  };

  //for sale close
  const [closeDate, setCloseDate] = useState(false);


  const data = {saleClose,setSaleClose,
    productName,
    setProductName,
    brand,
    setBrand,
    unit,
    setUnit,
    productInfo,
    setProductInfo,
    stock,
    setStock,
    actualPrice,setActualPrice,salePrice,setSalePrice,photo,setPhoto,showModal,setShowModal,nextStepperHandler,current,setCurrent,liHandler,sidebarActived,setSidebarActived,
    closeDate,setCloseDate
  };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useContextCustom = () => useContext(StateContext);
