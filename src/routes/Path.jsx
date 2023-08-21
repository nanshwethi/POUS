import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Media from "../components/Media";
import Empty from "../components/Empty";
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
// import BannedUser from "../components/BannedUser"
// import Products from "../components/Products";
// import StockControl from "../components/StockControl";
// import ManageBrands from "../components/ManageBrands";
// import Cashier from "../components/Cashier";
// import Recent from "../components/Recent";


const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Error />} />
        <Route path="/media/media-grid" element={<MediaImgDetail />} />
        <Route path="/" element={<Dashboard view={<Empty />} />} />
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
          path="/stock"
          element={<Dashboard view={<Stock/>} />}
        />
        <Route
          path="/brand"
          element={<Dashboard view={<Brand/>} />}
        />
          path="/recent"
          element={<Dashboard view={<Recent />} />}
        /> */}
        {/* <Route
          path="/banned-user"
          element={<Dashboard view={<BannedUser />} />}
        /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Path;
