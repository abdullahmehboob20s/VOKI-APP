import React from "react";
import Button from "@material-ui/core/Button";
import defaultTheme from "theme/defaultTheme";
import styled from "styled-components";

let StyledButton = styled(Button)`
  &&& {
    height: 48px;
    margin-top: 17px;
    color: white;
    background-color: ${defaultTheme.palette.textDarkColor};
    width: ${(props) => props.custom_width};
    &:hover {
      background-color: ${defaultTheme.palette.textDarkColor};
    }
  }
`;

let FormButton = (props) => {
  let { title, onPress, width = "100%" } = props;

  return (
    <StyledButton variant="contained" onClick={onPress} custom_width={width}>
      {title}
    </StyledButton>
  );
};

export default FormButton;
