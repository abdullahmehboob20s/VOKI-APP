import React from "react";
import defaultTheme from "theme/defaultTheme";
import styled from "styled-components";

let StyledButton = styled.button`
  &&& {
    height: 48px;
    width: ${(props) => props.custom_width};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    box-shadow: 0px 2px 5px ${defaultTheme.palette.shadowBlueColor};
    border-radius: 4px;
    border: none;
    cursor: pointer;

    background: ${(props) =>
      props.border === true
        ? defaultTheme.palette.whiteColor
        : defaultTheme.palette.textDarkColor};
    color: ${(props) =>
      props.border === true
        ? defaultTheme.palette.textDarkColor
        : defaultTheme.palette.whiteColor};
    border: ${(props) =>
      props.border === true
        ? `1px solid ${defaultTheme.palette.textDarkColor}`
        : "none"};
  }
`;

let FormButton = (props) => {
  let { title, onPress, width, type = "button", border } = props;

  return (
    <StyledButton
      variant="contained"
      type={type}
      onClick={onPress}
      custom_width={width}
      border={border}
    >
      {title}
    </StyledButton>
  );
};

export default FormButton;
