import { TextField } from "@mui/material";
import React from "react";

function InputField({
  label,
  variant,
  type,
  className,
  onChange,
  placeholder,
  min,
  max,
  value,
}) {
  return (
    <TextField
      label={label}
      variant={variant}
      type={type}
      placeholder={placeholder}
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
