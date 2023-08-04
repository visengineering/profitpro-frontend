import { Accordion as MUIAccordion } from "@mui/material";
import React from "react";

const Accordion = ({ summary, className, children }) => {
  return <MUIAccordion className={className}>{children}</MUIAccordion>;
};

export default Accordion;
