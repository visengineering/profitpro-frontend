import { Accordion as MUIAccordion, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const Accordion = ({ summary, className, children }) => {
  return <MUIAccordion className={className}>{children}</MUIAccordion>;
};

export default Accordion;
