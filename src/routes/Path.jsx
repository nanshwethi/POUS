import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
//import Login from "../pages/Login";
import Error from "../pages/Error";
import Media from "../components/Media";
import Empty from "../components/Empty";
import MediaImgDetail from "../components/MediaImgDetail";
import UserProfile from "../components/UserProfile";
import ProfileEdit from "../components/ProfileEdit";
// import Error from "../pages/Error";

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
        {/* <Route path="/create-user" element={<Dashboard view={<ProfileEdit />}/>} />
      <Route path="/update-user" element={<Dashboard view={<ProfileEdit />}/>} />
      <Route path="/user-overview" element={<Dashboard view={<ProfileEdit />}/>} /> */}

        {/* <Route path="/" element={<Dashboard view={""}/>} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route
          path="/contacts"
          element={<Dashboard view={<ContactTable />} />}
        /> */}
      </Routes>
    </div>
  );
};

export default Path;
