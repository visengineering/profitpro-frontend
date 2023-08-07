import { TextField } from "@mui/material";
import React from "react";

function InputField({
  label,
  variant,
  type,
  className,
  onChange,
  min,
  max,
  value,
}) {
  return (
    <TextField
      label={label}
      variant={variant}
      type={type}
      className={className}
      onChange={onChange}
      value={value}
      InputProps={{
        inputProps: {
          min: min,
          max: max,
        },
      }}
    />
  );
}

export default InputField;
