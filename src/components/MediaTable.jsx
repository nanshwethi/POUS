import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiCopy } from "react-icons/bi";

function createData(no, name, account, date, time, fileSize) {
  return { no, name, account, date, time, fileSize };
}

const rows = [
  createData(1, "09038", "nyeint", "12 / 7 / 2023", "10:00 AM", "2MB"),
  createData(2, "09038", "nyeint", "12 / 7 / 2023", "3:00 PM", "2MB"),
  createData(3, "09038", "nyeint", "12 / 7 / 2023", "1:00 PM", "2MB"),
];

const MediaTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NO</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">ACCOUNT</TableCell>
            <TableCell align="right">DATE</TableCell>
            <TableCell align="right">TIME</TableCell>
            <TableCell align="right">FILE SIZE</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.no}

              //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.account}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.fileSize}</TableCell>
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
