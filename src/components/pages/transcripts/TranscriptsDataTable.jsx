import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Checkbox,
  IconButton,
  Link,
  TablePagination,
  TableSortLabel,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import { useParams } from "react-router-dom";
import TableLoader from '../../shared-components/Loader/TableLoader'

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          All ({props.total})
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <SearchIcon />
          <SettingsIcon />
          <FilterListIcon />
        </Box>
      )}
    </Toolbar>
  );
}

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
    label: "Time Duration",
  },
  {
    id: "Action",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

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
    fetchData(rowsPerPage, page);
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
              numSelected={selected.length}
              total={totalCount}
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
                            {row.duration
                              ? `${Math.floor(row.duration / 60000)}:${(
                                  (row.duration % 60000) /
                                  1000
                                ).toFixed(0)}`
                              : "-"}
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
