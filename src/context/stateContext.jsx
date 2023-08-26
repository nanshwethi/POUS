import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  StateContextProvider.propTypes = {
    children: PropTypes.any,
  };

  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(1);
  
  // for add product

  const [productName, setProductName] = useState('table');
  const [brand, setBrand] = useState("orange");
  const [unit, setUnit] = useState('single');
  const [productInfo, setProductInfo] = useState('ddd');
  const [stock, setStock] = useState(3);
  const [actualPrice, setActualPrice] = useState(400);
  const [salePrice, setSalePrice] = useState(600);
const [photo,setPhoto]=useState('https://h.mmsdev.site/storage/photos/YUy16QtugI8tPG92QkySTXaOb4Gx3tkIAHv7sHBQ.png');

  const nextStepperHandler = () => {
    if (current < 4) {
      setCurrent(current + 1);
    }
    
    //else if (current === 4) {
    //   setCurrent(1);
    // }
  };
  // for sidebar

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

  const defaultHandler=()=>{
    setIsActivedOverview(false);
    setIsActivedMedia(false);
    setIsActivedLogout(false);
    setIsActivedCashier(false);
    setIsActivedRecent(false);
    setIsActivedProducts(false);
    setIsActivedAddProduct(false);
    setIsActivedStock(false);
    setIsActivedBrands(false);
    setIsActivedUserOverview(false);
    setIsActivedUserCreate(false);
    setIsActivedUserBanned(false);
    setIsActivedMyAccount(false);
    setIsActivedEdit(false);
  }

  const liHandler = (liname) => {
    defaultHandler();
    liname(true);
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
    actualPrice,setActualPrice,salePrice,setSalePrice,photo,setPhoto,

    showModal,setShowModal,nextStepperHandler,current,setCurrent,

    liHandler,defaultHandler,
    isActivedOverview, setIsActivedOverview,isActivedMedia, setIsActivedMedia,isActivedLogout, setIsActivedLogout,isActivedCashier, setIsActivedCashier,isActivedRecent, setIsActivedRecent,isActivedProducts, setIsActivedProducts,
    isActivedAddProduct, setIsActivedAddProduct,isActivedStock, setIsActivedStock,isActivedBrands, setIsActivedBrands,isActivedUserOverview, setIsActivedUserOverview,isActivedUserCreate, setIsActivedUserCreate,isActivedUserBanned, setIsActivedUserBanned,isActivedMyAccount, setIsActivedMyAccount,isActivedEdit, setIsActivedEdit
  };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useContextCustom = () => useContext(StateContext);
