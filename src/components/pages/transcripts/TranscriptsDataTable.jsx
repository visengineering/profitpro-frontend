import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

function TranscriptsDataTable(props) {
  const { transcripts } = props;
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate("/salesRepresentative/123/transcripts/123");
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Created At</TableCell>
            <TableCell align="center">Updated At</TableCell>
            <TableCell align="center">Customer ID</TableCell>
            <TableCell align="center">Time Duration</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transcripts?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.createdAt}</TableCell>
              <TableCell align="center">{row.updatedAt}</TableCell>
              <TableCell align="center">{row.customerId}</TableCell>
              <TableCell align="center">{row.duration}</TableCell>
              <TableCell align="center">
                <Link
                  component="button"
                  variant="body2"
                  onClick={handleShowDetails}
                >
                  Details
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TranscriptsDataTable;
