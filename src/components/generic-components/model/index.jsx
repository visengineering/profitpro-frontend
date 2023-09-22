import { Modal as MUIModal } from "@mui/material";
import React from "react";

const Modal = ({ open, className, children, onClose }) => {
  return (
    <MUIModal open={open} onClose={onClose} className={className}>
      {children}
    </MUIModal>
  );
};

export default Modal;
