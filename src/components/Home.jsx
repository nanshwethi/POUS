import Cookies from "js-cookie";
import {useGetPhotoQuery} from '../redux/api/mediaApi'
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { addPhotos } from "../redux/services/mediaSlice";

const Home = () => {
  const token = Cookies.get("token");
  const { data } = useGetPhotoQuery(token);
const dispatch=useDispatch();

  useMemo(() => {
    dispatch(addPhotos({ photos: data?.data }));
  }, [data]);

  return (
    <div className=" w-full h-full ">
      {/* <Test /> */}
    </div>
  )
}

export default Home