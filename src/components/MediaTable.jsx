import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiCopy } from "react-icons/bi";
// import { useDispatch, useSelector } from "react-redux";
// import { useGetPhotoQuery } from "../redux/api/mediaApi";
// import Cookies from "js-cookie";
// import { useEffect } from "react";
// import { addPhotos } from "../redux/services/mediaSlice";

const MediaTable = ({imgs}) => {
  // const token = Cookies.get("token");
  // const {data} = useGetPhotoQuery(token);
  // console.log('ddd',data?.data);
  // // const [deletePhoto] = useDeletePhotoMutation();
  // const dispatch = useDispatch();
  // const photos = useSelector((state) => state.mediaSlice.photos);
  // console.log('photos',photos);
 

  // useEffect(() => {
  //   dispatch(addPhotos({photos:data?.data}));
  // },[data]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NO</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">ACCOUNT</TableCell>
            <TableCell align="right">Extension</TableCell>
            <TableCell align="right">FILE SIZE</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {imgs?.map((photo) => (
            <TableRow
              key={photo.id}
            >
              <TableCell component="th" scope="row">
                {photo.id}
              </TableCell>
              <TableCell align="right">{photo.name}</TableCell>
              <TableCell align="right">{photo.user_name}</TableCell>
              <TableCell align="right">{photo.extension}</TableCell>
              {/* <TableCell align="right">{photo.url}</TableCell> */}
              <TableCell align="right">{photo.fileSize}</TableCell>
              <TableCell align="right">
                <div className="w-[60px] mx-auto flex justify-end items-center gap-2">
                  <button
                    className={`text-[--secondary-color] basis-1/2 hover:text-[#8AB4F8]px-1 `}
                  >
                    <RiDeleteBinLine size={'1.3rem'}/>
                  </button>
                  <button
                    className={`text-[--secondary-color] basis-1/2 hover:text-[#8AB4F8]px-1 `}
                  >
                    <BiCopy size={'1.3rem'}/>
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MediaTable;
