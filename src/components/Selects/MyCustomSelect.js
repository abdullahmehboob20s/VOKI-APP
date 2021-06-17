import React from "react";
import styled from "styled-components";
import { FormControl, MenuItem, Select } from "@material-ui/core";

let CustomSelect = styled(Select)`
  margin-left: 20px;
  width: 200px;
`;

function MyCustomSelect(props) {
  let { data, func } = props;

  return (
    <FormControl variant="outlined">
      <CustomSelect
        id="demo-simple-select-outlined"
        value={data}
        onChange={func}
        defaultValue="All"
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Valentin Tudose">Valentin Tudose</MenuItem>
        <MenuItem value="Valentin Tudose 2">Valentin Tudose 2</MenuItem>
        <MenuItem value="Valentin Tudose 3">Valentin Tudose 3</MenuItem>
        <MenuItem value="Valentin Tudose 4">Valentin Tudose 4</MenuItem>
      </CustomSelect>
    </FormControl>
  );
}

export default MyCustomSelect;
