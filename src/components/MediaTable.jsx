import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiCopy } from "react-icons/bi";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useDeletePhotoMutation  } from "../redux/api/mediaApi";
import { useEffect } from "react";
import { addPhotos } from "../redux/services/mediaSlice";

const MediaTable = ({imgs}) => {
  const token = Cookies.get("token");
  const [deletePhoto] = useDeletePhotoMutation();
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(addPhotos({photos:imgs}));
  },[imgs]);

  
  const deletePhotoHandler =async (id) => {
    const { data } = await deletePhoto({ id, token });
        console.log('del',data);

    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then(async (result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //     const { data } = await deletePhoto({ id, token });
    //     console.log('del',data);
    //   }
    // });
  };

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
                  onClick={() => deletePhotoHandler(photo?.id)}
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
