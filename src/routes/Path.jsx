import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Media from "../components/Media";
<<<<<<< HEAD
import Home from "../components/Home";
import MediaImgDetail from "../components/MediaImgDetail";
import UserProfile from "../components/UserProfile";
import ProfileEdit from "../components/ProfileEdit";
import UserOverView from "../components/UserOverView";
import CreateUser from "../components/CreateUser";
import AddProduct from "../components/AddProduct";
import Product from "../components/Product";
import ProductDetail from "../components/ProductDetail";
import Stock from "../components/Stock";
import Brand from "../components/Brand";
import ProductEdit from "../components/ProductEdit";

import Shop from "../pages/Shop";
import ShopList from "../components/ShopList";

import Recent from "../components/Recent";
import BannedUser from "../components/BannedUser";

// import BannedUser from "../components/BannedUser"
// import Products from "../components/Products";
// import StockControl from "../components/StockControl";
// import ManageBrands from "../components/ManageBrands";
// import Cashier from "../components/Cashier";


const Path = () => {
  return (
    <div >
      <Routes>
        <Route path="/*" element={<Error />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/media/media-grid" element={<MediaImgDetail />} />
        <Route path="/" element={<Dashboard view={<Home />} />} />
        <Route path="/media" element={<Dashboard view={<Media />} />} />
        <Route
          path="/user-profile"
          element={<Dashboard view={<UserProfile />} />}
        />
        <Route
          path="/profile-edit"
          element={<Dashboard view={<ProfileEdit />} />}
        />
        <Route
          path="/shop-list"
          element={<Dashboard view={<ShopList />} />}
        />
        <Route
          path="/user-overview"
          element={<Dashboard view={<UserOverView />} />}
        />
        <Route
          path="/create-user"
          element={<Dashboard view={<CreateUser />} />}
        />
        <Route
          path="/add-product"
          element={<Dashboard view={<AddProduct />} />}
        />
        <Route
          path="/product"
          element={<Dashboard view={<Product/>} />}
        />
        <Route
          path="/product-detail"
          element={<Dashboard view={<ProductDetail/>} />}
        />
        <Route
          path="/product-edit"
          element={<Dashboard view={<ProductEdit/>} />}
        />
        <Route
          path="/stock"
          element={<Dashboard view={<Stock/>} />}
        />
        <Route
          path="/brand"
          element={<Dashboard view={<Brand/>} />}
        />
        <Route
          path="/recent"
          element={<Dashboard view={<Recent />} />}
        />
        <Route
          path="/banned-user"
          element={<Dashboard view={<BannedUser />} />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
=======
import Empty from "../components/Empty";
import MediaImgDetail from '../components/MediaImgDetail';
import UserProfile from '../components/UserProfile'
import ProfileEdit from '../components/ProfileEdit'
import UpdateUser from '../pages/UpdateUser';
import UserOverview from '../pages/UserOverview';
import CreateUser from '../pages/CreateUser';
// import Error from "../pages/Error";

const Path = () => {
  return (
    <div>
          <Routes>
            <Route path="/media/media-grid" element={<MediaImgDetail />} />
            <Route path="/" element={<Dashboard view={<Empty/>}/>} />
            <Route path="/media" element={<Dashboard view={<Media />}/>} />
            <Route path={"/*"} element={<Error />} />
            <Route element={<UserProfile/>} path='/profile'/>
            <Route element={<ProfileEdit/>} path='/proFileEdit'/>
            <Route element={<UpdateUser/>} path='userUpdate'/>
            <Route element={<UserOverview/>} path='userOverview'/>
            <Route element={<CreateUser/>} path='createUser'/>

          </Routes>
>>>>>>> a757afabc8060f959fef552f868ae6b66aaccab6
    </div>
  );
};

export default Path;
