import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Checkbox,
  Link,
  TablePagination,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import TableLoader from "../../shared-components/Loader/TableLoader";
import EnhancedTableHead from "../../shared-components/enhanced-table-head";
import EnhancedTableToolbar from "../../shared-components/enhanced-table-toolbar";

const headCells = [
  {
    id: "Transcript ID",
    numeric: true,
    disablePadding: false,
    label: "Customer ID",
  },
  {
    id: "Created At",
    numeric: false,
    disablePadding: true,
    label: "Created At",
  },
  {
    id: "Updated At",
    numeric: true,
    disablePadding: false,
    label: "Updated At",
  },
  {
    id: "Audio Link",
    numeric: true,
    disablePadding: false,
    label: "Audio Link",
  },
  {
    id: "Time Duration",
    numeric: true,
    disablePadding: false,
    label: "Time Duration (seconds)",
  },
  {
    id: "Action",
    numeric: true,
    disablePadding: false,
    label: "Action",
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

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    fetchData(rowsPerPage, page || 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowsPerPage, page]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = transcripts.map((n) => n.conversation_id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const navigate = useNavigate();

  const handleShowDetails = (transcriptId) => {
    navigate(
      `/salesRepresentative/${salesRepresentativeId}/transcripts/${transcriptId}`
    );
  };
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
        {loading ? (
          <TableLoader />
        ) : (
          <>
            <EnhancedTableToolbar
              totalCount={totalCount}
              numSelected={selected.length}
              refetchData={() => fetchData(rowsPerPage, page || 1)}
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
                      const isItemSelected = isSelected(row.conversation_id);
                      // const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <TableRow
                          key={row.conversation_id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              color="primary"
                              checked={isItemSelected}
                            />
                          </TableCell>

                          <TableCell align="center">
                            {row.conversation_id}
                          </TableCell>

                          <TableCell align="center">
                            {row.created_date}
                          </TableCell>

                          <TableCell align="center">
                            {row.modified_date}
                          </TableCell>

                          <TableCell>{row.conversation_link}</TableCell>
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
                      {" "}
                      <TableCell colSpan={12} align="center">
                        <Typography variant="h6">
                          no transcripts found
                        </Typography>
                      </TableCell>{" "}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={totalCount || -1}
              rowsPerPage={rowsPerPage}
              page={page - 1}
              onPageChange={(e, val) => {
                setPage(val + 1);
              }}
              onRowsPerPageChange={(e) => {
                if (e.target.value !== rowsPerPage)
                  setRowsPerPage(e.target.value);
              }}
            />
          </>
        )}
      </Paper>
    </Box>
  );
}

export default TranscriptsDataTable;
