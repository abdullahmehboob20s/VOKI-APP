import React from "react";
import styled from "styled-components";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { Box } from "@material-ui/core";
import defaultTheme from "theme/defaultTheme";
import StarRating from "components/Ratings/StarRating";

let TableRow = styled.tr`
  width: 100%;
  display: flex;
  background-color: ${defaultTheme.palette.whiteColor};
  align-items: center;
  padding: 21px 24px;
`;
let TableData = styled.td`
  flex: 1;
  font-weight: 500;
  font-size: 16px;
  color: ${defaultTheme.palette.textBoldColor};
`;
let CustomAccordionSummary = styled(AccordionSummary)`
  padding: 0;
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

const TableAccordion = (props) => {
  let { agent, handleChange2, expanded } = props;
  return (
    <Accordion
      square
      expanded={expanded === agent.panel}
      onChange={handleChange2(agent.panel)}
    >
      <CustomAccordionSummary>
        <TableRow>
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
            <ArrowDown rotate={agent.panel === expanded ? "180deg" : "0"} />
          </TableData>
        </TableRow>
      </CustomAccordionSummary>
      <CustomAccordionDetails>
        <Box width="100%" justifyContent="space-between" display="flex" mb={4}>
          <Box>
            <AccordionDetailTitle>Reason</AccordionDetailTitle>
            <AccordionDetailDisc>
              I want to clear my bank account
            </AccordionDetailDisc>
          </Box>
          <Box display="flex">
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
          <Box>
            <AccordionDetailTitle>Review</AccordionDetailTitle>
            <AccordionDetailDisc>
              <StarRating />
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
            mb="17px"
            px={3}
            py={1.5}
          >
            <AccordionDetailDisc2>
              I need to dig to get more information
            </AccordionDetailDisc2>
            <AccordionDetailDisc2>20-JUL-2021 08:03</AccordionDetailDisc2>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            bgcolor={defaultTheme.palette.bgLightColor}
            mb="17px"
            px={3}
            py={1.5}
          >
            <AccordionDetailDisc2>
              I need to dig to get more information
            </AccordionDetailDisc2>
            <AccordionDetailDisc2>20-JUL-2021 08:03</AccordionDetailDisc2>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            bgcolor={defaultTheme.palette.bgLightColor}
            mb="17px"
            px={3}
            py={1.5}
          >
            <AccordionDetailDisc2>
              I need to dig to get more information
            </AccordionDetailDisc2>
            <AccordionDetailDisc2>20-JUL-2021 08:03</AccordionDetailDisc2>
          </Box>
        </Box>
      </CustomAccordionDetails>
    </Accordion>
  );
};

export default TableAccordion;
