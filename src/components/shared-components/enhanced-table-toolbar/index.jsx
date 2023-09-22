import { Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { alpha } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import LoadingButton from "../../generic-components/button";
import AddIcon from "@mui/icons-material/Add";
import SearchBar from "../uncontrolled-search-bar";
import AddNewUser from "../../pages/activeUser/AddNewUser";
import Modal from "../../generic-components/model";

function EnhancedTableToolbar({
  numSelected,
  refetchData,
  totalCount,
  setSearchTerm,
  searchTerm,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { sm: 2 },
        borderTop: "1px solid #EAEAEA",
        borderBottom: "1px solid #EAEAEA",
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
        <Box
          sx={{
            flex: "1 1 100%",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Typography variant="h6" id="tableTitle" component="div">
            All ({totalCount})
          </Typography>
          <LoadingButton
            buttonTitle="Add new"
            variant="contained"
            styleClass="primary-btn"
            endIcon={<AddIcon />}
            handleClick={handleOpen}
          />
          <Modal open={open} onClose={handleClose}>
            <AddNewUser close={handleClose} />
          </Modal>

          <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />
        </Box>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Box
            component="img"
            sx={{ height: "24px", width: "24px" }}
            src="/refreshIcon.svg"
            onClick={refetchData}
            className="cursor-pointer"
          />
          <Box
            component="img"
            src="/gearIcon.svg"
            sx={{ height: "24px", width: "24px" }}
            className="cursor-pointer"
          />
          <FilterListIcon className="cursor-pointer" />
        </Box>
      )}
    </Toolbar>
  );
}

export default EnhancedTableToolbar;
