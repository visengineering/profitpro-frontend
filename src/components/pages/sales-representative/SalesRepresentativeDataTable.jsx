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
import formatDate from "../../../helpers/date";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import LoadingButton from "../../generic-components/button";
import { useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Link } from "@mui/material";
import TableLoader from "../../shared-components/Loader/TableLoader";
import EnhancedTableHead from "../../shared-components/enhanced-table-head";
import EnhancedTableToolbar from "../../shared-components/enhanced-table-toolbar";
import debounce from "lodash/debounce";
import Pagination from "../../shared-components/pagination";

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
    id: "first_name",
    numeric: true,
    disablePadding: false,
    label: "Member Name",
    width: "20rem",
    align: "left",
    sorting: true,
  },
  {
    id: "phone",
    numeric: true,
    label: "Mobile Number",
    disablePadding: false,
    align: "left",
    sorting: true,
  },
  {
    id: "Email Address",
    numeric: true,
    disablePadding: false,
    label: "Email Address",
    align: "left",
  },
  {
    id: "Action",
    numeric: true,
    disablePadding: false,
    label: "Action",
    align: "left",
  },
];

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navigateToTranscripts = (user_id) => {
    navigate(`/salesRepresentative/${user_id}/transcripts`, {
      state: {
        userName: row.user_display_name,
        userAvatar: row.user_avatar,
      },
    });
  };

  const handleShowDetails = (userId, transcriptId) => {
    console.log("row", row);
    navigate(`/salesRepresentative/${userId}/transcripts/${transcriptId}`, {
      state: {
        userName: row.user_display_name,
        userAvatar: row.user_avatar,
      },
    });
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
          sx={{
            borderBottom: "1px solid rgba(224, 224, 224, 1)",
          }}
        >
          <Box
            component="img"
            onClick={(e) => handleShowUser(e)}
            src={row.user_avatar}
            sx={{
              width: "2.5rem",
              height: "2.6rem",
              borderRadius: "50%",
              border: "none",
            }}
            alt="Image"
          />
        </TableCell>

        <TableCell align="left">
          {row.first_name} {row.last_name}
        </TableCell>
        <TableCell align="left">{row.phone}</TableCell>
        <TableCell align="left">{row.user_email}</TableCell>
        <TableCell align="left">
          <Box sx={{ display: "flex", justifyContent: "left", gap: "20px" }}>
            <IconButton size="small" sx={{ paddingLeft: "0px" }}>
              <Box
                component="img"
                src="/edit.svg"
                sx={{ height: "20px", width: "20px" }}
                handleClick={(e) => e.stopPropagation()}
              />
            </IconButton>
            <IconButton size="small">
              <Box
                component="img"
                src="/delete.svg"
                sx={{ height: "20px", width: "20px" }}
                handleClick={(e) => e.stopPropagation()}
              />
            </IconButton>
          </Box>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Sale Representative Details
              </Typography>
              <Table aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Transcript ID</TableCell>
                    <TableCell align="center">Created At</TableCell>
                    <TableCell align="center">Updated At</TableCell>
                    <TableCell align="center">Download Audio File</TableCell>
                    <TableCell align="center">
                      Time Duration (seconds)
                    </TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.transcripts.map((transcriptRow) => (
                    <TableRow key={transcriptRow.created_at}>
                      <TableCell align="center">
                        {transcriptRow.dialog_id}
                      </TableCell>
                      <TableCell align="center">
                        {formatDate(transcriptRow.created_at)}
                      </TableCell>
                      <TableCell align="center">
                        {formatDate(transcriptRow.updated_at)}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          gap: "1rem",
                          alignItems: "center",
                        }}
                      >
                        <Link
                          href={transcriptRow.conversation_url}
                          target="_blank"
                        >
                          <IconButton size="small">
                            <Box
                              component="img"
                              src="/downloadIcon.svg"
                              sx={{ height: "24px", width: "24px" }}
                            />
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
                              transcriptRow.dialog_id
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {!!row.transcripts.length && row.total_transcript_count > 5 && (
                  <LoadingButton
                    buttonTitle={"Load more"}
                    variant="outlined"
                    size="small"
                    sx={{ margin: "1rem" }}
                    handleClick={() => navigateToTranscripts(row.user_id)}
                    styleClass="load-more-btn "
                  />
                )}
              </Box>
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
  const navigate = useNavigate();
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  useEffect(() => {
    if (currentPage !== page) setPage(currentPage);
  }, [page, currentPage]);

  const [searchTerm, setSearchTerm] = useState();

  const debouncedHandleSearch = debounce((value) => {
    setSearchTerm(value);
  }, 500);

  useEffect(() => {
    filterData(rowsPerPage, page || 1, searchTerm, order, orderBy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, order, orderBy]);

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
                searchTerm={searchTerm}
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
                            no sales representatives founds
                          </Typography>
                        </TableCell>{" "}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Pagination
              page={page}
              rowsPerPage={rowsPerPage}
              totalCount={totalCount}
              setRowsPerPage={setRowsPerPage}
              filterData={filterData}
              setPage={setPage}
            />
          </>
        )}
      </Paper>
    </Box>
  );
}

export default SalesRepresentativeDataTable;
