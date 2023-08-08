import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import {
  Box,
  FormControl,
  IconButton,
  Link,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import TableLoader from "../../shared-components/Loader/TableLoader";
import EnhancedTableHead from "../../shared-components/enhanced-table-head";
import EnhancedTableToolbar from "../../shared-components/enhanced-table-toolbar";
import debounce from "lodash/debounce";

const headCells = [
  {
    id: "Transcript ID",
    numeric: true,
    disablePadding: false,
    label: "Customer ID",
    align: "center",
  },
  {
    id: "Created At",
    numeric: false,
    disablePadding: true,
    label: "Created At",
    align: "center",
  },
  {
    id: "Updated At",
    numeric: true,
    disablePadding: false,
    label: "Updated At",
    align: "center",
  },
  {
    id: "Audio Link",
    numeric: true,
    disablePadding: false,
    label: "Audio Link",
    align: "center",
  },
  {
    id: "Time Duration",
    numeric: true,
    disablePadding: false,
    label: "Time Duration (seconds)",
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

function TranscriptsDataTable({
  loading,
  transcripts,
  currentPage,
  totalCount,
  fetchData,
}) {
  const { salesRepresentativeId } = useParams();
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
  const [searchTerm, setSearchTerm] = useState();
  const debouncedHandleSearch = debounce((value) => {
    console.log("debounced value = ", value);
    setSearchTerm(value);
  }, 500);

  useEffect(() => {
    if (currentPage !== page) setPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    fetchData(rowsPerPage, page || 1);
  }, [page, searchTerm]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = transcripts.map((n) => n.conversation_id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const navigate = useNavigate();

  const handleShowDetails = (transcriptId) => {
    navigate(
      `/salesRepresentative/${salesRepresentativeId}/transcripts/${transcriptId}`
    );
  };
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
        {loading ? (
          <TableLoader />
        ) : (
          <>
            <Box>
              <EnhancedTableToolbar
                totalCount={totalCount}
                numSelected={selected.length}
                refetchData={() => fetchData(rowsPerPage, page || 1)}
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
                    rowCount={transcripts.length}
                    headCells={headCells}
                  />
                  <TableBody>
                    {transcripts && transcripts.length ? (
                      transcripts?.map((row) => {
                        return (
                          <TableRow
                            key={row.conversation_id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell align="center">
                              {row.conversation_id}
                            </TableCell>

                            <TableCell align="center">
                              {row.created_date}
                            </TableCell>

                            <TableCell align="center">
                              {row.modified_date}
                            </TableCell>

                            <TableCell
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "1rem",
                                alignItems: "center",
                              }}
                            >
                              <Link
                                href={row.conversation_link}
                                target="_blank"
                              >
                                <IconButton size="small">
                                  <SimCardDownloadIcon />
                                </IconButton>
                              </Link>
                            </TableCell>
                            <TableCell align="center">
                              {row.duration ?? "-"}
                            </TableCell>
                            <TableCell align="center">
                              <Link
                                component="button"
                                variant="body2"
                                onClick={() =>
                                  handleShowDetails(row.conversation_id)
                                }
                              >
                                Details
                              </Link>
                            </TableCell>
                          </TableRow>
                        );
                      })
                    ) : (
                      <TableRow>
                        <TableCell colSpan={12} align="center">
                          <Typography>no transcripts found</Typography>
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
                      fetchData(e.target.value, 1)
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
                  onChange={(e, value) => {
                    if (page !== value) setPage(value);
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

export default TranscriptsDataTable;
