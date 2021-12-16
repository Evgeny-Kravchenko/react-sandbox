import React, { useState } from "react";

import { Box } from "@mui/material";

import { TextField } from "./TextField";
import { NumberFormat } from "../NumberFormat";

export default {
  title: "TextField",
  component: TextField,
  subcomponents: { NumberFormat },
};

export const OutlinedTextField = () => {
  const [value, setValue] = useState("");

  const onChange = (name, value) => {
    if (name === "test-name") {
      setValue(value);
    }
  };

  return (
    <TextField
      label="Outlined text field"
      name="test-name"
      value={value}
      onChange={onChange}
    />
  );
};

export const FilledTextField = () => {
  const [value, setValue] = useState("");

  const onChange = (name, value) => {
    if (name === "test-name") {
      setValue(value);
    }
  };

  return (
    <TextField
      variant="filled"
      label="Filled text field"
      name="test-name"
      value={value}
      onChange={onChange}
    />
  );
};

export const StandartTextField = () => {
  const [value, setValue] = useState("");

  const onChange = (name, value) => {
    if (name === "test-name") {
      setValue(value);
    }
  };
  return (
    <TextField
      variant="standard"
      label="Default text field"
      name="test-name"
      value={value}
      onChange={onChange}
    />
  );
};

export const TextFieldWithError = () => {
  const [value, setValue] = useState("");

  const onChange = (name, value) => {
    if (name === "test-name") {
      setValue(value);
    }
  };

  return (
    <TextField
      error={!Boolean(value)}
      label="Required text field"
      helperText={!value ? "Required field" : null}
      name="test-name"
      value={value}
      onChange={onChange}
    />
  );
};

export const TextFieldSizes = () => {
  const [value, setValue] = useState("");

  const onChange = (name, value) => {
    if (name === "test-name") {
      setValue(value);
    }
  };

  return (
    <>
      <Box mb={2}>
        <TextField
          label="Small text field"
          name="test-name"
          value={value}
          onChange={onChange}
          size="small"
          placeholder="Type here"
        />
      </Box>
      <Box mb={2}>
        <TextField
          variant="filled"
          label="Medium text field"
          name="test-name"
          value={value}
          onChange={onChange}
          placeholder="Type here"
        />
      </Box>
    </>
  );
};

export const TextFieldColors = () => {
  const [value, setValue] = useState("");

  const onChange = (name, value) => {
    if (name === "test-name") {
      setValue(value);
    }
  };

  return (
    <>
      <Box mb={2}>
        <TextField
          label="Success text field"
          name="test-name"
          value={value}
          onChange={onChange}
          placeholder="Type here"
          color="success"
        />
      </Box>
      <Box mb={2}>
        <TextField
          variant="filled"
          label="Error text field"
          name="test-name"
          value={value}
          onChange={onChange}
          placeholder="Type here"
          color="error"
        />
      </Box>
      <Box mb={2}>
        <TextField
          variant="standard"
          label="Primary text field"
          name="test-name"
          value={value}
          onChange={onChange}
          placeholder="Type here"
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Warning text field"
          name="test-name"
          value={value}
          onChange={onChange}
          placeholder="Type here"
          color="warning"
        />
      </Box>
      <Box mb={2}>
        <TextField
          variant="filled"
          label="Secondary text field"
          name="test-name"
          value={value}
          onChange={onChange}
          placeholder="Type here"
          color="secondary"
        />
      </Box>
      <Box mb={2}>
        <TextField
          variant="standard"
          label="Info text field"
          name="test-name"
          value={value}
          onChange={onChange}
          placeholder="Type here"
          color="info"
        />
      </Box>
    </>
  );
};

export const NumericTextField = () => {
  const [value, setValue] = useState("");

  const onChange = (name, value) => {
    if (name === "test-name") {
      setValue(value);
    }
  };

  return (
    <TextField
      variant="outlined"
      label="Number text field"
      name="test-name"
      value={value}
      onChange={onChange}
      InputProps={{ inputComponent: NumberFormat }}
      inputProps={{
        isNumericString: true,
        fixedDecimalScale: true,
        thousandSeparator: ".",
        decimalSeparator: ",",
        decimalScale: 2,
        allowNegative: false,
        suffix: "$",
      }}
    />
  );
};
