import React from "react";
import { Box } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";
import styled from "styled-components";

let StyledButton = styled.button`
  &&& {
    height: 48px;
    color: ${defaultTheme.palette.whiteColor};
    background-color: ${defaultTheme.palette.textDarkColor};
    width: ${(props) => props.custom_width};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    box-shadow: 0px 2px 5px ${defaultTheme.palette.shadowBlueColor};
    border-radius: 4px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: ${defaultTheme.palette.textDarkColor};
    }
  }
`;

let FormButton = (props) => {
  let { title, onPress, width, type = "button" } = props;

  return (
    <Box mt="17px">
      <StyledButton
        variant="contained"
        type={type}
        onClick={onPress}
        custom_width={width}
      >
        {title}
      </StyledButton>
    </Box>
  );
};

export default FormButton;
