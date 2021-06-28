import React from "react";
import CallIcon from "assets/images/call-icon.svg";
import { Box, Typography } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";

const CallHistoryHeader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor={defaultTheme.palette.headerBackColor}
      padding="15px 60px"
    >
      <Typography
        style={{ color: defaultTheme.palette.textBoldColor }}
        variant="body1"
      >
        Valentin Tudose
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography
          variant="overline"
          style={{ color: defaultTheme.palette.textBoldColor }}
        >
          00:01
        </Typography>
        <Box
          width="48px"
          height="48px"
          borderRadius="50%"
          bgcolor={defaultTheme.palette.redBgColor}
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          ml="20px"
        >
          <img src={CallIcon} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default CallHistoryHeader;
