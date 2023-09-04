import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, IconButton, Link, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import TableLoader from "../../shared-components/Loader/TableLoader";
import EnhancedTableHead from "../../shared-components/enhanced-table-head";
import EnhancedTableToolbar from "../../shared-components/enhanced-table-toolbar";
import debounce from "lodash/debounce";
import formatDate from "../../../helpers/date";
import Pagination from "../../shared-components/pagination";

const headCells = [
  {
    id: "dialog_id",
    numeric: true,
    disablePadding: false,
    label: "Transcript ID",
    align: "center",
    sorting: true,
  },
  {
    id: "created_at",
    numeric: false,
    disablePadding: true,
    label: "Created At",
    align: "center",
    sorting: true,
  },
  {
    id: "updated_at",
    numeric: true,
    disablePadding: false,
    label: "Updated At",
    align: "center",
    sorting: true,
  },
  {
    id: "conversation_url",
    numeric: true,
    disablePadding: false,
    label: "Download Audio File",
    align: "center",
  },
  {
    id: "duration",
    numeric: true,
    disablePadding: false,
    label: "Time Duration (seconds)",
    align: "center",
    sorting: true,
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
  const location = useLocation();

  const userName = location?.state?.userName;
  const userAvatar = location?.state?.userAvatar;
  console.log("rowwww", userName);

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
    setSearchTerm(value);
  }, 500);

  useEffect(() => {
    if (currentPage !== page) setPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    fetchData(rowsPerPage, page || 1, searchTerm, order, orderBy);
  }, [searchTerm, order, orderBy]);

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
      `/salesRepresentative/${salesRepresentativeId}/transcripts/${transcriptId}`,
      {
        state: {
          userName: userName,
          userAvatar: userAvatar,
        },
      }
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
                numSelected={selected?.length ?? 2}
                refetchData={() => fetchData(rowsPerPage, page || 1)}
                setSearchTerm={debouncedHandleSearch}
                searchTerm={searchTerm}
              />
              <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                  <EnhancedTableHead
                    numSelected={selected?.length ?? 2}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={transcripts?.length ?? 2}
                    headCells={headCells}
                  />
                  <TableBody>
                    {transcripts && transcripts?.length ? (
                      transcripts?.map((row) => {
                        return (
                          <TableRow
                            key={row.dialog_id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell align="center">
                              {row.dialog_id}
                            </TableCell>

                            <TableCell align="center">
                              {formatDate(row.created_at)}
                            </TableCell>

                            <TableCell align="center">
                              {formatDate(row.updated_at)}
                            </TableCell>

                            <TableCell
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "1rem",
                                alignItems: "center",
                              }}
                            >
                              <Link href={row.conversation_url} target="_blank">
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
                              {row.duration ?? "-"}
                            </TableCell>
                            <TableCell align="center">
                              <Link
                                component="button"
                                variant="body2"
                                onClick={() => handleShowDetails(row.dialog_id)}
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
            <Pagination
              page={page}
              rowsPerPage={rowsPerPage}
              totalCount={totalCount}
              setRowsPerPage={setRowsPerPage}
              filterData={fetchData}
              setPage={setPage}
            />
          </>
        )}
      </Paper>
    </Box>
  );
}

export default TranscriptsDataTable;
