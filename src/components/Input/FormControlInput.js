import React from "react";
import styled from "styled-components";
import { InputBase, FormControl, FormLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import red from "@material-ui/core/colors/red";
import defaultTheme from "theme/defaultTheme";

const useStyles = makeStyles((theme) => ({
  textField: {
    border: `1px solid ${defaultTheme.palette.textDarkColor}`,
    borderRadius: "4px",
    padding: theme.spacing(2),
    height: "48px",
  },
  textFieldLabel: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    color: `${defaultTheme.palette.textDarkColor}`,
    marginBottom: "8px",
  },
}));

function FormControlInput(props) {
  let classes = useStyles();
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
      <FormLabel className={classes.textFieldLabel} htmlFor={forhtml}>
        {label}
      </FormLabel>
      <InputBase
        name={name}
        value={value}
        id={forhtml}
        className={classes.textField}
        style={{
          width: "100%",
          border: error ? `1px solid ${red[500]}` : null,
        }}
        variant="outlined"
        type={type}
        onChange={onchange}
      />
      {error ? (
        <FormHelperText id="component-error-text">{errorMsg}</FormHelperText>
      ) : null}
    </FormControl>
  );
}

export default FormControlInput;
