import React from "react";
import Footer from "layouts/Footer/Footer";
import { Box, Typography } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";

const AgentPasswordChange = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      position="relative"
      bgcolor={defaultTheme.palette.bgLightColor}
      pt={12.5}
      pb={6.25}
      px={15.125}
    >
      <Box flex="1">
        <Typography variant="h1">Create Agent</Typography>
        <Box mt="24px">
          <Typography
            variant="h3"
            style={{ color: defaultTheme.palette.textBoldColor }}
          >
            An email will be sent to the agent where the password can be
            changed.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default AgentPasswordChange;
