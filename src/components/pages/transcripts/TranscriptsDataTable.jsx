import * as React from "react";
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
import LoadingButton from "../../generic-components/button";
import Collapse from "@mui/material/Collapse";
import { alpha } from "@mui/material/styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from "@mui/material/Chip";
import PropTypes from "prop-types";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
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
          All (6)
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
    id: "Customer ID",
    numeric: true,
    disablePadding: false,
    label: "Customer ID",
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

function TranscriptsDataTable(props) {
  const { transcripts } = props;
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = transcripts.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate("/salesRepresentative/123/transcripts/123");
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
        <EnhancedTableToolbar numSelected={selected.length} />
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
              {transcripts?.map((row) => {
                const isItemSelected = isSelected(row.name);
                // const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={transcripts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={() => {
            console.log("Page changed");
          }}
          onRowsPerPageChange={() => {
            console.log("Rows per page changed");
          }}
        />
      </Paper>
    </Box>
  );
}

export default TranscriptsDataTable;
