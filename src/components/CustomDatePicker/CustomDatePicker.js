import React from "react";
import styled from "styled-components";

import MomentUtils from "@date-io/moment";
import { BsArrowRightShort } from "react-icons/bs";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Box } from "@material-ui/core";

let DatePicker = styled(KeyboardDatePicker)`
  width: 200px;
  border-color: red;
`;

function CustomDatePicker() {
  const [fromDate, setFromDate] = React.useState(new Date());
  const [toDate, setToDate] = React.useState(new Date());

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };
  const handleToDateChange = (date) => {
    setToDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Box display="flex" alignItems="center">
        <DatePicker
          inputVariant="outlined"
          format="MM/dd/yyyy"
          value={fromDate}
          onChange={(date) => handleFromDateChange(date)}
        />
        <Box margin="0 10px" fontSize="30px">
          <BsArrowRightShort />
        </Box>
        <DatePicker
          inputVariant="outlined"
          format="MM/dd/yyyy"
          value={toDate}
          onChange={(date) => handleToDateChange(date)}
        />
      </Box>
    </MuiPickersUtilsProvider>
  );
}

export default CustomDatePicker;
