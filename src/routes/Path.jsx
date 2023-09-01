import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Media from "../components/Media";

import MediaImgDetail from '../components/MediaImgDetail';
import UserProfile from '../components/UserProfile'
import ProfileEdit from '../components/ProfileEdit'
import UserOverview from '../components/UserOverview';
import CreateUser from '../components/CreateUser';
// import Error from "../pages/Error";

import Home from "../components/Home";
import AddProduct from "../components/AddProduct";
import Product from "../components/Product";
import ProductDetail from "../components/ProductDetail";
import Stock from "../components/Stock";
import Brand from "../components/Brand";
import ProductEdit from "../components/ProductEdit";

import Shop from "../pages/Shop";
import ShopList from "../components/ShopList";

import Recent from "../components/Recent";
import Daily from "../components/Finance/Daily";
import Monthly from "../components/Finance/Monthly";
import Yearly from "../components/Finance/Yearly";
import Custom from "../components/Finance/Custom";

import BannedUser from "../components/BannedUser"
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
          element={<Dashboard view={<UserOverview />} />}
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
          path="/stock-control"
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
        {/*<Route
          path="/stock"
          element={<Dashboard view={<StockList />} />}
        />
        <Route
          path="/sale"
          element={<Dashboard view={<Sale />} />}
        />
                */}

        {/* finance routes start*/}
        <Route
          path="/finance-daily"
          element={<Dashboard view={<Daily />} />}
        />
        <Route
          path="/finance-monthly"
          element={<Dashboard view={<Monthly />} />}
        />
        <Route
          path="/finance-yearly"
          element={<Dashboard view={<Yearly />} />}
        /> 
        <Route
          path="/finance-custom"
          element={<Dashboard view={<Custom />} />}
        />
        {/* finance routes end*/}

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Path;
