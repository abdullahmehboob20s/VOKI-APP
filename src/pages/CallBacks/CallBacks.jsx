import React from "react";
import styled from "styled-components";
import Footer from "layouts/Footer/Footer";
import { Box, Typography } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";
import MyCustomSelect from "components/Selects/MyCustomSelect";
import CustomDatePicker from "components/CustomDatePicker/CustomDatePicker";
import MyCustomTextField from "components/TextField/MyCustomTextField";
import phoneCallIcon from "assets/images/phonne-call-icon.svg";

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
`;

const CallBacks = () => {
  let agents = [
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
  ];
  const [names, setNames] = React.useState("All");

  const handleChange = (event) => {
    setNames(event.target.value);
  };

  return (
    <Box bgcolor={defaultTheme.palette.bgLightColor}>
      <Box
        minHeight="100"
        display="flex"
        flexDirection="column"
        pt={12.5}
        pb={6.25}
        px={15.125}
      >
        <Box flex="1" mb={12.5}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h1"
              style={{ color: defaultTheme.palette.textDarkColor }}
            >
              CallBacks
            </Typography>
            <CustomDatePicker />
          </Box>

          <Box mt={5.75} display="flex">
            <MyCustomTextField placeholder="Search..." />
            <Box ml={6.25}>
              <MyCustomSelect names={names} func={handleChange} />
            </Box>
          </Box>

          <Box mt={4.75} mb={12.5}>
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
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default CallBacks;
