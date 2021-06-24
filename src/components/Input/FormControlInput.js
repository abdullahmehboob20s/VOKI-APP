import React from "react";
import styled from "styled-components";
import { InputBase, FormControl, FormLabel } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import red from "@material-ui/core/colors/red";
import defaultTheme from "theme/defaultTheme";

let StyledTextField = styled(InputBase)`
  width: ${(props) => props.width};
  border: 1px solid ${defaultTheme.palette.textDarkColor};
  border-radius: 4px;
  padding: 10px;
  height: 48px;
  border: ${(props) => props.customborder};
`;

let CustomFormLabel = styled(FormLabel)`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${defaultTheme.palette.textDarkColor};
  margin-bottom: 8px;
`;

const FormControlInput = (props) => {
  let {
    label = "label",
    type = "type",
    marginBottom = "16px",
    width = "100%",
    forhtml,
    error = false,
    errorMsg = "error message",
    onchange,
    value,
    name,
  } = props;

  return (
    <FormControl
      error={error}
      style={{ width: width, marginBottom: marginBottom }}
    >
      <CustomFormLabel htmlFor={forhtml}>{label}</CustomFormLabel>
      <StyledTextField
        name={name}
        value={value}
        id={forhtml}
        variant="outlined"
        type={type}
        onChange={onchange}
        customborder={error ? `1px solid ${red[500]}` : null}
        width={width}
      />
      {error ? (
        <FormHelperText id="component-error-text">{errorMsg}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default FormControlInput;
