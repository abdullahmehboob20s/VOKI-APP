import React from "react";
import styled from "styled-components";
import Footer from "layouts/Footer/Footer";
import { Box, Tabs, Tab } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";
import whatsAppIcon from "assets/images/whatsapp-icon.svg";
import phoneCallIcon from "assets/images/phonne-call-icon.svg";
import TabPanel from "components/TabPanel/TabPanel";

let BoxContainer = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px 60px;
  background-color: ${defaultTheme.palette.bgLightColor};
  /* border: 2px solid red; */
`;
let AgentTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
  color: ${defaultTheme.palette.textDarkColor};
`;
let TableContainer = styled.table`
  width: 100%;
  text-align: left;
  border-radius: 4px;
  height: auto;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 44px;

  & tbody tr:not(:last-child) {
    border-bottom: 1px solid ${defaultTheme.palette.borderColor};
  }
  & thead tr {
    border-bottom: 1px solid ${defaultTheme.palette.borderColor};
  }
`;
let TableRow = styled.tr`
  display: flex;
  background-color: ${defaultTheme.palette.whiteColor};
  padding: 21px 24px;
  align-items: center;
`;
let TableHeading = styled.th`
  flex: 1;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 18px;
  color: ${defaultTheme.palette.textBoldColor};
`;
let TableData = styled.td`
  flex: 1;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
  color: ${defaultTheme.palette.textBoldColor};
`;
let CustomTab = styled(Tab)`
  font-weight: 700;
  font-size: 18px;
  text-transform: none;
  color: ${defaultTheme.palette.textDarkColor};
  background-color: ${defaultTheme.palette.tabBackgroundColor};
  padding: 0 40px;

  &.Mui-selected {
    color: ${defaultTheme.palette.tabIndicatorColor};
  }
`;

function Agents() {
  let [agents, setAgents] = React.useState([
    {
      id: 1,
      name: "Valentin Tudose",
      reason: "I want to clear my bank account",
      duration: "12 min",
      callThrough: "whatsapp",
    },
    {
      id: 2,
      name: "Valentin Tudose",
      reason: "I want to clear my bank account",
      duration: "5 min",
      callThrough: "whatsapp",
    },
    {
      id: 3,
      name: "Valentin Tudose",
      reason: "I want to clear my bank account",
      duration: "50 min (1h 10min left)",
      callThrough: "phone",
    },
    {
      id: 4,
      name: "Valentin Tudose",
      reason: "I want to clear my bank account",
      duration: "1 min",
      callThrough: "whatsapp",
    },
  ]);
  let [currentTab, setCurrentTab] = React.useState(0);

  let handleTabChange = (e, index) => {
    setCurrentTab(index);
  };

  return (
    <BoxContainer>
      <Box flex="1">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <AgentTitle>Calls</AgentTitle>
          <Box>
            <Tabs
              value={currentTab}
              onChange={handleTabChange}
              textColor="primary"
              TabIndicatorProps={{
                style: {
                  backgroundColor: defaultTheme.palette.tabIndicatorColor,
                  height: "4px",
                  color: "red",
                },
              }}
            >
              <CustomTab label="In Queue (4)" />
              <CustomTab label="In Progress (42)" />
            </Tabs>
          </Box>
        </Box>

        <Box mt="38px" mb="100px">
          <TabPanel value={currentTab} index={0}>
            <TableContainer as="table">
              <thead>
                <TableRow>
                  <TableHeading>Customer Name</TableHeading>
                  <TableHeading>Reason</TableHeading>
                  <TableHeading>Duration in Queue</TableHeading>
                  <TableHeading style={{ flex: 0.3, textAlign: "center" }}>
                    Action
                  </TableHeading>
                </TableRow>
              </thead>
              <tbody>
                {agents.map((agent, index) => (
                  <TableRow key={index}>
                    <TableData>{agent.name}</TableData>
                    <TableData>{agent.reason}</TableData>
                    <TableData>{agent.duration}</TableData>
                    <TableData style={{ flex: 0.3, textAlign: "center" }}>
                      {agent.callThrough == "whatsapp" ? (
                        <img src={whatsAppIcon} alt="" />
                      ) : (
                        <img src={phoneCallIcon} alt="" />
                      )}
                    </TableData>
                  </TableRow>
                ))}
              </tbody>
            </TableContainer>
          </TabPanel>
          <TabPanel value={currentTab} index={1}>
            <TableHeading>In Progress...</TableHeading>
          </TabPanel>
        </Box>
      </Box>
      <Footer />
    </BoxContainer>
  );
}

export default Agents;
