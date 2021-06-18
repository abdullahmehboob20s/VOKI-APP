import React from "react";
import styled from "styled-components";
import Footer from "layouts/Footer/Footer";
import { Box, TextField } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";
import MyCustomSelect from "components/Selects/MyCustomSelect";
import CustomDatePicker from "components/CustomDatePicker/CustomDatePicker";
import MyCustomTextField from "components/TextField/MyCustomTextField";
import whatsAppIcon from "assets/images/whatsapp-icon.svg";
import phoneCallIcon from "assets/images/phonne-call-icon.svg";

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
`;
let TableData = styled.td`
  flex: ${(props) => props.textAlign || "1"};
  text-align: ${(props) => props.textAlign || "left"};
  font-weight: 500;
  font-size: 16px;
  color: ${defaultTheme.palette.textBoldColor};
  /* border: 2px solid red; */
`;

function CallBacks() {
  const [expanded, setExpanded] = React.useState("");
  const handleChange2 = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  let [agents, setAgents] = React.useState([
    {
      id: 1,
      name: "Valentin Tudose",
      timeSlot: "16:00 - 18:00",
      date: "07-JAN-2021",
    },
    {
      id: 2,
      name: "Valentin Tudose",
      timeSlot: "16:00 - 18:00",
      date: "07-JAN-2021",
    },
    {
      id: 3,
      name: "Valentin Tudose",
      timeSlot: "16:00 - 18:00",
      date: "07-JAN-2021",
    },
    {
      id: 4,
      name: "Valentin Tudose",
      timeSlot: "16:00 - 18:00",
      date: "07-JAN-2021",
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
            <AgentTitle>CallBacks</AgentTitle>
            <CustomDatePicker />
          </Box>

          <Box mt="46px" display="flex">
            <MyCustomTextField placeholder="Search..." />
            <MyCustomSelect names={names} func={handleChange} />
          </Box>

          {/* ============================================= */}
          <Box mt="38px" mb="100px">
            <TableContainer as="table">
              <thead>
                <TableRow>
                  <TableHeading>Agent Name</TableHeading>
                  <TableHeading>Time Slot</TableHeading>
                  <TableHeading>Date</TableHeading>
                  <TableHeading flex="0.3" textAlign="center">
                    Action
                  </TableHeading>
                </TableRow>
              </thead>
              <tbody>
                {agents.map((agent, index) => (
                  <TableRow key={index}>
                    <TableData>{agent.name}</TableData>
                    <TableData>{agent.timeSlot}</TableData>
                    <TableData>{agent.date}</TableData>
                    <TableData flex="0.3" textAlign="center">
                      <img src={phoneCallIcon} alt="" />
                    </TableData>
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

export default CallBacks;
