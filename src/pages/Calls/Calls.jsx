import React from "react";
import styled from "styled-components";
import Footer from "layouts/Footer/Footer";
import { Box, Tabs, Tab, Typography } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";
import whatsAppIcon from "assets/images/whatsapp-icon.svg";
import phoneCallIcon from "assets/images/phonne-call-icon.svg";
import TabPanel from "components/TabPanel/TabPanel";

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

const Calls = () => {
  let agents = [
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
  ];
  let [currentTab, setCurrentTab] = React.useState(0);

  let handleTabChange = (e, index) => {
    setCurrentTab(index);
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      pt={12.5}
      pb={6.25}
      px={15.125}
      bgcolor={defaultTheme.palette.bgLightColor}
    >
      <Box flex="1">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h1"
            style={{ color: defaultTheme.palette.textDarkColor }}
          >
            Calls
          </Typography>
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

        <Box mt={4.75} mb={12.5}>
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
                      {agent.callThrough === "whatsapp" ? (
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
    </Box>
  );
};

export default Calls;
