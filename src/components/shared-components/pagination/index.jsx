import {
  Box,
  FormControl,
  MenuItem,
  Pagination as MUIPagination,
  PaginationItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

function Pagination({
  page,
  rowsPerPage,
  totalCount,
  setRowsPerPage,
  filterData,
  setPage,
}) {
  return (
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
              filterData(e.target.value, page || 1);
            }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={25}>25</MenuItem>
          </Select>
        </FormControl>
        <MUIPagination
          shape="rounded"
          component="div"
          count={Math.ceil(totalCount / rowsPerPage)}
          rowsPerPage={rowsPerPage}
          page={page}
          onChange={(e, value) => {
            if (page !== value) {
              setPage(value);
              filterData(rowsPerPage, value || 1);
            }
          }}
          renderItem={(item) => <PaginationItem {...item} />}
        />
      </Box>
    </Box>
  );
}

export default Pagination;
