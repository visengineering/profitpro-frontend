import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from "@mui/material/Chip";
import PropTypes from "prop-types";
import LoadingButton from "../../generic-components/button";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate("/salesRepresentative/123/transcripts");
  };
  const handleShowDetails = () => {
    navigate("/salesRepresentative/123/transcripts/123");
  };

  const handleShowUser = () => {
    navigate("/salesRepresentative/123");
  };

  const handleEdit = () => {
    alert("handle edit");
  };

  const handledelete = () => {
    alert("handle delete");
  };

  return (
    <React.Fragment>
      <TableRow
        hover
        sx={{ "& > *": { borderBottom: "unset" } }}
        onClick={handleShowUser}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Box
            component="img"
            src={row.photo}
            sx={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
            }}
            alt="Image"
          />
        </TableCell>
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">{row.mobile}</TableCell>
        <TableCell align="center">{row.email}</TableCell>
        <TableCell align="center">
          {" "}
          <Chip
            sx={{
              minWidth: "5rem",
            }}
            variant="filled"
            size="small"
            label={row.status ? "Active" : "Inactive"}
            color={row.status ? "success" : "error"}
          />
        </TableCell>
        <TableCell align="center">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              color: "#233eae",
            }}
          >
            <EditIcon onClick={handleEdit} />
            <DeleteIcon onClick={handledelete} />
          </Box>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Transcripts
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Created At</TableCell>
                    <TableCell>Updated At</TableCell>
                    <TableCell>Customer ID</TableCell>
                    <TableCell align="center">Time Duration</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.transcripts.slice(0, 5).map((transcriptionRow) => (
                    <TableRow key={transcriptionRow.createdAt}>
                      <TableCell component="th" scope="row">
                        {transcriptionRow.createdAt}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {transcriptionRow.updatedAt}
                      </TableCell>
                      <TableCell>{transcriptionRow.customerId}</TableCell>
                      <TableCell align="center">
                        {transcriptionRow.duration}
                      </TableCell>
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
                  <TableRow>
                    <LoadingButton
                      buttonTitle={"Show more"}
                      variant="contained"
                      size="small"
                      sx={{ margin: "1rem" }}
                      handleClick={handleShowMore}
                      styleClass="primary-btn"
                    />
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

function SalesRepresentativeDataTable(props) {
  const { rows } = props;
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.15) 5.4px 5.4px 6.2px",
        borderRadius: "10px",
      }}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Photo</TableCell>
            <TableCell align="center">Member Name</TableCell>
            <TableCell align="center">Mobile</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SalesRepresentativeDataTable;
