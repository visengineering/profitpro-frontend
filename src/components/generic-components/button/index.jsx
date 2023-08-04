import React from "react";
import { LoadingButton as MUILoadingButton } from "@mui/lab";
import PropTypes from "prop-types";

const LoadingButton = ({
  sx,
  buttonTitle,
  loading = false,
  handleClick,
  trackingDetails,
  styleClass,
  disabled,
  variant,
  size,
  endIcon,
  type = "button",
  submitValid = false,
}) => {
  return (
    <>
      <MUILoadingButton
        className={styleClass}
        loadingPosition="end"
        loading={loading}
        disabled={disabled}
        type={type}
        variant={variant}
        size={size}
        sx={sx}
        onClick={handleClick}
        endIcon={endIcon}
      >
        {buttonTitle}
      </MUILoadingButton>
    </>
  );
};

LoadingButton.propTypes = {
  buttonTitle: PropTypes.string,
  loading: PropTypes.bool,
  handleClick: PropTypes.func,
  trackingDetails: PropTypes.object,
  styleClass: PropTypes.string,
  disabled: PropTypes.func,
  type: PropTypes.string,
  submitValid: PropTypes.bool,
};

export default LoadingButton;
