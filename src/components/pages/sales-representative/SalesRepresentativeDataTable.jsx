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
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import LoadingButton from "../../generic-components/button";
import { useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
  FormControl,
  Link,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
} from "@mui/material";
import TableLoader from "../../shared-components/Loader/TableLoader";
import EnhancedTableHead from "../../shared-components/enhanced-table-head";
import EnhancedTableToolbar from "../../shared-components/enhanced-table-toolbar";
import debounce from "lodash/debounce";

const headCells = [
  {
    id: "",
    numeric: false,
    disablePadding: true,
    label: "",
    width: "3rem",
    align: "center",
  },
  {
    id: "Image",
    numeric: false,
    disablePadding: true,
    label: "Image",
    width: "3rem",
    align: "center",
  },
  {
    id: "Member Name",
    numeric: true,
    disablePadding: false,
    label: "Member Name",
    width: "20rem",
    align: "left",
  },
  {
    id: "Mobile Number",
    numeric: true,
    disablePadding: false,
    label: "Mobile Number",
    align: "center",
  },
  {
    id: "Email Address",
    numeric: true,
    disablePadding: false,
    label: "Email Address",
    align: "center",
  },
  {
    id: "Action",
    numeric: true,
    disablePadding: false,
    label: "Action",
    align: "center",
  },
];

function Row(props) {
  const { row } = props;
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

  return (
    <Fragment>
      <TableRow
        hover
        onClick={() => navigateToTranscripts(row.user_id)}
        key={row.user_id}
        sx={{ cursor: "pointer" }}
      >
        <TableCell align="center" size="small">
          {!!row?.transcripts?.length && (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
            >
              {open ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
            </IconButton>
          )}{" "}
        </TableCell>
        <TableCell
          align="center"
          className="d-flex justify-center align-center"
        >
          <Box
            component="img"
            onClick={(e) => handleShowUser(e)}
            src={row.user_avatar}
            sx={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "50%",
              border: "none",
            }}
            alt="Image"
          />
        </TableCell>

        <TableCell align="left">
          {row.first_name} {row.last_name}
        </TableCell>
        <TableCell align="center">{row.phone}</TableCell>
        <TableCell align="center">{row.user_email}</TableCell>
        <TableCell align="center">
          <Box sx={{ display: "flex", justifyContent: "center", gap: "5px" }}>
            <LoadingButton
              buttonTitle="Edit"
              variant="outlined"
              styleClass="secondary-btn"
              handleClick={(e) => e.stopPropagation()}
            />
            <LoadingButton
              buttonTitle="Delete"
              variant="contained"
              styleClass="error-btn"
              handleClick={(e) => e.stopPropagation()}
            />
          </Box>
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
                    <TableCell align="center">Transcript ID</TableCell>
                    <TableCell align="center">Created At</TableCell>
                    <TableCell align="center">Updated At</TableCell>
                    <TableCell align="center">Audio Link</TableCell>
                    <TableCell align="center">
                      Time Duration (seconds)
                    </TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.transcripts.map((transcriptRow) => (
                    <TableRow key={transcriptRow.created_date}>
                      <TableCell align="center">
                        {transcriptRow.conversation_id}
                      </TableCell>
                      <TableCell align="center">
                        {transcriptRow.created_date}
                      </TableCell>
                      <TableCell align="center">
                        {transcriptRow.modified_date}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          gap: "1rem",
                          alignItems: "center",
                        }}
                      >
                        <Link
                          href={transcriptRow.conversation_link}
                          target="_blank"
                        >
                          <IconButton size="small">
                            <SimCardDownloadIcon />
                          </IconButton>
                        </Link>
                      </TableCell>
                      <TableCell align="center">
                        {transcriptRow.duration || "-"}
                      </TableCell>
                      <TableCell align="center">
                        <Link
                          component="button"
                          variant="body2"
                          onClick={() =>
                            handleShowDetails(
                              row.user_id,
                              transcriptRow.conversation_id
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
                  styleClass="primary-btn float-right "
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
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  useEffect(() => {
    if (currentPage !== page) setPage(currentPage);
  }, [page, currentPage]);

  useEffect(() => {
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
  const [searchTerm, setSearchTerm] = useState();
  const debouncedHandleSearch = debounce((value) => {
    console.log(value);
    setSearchTerm(value);
  }, 500);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {isLoading ? (
          <TableLoader />
        ) : (
          <>
            <Box>
              <EnhancedTableToolbar
                totalCount={totalCount}
                numSelected={selected.length}
                refetchData={() => filterData(rowsPerPage, page || 1)}
                setSearchTerm={debouncedHandleSearch}
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
                          <Typography>
                            no sales representatives found
                          </Typography>
                        </TableCell>{" "}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Box className="table-pagination">
              <Typography
                sx={{
                  p: 2,
                  color: "#6C757D",
                  lineHeight: "22px",
                  fontSize: "14px",
                }}
              >
                Showing {(page - 1) * rowsPerPage + 1} to{" "}
                {(page - 1) * rowsPerPage + rowsPerPage > totalCount
                  ? totalCount
                  : (page - 1) * rowsPerPage + rowsPerPage}{" "}
                of {totalCount} entries
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  padding: 1,
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "12px" }}>Display</Typography>

                <FormControl sx={{ m: 1, minWidth: "5rem" }} size="small">
                  <Select
                    value={rowsPerPage}
                    onChange={(e) => {
                      setRowsPerPage(e.target.value);
                    }}
                  >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                  </Select>
                </FormControl>
                <Pagination
                  shape="rounded"
                  component="div"
                  count={Math.ceil(totalCount / rowsPerPage)}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={(e, value) => {
                    setPage(value);
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
