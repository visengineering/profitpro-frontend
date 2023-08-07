import React, { Fragment, useEffect, useState } from "react";
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
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LoadingButton from "../../generic-components/button";
import { useNavigate } from "react-router-dom";

import {
  Checkbox,
  FormControl,
  InputLabel,
  Link,
  Menu,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
} from "@mui/material";
import TableLoader from "../../shared-components/Loader/TableLoader";
import EnhancedTableHead from "../../shared-components/enhanced-table-head";
import EnhancedTableToolbar from "../../shared-components/enhanced-table-toolbar";
import InputField from "../../generic-components/input-field";

const headCells = [
  {
    id: "Photo",
    numeric: false,
    disablePadding: true,
    label: "Photo",
  },
  {
    id: "Member Name",
    numeric: true,
    disablePadding: false,
    label: "Member Name",
  },
  {
    id: "Mobile",
    numeric: true,
    disablePadding: false,
    label: "Mobile",
  },
  {
    id: "Email",
    numeric: true,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "Status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "Action",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
];

function Row(props) {
  const { row, isItemSelected } = props;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navigateToTranscripts = (user_id) => {
    navigate(`/salesRepresentative/${user_id}/transcripts`);
  };
  const handleShowDetails = (userId, transcriptId) => {
    navigate(`/salesRepresentative/${userId}/transcripts/${transcriptId}`);
  };

  const handleShowUser = (e) => {
    e.stopPropagation();
    navigate(`/salesRepresentative/${row.user_id}`);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    alert("handle edit");
  };

  const handledelete = (e) => {
    e.stopPropagation();
    alert("handle delete");
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <TableRow
        hover
        onClick={() => navigateToTranscripts(row.user_id)}
        role="checkbox"
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={row.user_id}
        selected={isItemSelected}
        sx={{ cursor: "pointer" }}
      >
        <TableCell padding="checkbox">
          <Checkbox
            onClick={(e) => {
              e.stopPropagation();
            }}
            color="primary"
            checked={isItemSelected}
            inputProps={
              {
                // "aria-labelledby": labelId,
              }
            }
          />
        </TableCell>

        <TableCell
          align="center"
          className="d-flex justify-center align-center"
        >
          {!!row?.transcripts?.length && (
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
          )}
          <Box
            component="img"
            onClick={(e) => handleShowUser(e)}
            src={row.user_avatar}
            sx={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
            }}
            alt="Image"
          />
        </TableCell>

        <TableCell align="center">
          {row.first_name} {row.last_name}
        </TableCell>
        <TableCell align="center">{row.phone}</TableCell>
        <TableCell align="center">{row.user_email}</TableCell>
        <TableCell align="center">
          {" "}
          <Chip
            sx={{
              minWidth: "5rem",
            }}
            variant="filled"
            size="small"
            label={row.is_active ? "Active" : "Inactive"}
            color={row.is_active ? "success" : "error"}
          />
        </TableCell>

        <TableCell align="center">
          <div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={(e) => handleClick(e)}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={openMenu}
              onClose={(e) => handleClose(e)}
              PaperProps={{
                style: {
                  maxHeight: 48 * 4.5,
                  width: "8rem",
                },
              }}
            >
              <MenuItem onClick={handleClose} sx={{ gap: "1rem" }}>
                {" "}
                <DeleteIcon
                  sx={{ color: "red" }}
                  onClick={(e) => handledelete(e)}
                />
                <Typography>Delete</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ gap: "1rem" }}>
                <EditIcon
                  sx={{ color: "blue" }}
                  onClick={(e) => handleEdit(e)}
                />{" "}
                <Typography>Edit</Typography>
              </MenuItem>
            </Menu>
          </div>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Sale Representative Transcripts
              </Typography>
              <Table aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Transcript ID</TableCell>
                    <TableCell>Created At</TableCell>
                    <TableCell>Updated At</TableCell>
                    <TableCell>Audio Link</TableCell>
                    <TableCell align="center">Time Duration</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.transcripts.map((transcriptionRow) => (
                    <TableRow key={transcriptionRow.created_date}>
                      <TableCell align="center">
                        {transcriptionRow.conversation_id}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {transcriptionRow.created_date}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {transcriptionRow.modified_date}
                      </TableCell>
                      <TableCell>
                        {transcriptionRow.conversation_link}
                      </TableCell>
                      <TableCell align="center">
                        {transcriptionRow.duration
                          ? `${Math.floor(
                              transcriptionRow.duration / 60000
                            )}:${(
                              (transcriptionRow.duration % 60000) /
                              1000
                            ).toFixed(0)}`
                          : "-"}
                      </TableCell>
                      <TableCell align="center">
                        <Link
                          component="button"
                          variant="body2"
                          onClick={() =>
                            handleShowDetails(
                              row.user_id,
                              transcriptionRow.conversation_id
                            )
                          }
                        >
                          Details
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {!!row.transcripts.length && row.total_transcript_count > 5 && (
                <LoadingButton
                  buttonTitle={"Show more"}
                  variant="contained"
                  size="small"
                  sx={{ margin: "1rem" }}
                  handleClick={() => navigateToTranscripts(row.user_id)}
                  styleClass="primary-btn float-right"
                />
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.object,
};

function SalesRepresentativeDataTable({
  rows,
  totalCount,
  currentPage,
  filterData,
  isLoading,
}) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === page && rowsPerPage === 1) return;

    filterData(rowsPerPage, page || 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.user_display_name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        sx={{
          width: "100%",
          mb: 2,
          boxShadow: "rgba(0, 0, 0, 0.15) 5.4px 5.4px 6.2px",
          borderRadius: "10px",
        }}
      >
        {isLoading ? (
          <TableLoader />
        ) : (
          <>
            <EnhancedTableToolbar
              totalCount={totalCount}
              numSelected={selected.length}
              refetchData={() => filterData(rowsPerPage, page || 1)}
            />
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={totalCount}
                  headCells={headCells}
                />

                <TableBody>
                  {totalCount ? (
                    rows.map((row, index) => {
                      const isItemSelected = isSelected(row.name);
                      return (
                        <Row
                          key={row.user_id}
                          row={row}
                          isItemSelected={isItemSelected}
                        />
                      );
                    })
                  ) : (
                    <TableRow>
                      {" "}
                      <TableCell colSpan={12} align="center">
                        <Typography variant="h6">
                          no sales representatives found
                        </Typography>
                      </TableCell>{" "}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            {/* <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={totalCount}
              rowsPerPage={rowsPerPage}
              page={page - 1}
              onPageChange={(e, value) => {
                setPage(value + 1);
              }}
              onRowsPerPageChange={(e) => {
                setRowsPerPage(e?.target?.value || 5);
              }}
            /> */}
            <Box className="table-pagination">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  padding: 1,
                  alignItems: "center",
                }}
              >
                <FormControl sx={{ m: 1, minWidth: "5rem" }} size="small">
                  <InputLabel>Rows</InputLabel>
                  <Select
                    value={rowsPerPage}
                    label="Rows"
                    onChange={(e) => {
                      setRowsPerPage(e.target.value);
                    }}
                  >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                  </Select>
                </FormControl>
                <Typography sx={{ fontSize: "12px" }}>Go to</Typography>
                <InputField
                  variant="outlined"
                  type="number"
                  value={page}
                  min={1}
                  max={totalCount}
                  onChange={(e) => {
                    setPage(e.target.value);
                  }}
                />
                <Pagination
                  shape="rounded"
                  component="div"
                  count={totalCount}
                  rowsPerPage={rowsPerPage}
                  page={page - 1}
                  onPageChange={(e, value) => {
                    setPage(value + 1);
                  }}
                  renderItem={(item) => <PaginationItem {...item} />}
                />
              </Box>
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
}

export default SalesRepresentativeDataTable;
