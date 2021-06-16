import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import ReturningIcon from "../ReturningIcon/ReturningIcon";
import defaultTheme from "theme/defaultTheme";

// For Header Select
import { FormControl, Select, MenuItem } from "@material-ui/core";

// material-ui makeStyles
let useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "232px",
    height: "48px",
    borderRadius: "4px",
    border: `1px solid ${defaultTheme.palette.borderColor}`,
  },
  select: {
    height: 48,
  },
}));

function AgentSelect() {
  // material-ui classes
  let classes = useStyles();
  let [filter, setFilter] = React.useState({
    status: "All",
  });

  let handleChange = (e) => {
    setFilter({ status: e.target.value });
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        className={classes.select}
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
      </Select>
    </FormControl>
  );
}

export default AgentSelect;
