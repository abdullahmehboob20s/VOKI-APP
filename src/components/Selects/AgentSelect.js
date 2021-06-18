import React from "react";
import styled from "styled-components";
import ReturningIcon from "components/ReturningIcon/ReturningIcon";
import defaultTheme from "theme/defaultTheme";

// For Header Select
import { FormControl, Select, MenuItem } from "@material-ui/core";

// Styling (styled-components)
const CustomFormControl = styled(FormControl)`
  width: 232px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid ${defaultTheme.palette.borderColor};
`;
let CustomSelect = styled(Select)`
  height: 48px;
`;

// AgentSelect (components)
function AgentSelect() {
  let [filter, setFilter] = React.useState({
    status: "All",
  });

  let handleChange = (e) => {
    setFilter({ status: e.target.value });
  };

  return (
    <CustomFormControl variant="outlined">
      <CustomSelect
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={filter.status}
        onChange={handleChange}
        defaultValue="All"
        IconComponent={() => <ReturningIcon agent={filter} />}
      >
        <MenuItem value="All">All </MenuItem>
        <MenuItem value="Available">Available</MenuItem>
        <MenuItem value="Busy">Busy</MenuItem>
        <MenuItem value="Away">Away</MenuItem>
        <MenuItem value="Offline">Offline</MenuItem>
      </CustomSelect>
    </CustomFormControl>
  );
}

export default AgentSelect;
