import React from "react";
import styled from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";
import Footer from "layouts/Footer/Footer";
import ReturningIcon from "components/ReturningIcon/ReturningIcon";
import { Box, TextField } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";
import MyCustomSelect from "components/Selects/MyCustomSelect";
import CustomDatePicker from "components/CustomDatePicker/CustomDatePicker";
import MyCustomTextField from "components/TextField/MyCustomTextField";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";

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
let TableData = styled.td`
  flex: 1;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
  color: ${defaultTheme.palette.textBoldColor};
`;
let CustomAccordionSummary = styled(AccordionSummary)`
  padding: 0;
  border: 0;
`;
let ArrowDown = styled(IoIosArrowDown)`
  cursor: pointer;
  transition: all 0.3s ease;
  transform: rotate(${(props) => props.rotate});
`;
let CustomAccordionDetails = styled(AccordionDetails)`
  padding: 0px 24px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
`;
let AccordionDetailTitle = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${defaultTheme.palette.textBoldColor};
  margin-bottom: 12px;
`;
let AccordionDetailDisc = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: ${defaultTheme.palette.textBoldColor};
  white-space: wrap;
  margin-bottom: 10px;
`;
let AccordionDetailDisc2 = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: ${defaultTheme.palette.textBoldColor};
  white-space: wrap;
`;

function Agents() {
  //
  const [expanded, setExpanded] = React.useState("");

  const handleChange2 = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  //

  let [agents, setAgents] = React.useState([
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
  ]);

  const [names, setNames] = React.useState("All");

  const handleChange = (event) => {
    setNames(event.target.value);
  };

  return (
    <BoxContainer>
      <Box flex="1" mb="100px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <AgentTitle>Call History</AgentTitle>
          {/*  */}
          <CustomDatePicker />
          {/*  */}
        </Box>

        <Box mt="46px" display="flex">
          <MyCustomTextField placeholder="Search..." />
          <MyCustomSelect names={names} func={handleChange} />
        </Box>

        <Box mt="38px">
          {/* TableContainer */}
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
                <Accordion
                  square
                  expanded={expanded === agent.panel}
                  onChange={handleChange2(agent.panel)}
                >
                  <CustomAccordionSummary>
                    {/* TableRow */}
                    <TableRow key={index}>
                      <TableData>{agent.name}</TableData>
                      <TableData>{agent.date}</TableData>
                      <TableData>{agent.startTime}</TableData>
                      <TableData>{agent.duration}</TableData>
                      <TableData>{agent.caller}</TableData>

                      <TableData
                        style={{
                          minWidth: "70px",
                          flex: 0.3,
                          textAlign: "center",
                        }}
                      >
                        <ArrowDown
                          rotate={agent.panel == expanded ? "180deg" : "0"}
                        />
                      </TableData>
                    </TableRow>
                  </CustomAccordionSummary>
                  <CustomAccordionDetails>
                    <Box
                      width="100%"
                      justifyContent="space-between"
                      display="flex"
                      mb="30px"
                    >
                      <Box flex="1">
                        <AccordionDetailTitle>Reason</AccordionDetailTitle>
                        <AccordionDetailDisc>
                          I want to clear my bank account
                        </AccordionDetailDisc>
                      </Box>
                      <Box flex="1" display="flex" justifyContent="center">
                        <Box>
                          <AccordionDetailTitle>Contact</AccordionDetailTitle>
                          <AccordionDetailDisc>
                            <AiOutlineMail /> john@voki.com
                          </AccordionDetailDisc>
                          <AccordionDetailDisc>
                            <BiPhone /> +447 815 627 52
                          </AccordionDetailDisc>
                        </Box>
                      </Box>
                      <Box flex="1">
                        <AccordionDetailTitle>Review</AccordionDetailTitle>
                        <AccordionDetailDisc>
                          I want to clear my bank account
                        </AccordionDetailDisc>
                      </Box>
                    </Box>
                    <Box>
                      <AccordionDetailTitle>Notes</AccordionDetailTitle>
                    </Box>
                    <Box mt="20px">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        bgcolor={defaultTheme.palette.bgLightColor}
                        padding="13px 25px"
                        mb="17px"
                      >
                        <AccordionDetailDisc2>
                          I need to dig to get more information
                        </AccordionDetailDisc2>
                        <AccordionDetailDisc2>
                          20-JUL-2021 08:03
                        </AccordionDetailDisc2>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        bgcolor={defaultTheme.palette.bgLightColor}
                        padding="13px 25px"
                        mb="17px"
                      >
                        <AccordionDetailDisc2>
                          I need to dig to get more information
                        </AccordionDetailDisc2>
                        <AccordionDetailDisc2>
                          20-JUL-2021 08:03
                        </AccordionDetailDisc2>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        bgcolor={defaultTheme.palette.bgLightColor}
                        padding="13px 25px"
                        mb="17px"
                      >
                        <AccordionDetailDisc2>
                          I need to dig to get more information
                        </AccordionDetailDisc2>
                        <AccordionDetailDisc2>
                          20-JUL-2021 08:03
                        </AccordionDetailDisc2>
                      </Box>
                    </Box>
                  </CustomAccordionDetails>
                </Accordion>
              ))}
            </tbody>
          </TableContainer>

          {/* <Accordion
            square
            expanded={expanded === "panel1"}
            onChange={handleChange2("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Collapsible Group Item #1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            square
            expanded={expanded === "panel2"}
            onChange={handleChange2("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Collapsible Group Item #2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            square
            expanded={expanded === "panel3"}
            onChange={handleChange2("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Collapsible Group Item #3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion> */}
        </Box>
      </Box>
      <Footer />
    </BoxContainer>
  );
}

export default Agents;
