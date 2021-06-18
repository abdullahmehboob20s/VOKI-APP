import React from "react";
import styled from "styled-components";
import CallIcon from "assets/images/call-icon.svg";
import { Box } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";

let CallHeaderTitle = styled.p`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 18px;
  color: ${defaultTheme.palette.textBoldColor};
`;
let CallTimer = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: ${defaultTheme.palette.textBoldColor};
`;
let CallIconWrapper = styled(Box)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${defaultTheme.palette.redBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 20px;
`;

function CallHistoryHeader() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor={defaultTheme.palette.headerBackColor}
      padding="15px 60px"
    >
      <CallHeaderTitle>Valentin Tudose</CallHeaderTitle>
      <Box display="flex" alignItems="center">
        <CallTimer>00:01</CallTimer>
        <CallIconWrapper>
          <img src={CallIcon} alt="" />
        </CallIconWrapper>
      </Box>
    </Box>
  );
}

export default CallHistoryHeader;
