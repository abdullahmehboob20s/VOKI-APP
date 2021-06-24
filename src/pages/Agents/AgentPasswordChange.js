import React from "react";
import Footer from "layouts/Footer/Footer";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";

let MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${defaultTheme.palette.bgLightColor};
  padding: 50px 60px;

  @media (max-width: 500px) {
    min-height: 700px;
  }
`;
let CreateAgentTitle = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  color: ${defaultTheme.palette.textDarkColor};
`;
let CreateAgentSubtitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  margin-top: 24px;
  color: ${defaultTheme.palette.textBoldColor};
`;

const AgentPasswordChange = () => {
  return (
    <MainContainer>
      {/* Title */}
      <Box flex="1">
        <CreateAgentTitle>Create Agent</CreateAgentTitle>
        <CreateAgentSubtitle>
          An email will be sent to the agent where the password can be changed.
        </CreateAgentSubtitle>
      </Box>

      {/* Footer */}
      <Footer />
    </MainContainer>
  );
};

export default AgentPasswordChange;
