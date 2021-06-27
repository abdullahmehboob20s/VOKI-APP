import React from "react";
import styled from "styled-components";
import Footer from "layouts/Footer/Footer";
import { Box, Typography } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";
import MyCustomSelect from "components/Selects/MyCustomSelect";
import CustomDatePicker from "components/CustomDatePicker/CustomDatePicker";
import MyCustomTextField from "components/TextField/MyCustomTextField";
import TableAccordion from "components/Accordion/TableAccordion";
import CallHistoryHeader from "layouts/Header/CallHistoryHeader";

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
`;
let TableHeading = styled.th`
  flex: 1;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 18px;
  color: ${defaultTheme.palette.textBoldColor};
`;

const CallHistory = () => {
  const [expanded, setExpanded] = React.useState("");
  const handleChange2 = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  let agents = [
    {
      id: 1,
      name: "Lucas Franco",
      panel: "panel1",
      date: "07-JAN-2021",
      startTime: "15:30:00",
      duration: "12 min",
      caller: "Valentin Tudose",
    },
    {
      id: 1,
      name: "John Downdall",
      panel: "panel2",
      date: "07-JAN-2021",
      startTime: "15:30:00",
      duration: "12 min",
      caller: "Valentin Tudose",
    },
    {
      id: 1,
      name: "Nir Chatherol",
      panel: "panel3",
      date: "07-JAN-2021",
      startTime: "15:30:00",
      duration: "12 min",
      caller: "Valentin Tudose",
    },
  ];
  const [names, setNames] = React.useState("All");

  const handleChange = (event) => {
    setNames(event.target.value);
  };

  return (
    <Box bgcolor={defaultTheme.palette.bgLightColor}>
      <CallHistoryHeader />

      <Box
        minHeight="100"
        display="flex"
        flexDirection="column"
        py={6.25}
        px={7.5}
      >
        <Box flex="1" mb="100px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h1" color={defaultTheme.palette.textDarkColor}>
              Call History
            </Typography>
            <CustomDatePicker />
          </Box>

          <Box mt="46px" display="flex">
            <MyCustomTextField placeholder="Search..." />
            <MyCustomSelect names={names} func={handleChange} />
          </Box>

          <Box mt="38px">
            <TableContainer as="table">
              <thead>
                <TableRow>
                  <TableHeading>Agent Name</TableHeading>
                  <TableHeading>Date</TableHeading>
                  <TableHeading>Start Time</TableHeading>
                  <TableHeading>Duration</TableHeading>
                  <TableHeading>Caller</TableHeading>
                  <TableHeading
                    style={{ minWidth: "70px", flex: 0.3, textAlign: "center" }}
                  >
                    Details
                  </TableHeading>
                </TableRow>
              </thead>

              <tbody>
                {agents.map((agent, index) => (
                  <TableAccordion
                    expanded={expanded}
                    handleChange2={handleChange2}
                    agent={agent}
                    key={index}
                  />
                ))}
              </tbody>
            </TableContainer>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default CallHistory;
