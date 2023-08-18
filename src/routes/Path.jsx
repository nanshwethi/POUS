import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from "../pages/Dashboard";
//import Login from "../pages/Login";
import Error from "../pages/Error";
import Media from "../components/Media";
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
    </div>



        
   
  )
}

export default Path