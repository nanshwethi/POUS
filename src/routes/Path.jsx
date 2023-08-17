import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from "../pages/Dashboard";
//import Login from "../pages/Login";
import Error from "../pages/Error";
import Media from "../components/Media";
import Empty from "../components/Empty";
import MediaImgDetail from '../components/MediaImgDetail';
// import Error from "../pages/Error";

const Path = () => {
  return (
    <div>
        <BrowserRouter>
      <Routes>
      <Route path="/media/media-grid" element={<MediaImgDetail />} />
      <Route path="/" element={<Dashboard view={<Empty/>}/>} />
      <Route path="/media" element={<Dashboard view={<Media />}/>} />

        {/* <Route path="/" element={<Dashboard view={""}/>} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route
          path="/contacts"
          element={<Dashboard view={<ContactTable />} />}
        /> */}
        <Route path={"/*"} element={<Error />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Path