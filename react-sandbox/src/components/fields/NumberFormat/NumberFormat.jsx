import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import ReactNumberFormat from "react-number-format";

export const NumberFormat = forwardRef((props, ref) => {
  const {
    onChange,
    name,
    prefix,
    thousandSeparator,
    decimalSeparator,
    decimalScale,
    ...other
  } = props;

  return (
    <ReactNumberFormat
      {...other}
      decimalScale={decimalScale}
      thousandSeparator={thousandSeparator}
      decimalSeparator={decimalSeparator}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      prefix={prefix}
    />
  );
});

NumberFormat.displayName = "NumberFormat";

NumberFormat.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  prefix: PropTypes.string,
  thousandSeparator: PropTypes.string,
  decimalSeparator: PropTypes.string,
  decimalScale: PropTypes.number,
};

NumberFormat.defaultProps = {
  onChange: () => {},
  name: "",
  prefix: "",
  thousandSeparator: "",
  decimalSeparator: "",
  decimalScale: 0,
};
