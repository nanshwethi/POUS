import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../components/Home";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Media from "../components/Media";
import MediaImgDetail from "../components/MediaImgDetail";
import UserProfile from "../components/UserProfile";
import ProfileEdit from "../components/ProfileEdit";
import UserOverview from "../components/UserOverview";
import CreateUser from "../components/CreateUser";
import BannedUser from "../components/BannedUser";
import AddProduct from "../components/AddProduct";
import Product from "../components/Product";
import ProductDetail from "../components/ProductDetail";
import ProductEdit from "../components/ProductEdit";
import Stock from "../components/Stock";
import Brand from "../components/Brand";

import Shop from "../pages/Shop";
import ShopList from "../components/ShopList";
import Recent from "../components/Recent";

import Daily from "../components/Finance/Daily";
import Monthly from "../components/Finance/Monthly";
import Yearly from "../components/Finance/Yearly";
import Custom from "../components/Finance/Custom";
import CreateUsera from "../components/CreateUser";

import SaleReport from "../components/Report/SaleReport";
import BrandEdit from "../components/BrandEdit";
import StockEdit from "../components/StockEdit";
import SaleVoucher from "../pages/SaleVoucher";
import { ReportStock } from "../components/ReportStock/ReportStock";
import LowStock from "../components/ReportStock/LowStock";
import InStock from "../components/ReportStock/InStock";
import OutOfStock from "../components/ReportStock/OutOfStock";

// import Products from "../components/Products";
// import StockControl from "../components/StockControl";
// import ManageBrands from "../components/ManageBrands";
// import Cashier from "../components/Cashier";

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard view={<Home />} />} />
        <Route path="/*" element={<Error />} />

        {/* media routes start*/}
        <Route path="/media/media-grid" element={<MediaImgDetail />} />
        <Route path="/media" element={<Dashboard view={<Media />} />} />
        {/* media routes start*/}

        {/* sale routes start*/}

        <Route
          path="/user-profile"
          element={<Dashboard view={<UserProfile />} />}
        />
        <Route
          path="/profile-edit/:id"
          element={<Dashboard view={<ProfileEdit />} />}
        />
        <Route
          path="/user-profile"
          element={<Dashboard view={<UserProfile />} />}
        />
        {/* profile routes start*/}

        {/* sale routes start*/}
        <Route path="/cashier" element={<Shop />} />
        <Route path="/voucher" element={<SaleVoucher />} />
        <Route path="/shop-list" element={<Dashboard view={<ShopList />} />} />
        {/* sale routes start*/}

        {/* user routes start*/}

        <Route
          path="/user-overview"
          element={<Dashboard view={<UserOverview />} />}
        />
        
        <Route
          path="/create-user"
          // element={<Dashboard view={<CreateUser />} />}
          element={<Dashboard view={<CreateUsera />} />}

        />
        <Route
          path="/report-stock"
          element={<Dashboard view={<ReportStock />} />}
        />
        <Route
          path="/report-lowstock"
          element={<Dashboard view={<LowStock/>} />}
        />
        <Route
          path="/report-instock"
          element={<Dashboard view={<InStock />} />}
        />
        <Route
          path="/report-outofstock"
          element={<Dashboard view={<OutOfStock />} />}
        />
        {/* user routes start*/}

        {/* inventory routes start*/}
        <Route
          path="/add-product"
          element={<Dashboard view={<AddProduct />} />}
        />
        <Route path="/product" element={<Dashboard view={<Product />} />} />
        <Route
          path="/product-detail/:id"
          element={<Dashboard view={<ProductDetail />} />}
        />

        <Route
          path="/product/:id"
          element={<Dashboard view={<ProductEdit />} />}
        />

        <Route
          path="/brand-edit/:id"
          element={<Dashboard view={<BrandEdit />} />}
        />

        <Route
          path="/stock-edit/:id"
          element={<Dashboard view={<StockEdit />} />}
        />

        <Route path="/stock-control" element={<Dashboard view={<Stock />} />} />
        <Route path="/brand" element={<Dashboard view={<Brand />} />} />
        <Route path="/stock-control" element={<Dashboard view={<Stock />} />} />
        <Route path="/brand" element={<Dashboard view={<Brand />} />} />
        {/* inventory routes start*/}
        {/* sale routes start*/}

        <Route path="/recent" element={<Dashboard view={<Recent />} />} />
        {/* sale routes start*/}

        <Route
          path="/banned-user"
          element={<Dashboard view={<BannedUser />} />}
        />
        {/*<Route
          path="/stock"
          element={<Dashboard view={<StockList />} />}
        />
                        */}

        <Route
          path="/report-sale"
          element={<Dashboard view={<SaleReport />} />}
        />

        {/* finance routes start*/}
        <Route path="/finance-daily" element={<Dashboard view={<Daily />} />} />
        <Route path="/finance-daily" element={<Dashboard view={<Daily />} />} />
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
