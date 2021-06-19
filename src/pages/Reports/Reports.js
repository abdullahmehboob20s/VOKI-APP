import React from "react";
import styled from "styled-components";
import Footer from "layouts/Footer/Footer";
import { Box } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";
import MyCustomSelect from "components/Selects/MyCustomSelect";
import CustomDatePicker from "components/CustomDatePicker/CustomDatePicker";
import StartRating from "components/Ratings/StarRating";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

let BoxContainer = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px 60px;
`;
let AgentTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
  color: ${defaultTheme.palette.textDarkColor};
`;
let TableHeading = styled.th`
  flex: ${(props) => props.textAlign || "1"};
  text-align: ${(props) => props.textAlign || "left"};
  font-family: Montserrat;
  font-weight: 600;
  font-size: 18px;
  color: ${defaultTheme.palette.textBoldColor};
  padding-right: 20px;
`;
let CustomTableContainer = styled(TableContainer)`
  &.MuiTableContainer-root {
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    margin-bottom: 44px;
  }
`;

let CustomTableRow = styled(TableRow)``;
let CustomTableCell = styled(TableCell)`
  &.MuiTableCell-root {
  }

  &.MuiTableCell-head {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 18px;
    color: ${defaultTheme.palette.textBoldColor};
  }
  &.MuiTableCell-body {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    color: ${defaultTheme.palette.textBoldColor};
  }
`;

function Reports() {
  let [agents, setAgents] = React.useState([
    {
      id: 1,
      averageHandleTime: "10 minutes",
      totalCallsHandle: "100 Calls",
      accupayRate: "70%(total min. in conversation/total min. available)",
      qualityOfServices:
        "63%(Numbers of Calls Handled / Numbers of Calls Requests)",
      averageWaitingTime: "4 minutes",
      numberCallBacks: " 200 calls",
    },
  ]);
  const [names, setNames] = React.useState("All");

  const handleChange = (event) => {
    setNames(event.target.value);
  };

  return (
    <Box bgcolor={defaultTheme.palette.bgLightColor}>
      <BoxContainer>
        <Box flex="1" mb="100px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <AgentTitle>Reports</AgentTitle>
            <CustomDatePicker />
          </Box>

          <Box
            mt="46px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" alignItems="center">
              <Box mr="10px">
                <TableHeading>Company Name </TableHeading>
              </Box>
              <StartRating />
            </Box>
            <MyCustomSelect names={names} func={handleChange} />
          </Box>

          {/* ============================================= */}
          <Box mt="38px">
            <CustomTableContainer>
              <Table>
                <TableHead>
                  <CustomTableRow>
                    <CustomTableCell>Agent Name </CustomTableCell>
                    <CustomTableCell>Total Calls Handle</CustomTableCell>
                    <CustomTableCell>Ocupancy Rate</CustomTableCell>
                    <CustomTableCell>Quality of Service</CustomTableCell>
                    <CustomTableCell>Average Waiting Time</CustomTableCell>
                    <CustomTableCell>Number of Callbacks</CustomTableCell>
                  </CustomTableRow>
                </TableHead>
                <TableBody>
                  {agents.map((agent, index) => (
                    <CustomTableRow key={index}>
                      <CustomTableCell>
                        {agent.averageHandleTime}
                      </CustomTableCell>
                      <CustomTableCell>
                        {agent.totalCallsHandle}
                      </CustomTableCell>
                      <CustomTableCell>{agent.accupayRate}</CustomTableCell>
                      <CustomTableCell>
                        {agent.qualityOfServices}
                      </CustomTableCell>
                      <CustomTableCell>
                        {agent.averageWaitingTime}
                      </CustomTableCell>
                      <CustomTableCell>{agent.numberCallBacks}</CustomTableCell>
                    </CustomTableRow>
                  ))}
                </TableBody>
              </Table>
            </CustomTableContainer>
          </Box>
          {/* ============================================= */}
        </Box>
        <Footer />
      </BoxContainer>
    </Box>
  );
}

export default Reports;
