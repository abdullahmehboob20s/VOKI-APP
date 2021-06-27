import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";

let CustomTextField = styled(TextField)`
  flex: 1;
`;

const MyCustomTextField = (props) => {
  let { placeholder } = props;
  return <CustomTextField label={placeholder} variant="outlined" />;
};

export default MyCustomTextField;
