import React from "react";
import styled from "styled-components";
import Footer from "layouts/Footer/Footer";
import { Box } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";
import MyCustomSelect from "components/Selects/MyCustomSelect";
import CustomDatePicker from "components/CustomDatePicker/CustomDatePicker";
import StartRating from "components/Ratings/StarRating";

let BoxContainer = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px 60px;

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
  width: 100%;
  display: flex;
  background-color: ${defaultTheme.palette.whiteColor};
  align-items: center;
  padding: 21px 24px;
  /* border: 2px solid red; */
`;
let TableHeading = styled.th`
  flex: ${(props) => props.textAlign || "1"};
  text-align: ${(props) => props.textAlign || "left"};
  font-family: Montserrat;
  font-weight: 600;
  font-size: 18px;
  color: ${defaultTheme.palette.textBoldColor};
  padding-right: 20px;
  /* border: 2px solid red; */
`;
let TableData = styled.td`
  flex: ${(props) => props.textAlign || "1"};
  text-align: ${(props) => props.textAlign || "left"};
  font-weight: 500;
  font-size: 16px;
  color: ${defaultTheme.palette.textBoldColor};
  /* padding-right: 20px; */
  /* border: 2px solid red; */
`;

function Reports() {
  const [expanded, setExpanded] = React.useState("");
  const handleChange2 = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
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
            <TableContainer as="table">
              <thead>
                <TableRow>
                  <TableHeading>Agent Name</TableHeading>
                  <TableHeading>Total Calls Handle</TableHeading>
                  <TableHeading>Ocupancy Rate</TableHeading>
                  <TableHeading>Quality of Service</TableHeading>
                  <TableHeading>Average Waiting Time</TableHeading>
                  <TableHeading>Number of Callbacks</TableHeading>
                </TableRow>
              </thead>
              <tbody>
                {agents.map((agent, index) => (
                  <TableRow key={index}>
                    <TableData>{agent.averageHandleTime}</TableData>
                    <TableData>{agent.totalCallsHandle}</TableData>
                    <TableData>{agent.accupayRate}</TableData>
                    <TableData>{agent.qualityOfServices}</TableData>
                    <TableData>{agent.averageWaitingTime}</TableData>
                    <TableData>{agent.numberCallBacks}</TableData>
                  </TableRow>
                ))}
              </tbody>
            </TableContainer>
          </Box>
          {/* ============================================= */}
        </Box>
        <Footer />
      </BoxContainer>
    </Box>
  );
}

export default Reports;
