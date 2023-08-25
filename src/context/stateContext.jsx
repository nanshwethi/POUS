import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  StateContextProvider.propTypes = {
    children: PropTypes.any,
  };

  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(1);
  const [productName, setProductName] = useState('table');
  const [brand, setBrand] = useState(2);
  const [unit, setUnit] = useState('single');
  const [productInfo, setProductInfo] = useState('ddd');
  const [stock, setStock] = useState(3);
  const [actualPrice, setActualPrice] = useState(400);
  const [salePrice, setSalePrice] = useState(600);
const [photo,setPhoto]=useState('blob:http://localhost:5173/7b9656eb-b5f0-4b87-8243-07b89abd40b5');
  const nextStepperHandler = () => {
    if (current < 4) {
      setCurrent(current + 1);
    }
    
    //else if (current === 4) {
    //   setCurrent(1);
    // }
  };

  const data = {
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
    actualPrice,setActualPrice,salePrice,setSalePrice,
    showModal,
    setShowModal,
    nextStepperHandler,
    current,
    setCurrent,
  };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useContextCustom = () => useContext(StateContext);
