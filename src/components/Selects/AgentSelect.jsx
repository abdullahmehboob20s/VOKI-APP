import React from "react";
import styled from "styled-components";
import defaultTheme from "theme/defaultTheme";
import { FormControl, Select, MenuItem, Box } from "@material-ui/core";

import CheckIcon from "@material-ui/icons/Check";
import RemoveIcon from "@material-ui/icons/Remove";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import WifiOffIcon from "@material-ui/icons/WifiOff";

const CustomFormControl = styled(FormControl)`
  width: 232px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid ${defaultTheme.palette.borderColor};
`;
let CustomSelect = styled(Select)`
  height: 48px;
`;
let CustomMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AgentSelect = () => {
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
      >
        <CustomMenuItem value="All">All</CustomMenuItem>
        <CustomMenuItem value="Available">
          Available
          <CheckIcon style={{ marginRight: 10 }} fontSize="small" />
        </CustomMenuItem>
        <CustomMenuItem value="Busy">
          Busy
          <RemoveIcon style={{ marginRight: 10 }} fontSize="small" />
        </CustomMenuItem>
        <CustomMenuItem value="Away">
          Away
          <AccessTimeIcon style={{ marginRight: 10 }} fontSize="small" />
        </CustomMenuItem>
        <CustomMenuItem value="Offline">
          Offline
          <WifiOffIcon style={{ marginRight: 10 }} fontSize="small" />
        </CustomMenuItem>
      </CustomSelect>
    </CustomFormControl>
  );
};

export default AgentSelect;
