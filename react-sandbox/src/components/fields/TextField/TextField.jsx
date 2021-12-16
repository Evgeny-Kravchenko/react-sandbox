import React, { memo } from "react";
import PropTypes from "prop-types";

import { TextField as MaterialTextField } from "@mui/material";

export const TextField = memo((props) => {
  const {
    variant,
    label,
    helperText,
    error,
    name,
    value,
    onChange,
    size,
    placeholder,
    color,
    InputProps,
    inputProps,
  } = props;
  return (
    <MaterialTextField
      type="text"
      color={color}
      size={size}
      error={error}
      label={label}
      variant={variant}
      helperText={helperText}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.name, e.target.value)}
      InputProps={InputProps}
      inputProps={inputProps}
      name={name}
    />
  );
});

TextField.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  InputProps: PropTypes.instanceOf(Object),
  inputProps: PropTypes.instanceOf(Object),
};

TextField.defaultProps = {
  variant: "outlined",
  label: "",
  helperText: "",
  error: false,
  onChange: () => {},
  value: "",
  name: "",
  size: "medium",
  placeholder: "",
  color: "primary",
  InputProps: {},
  inputProps: {},
};
