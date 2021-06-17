import React from "react";
import Box from "@material-ui/core/Box";

const TabPanel = (props) => {
  let { value, index } = props;

  return (
    <Box display={value == index ? "block" : "none"}>{props.children}</Box>
  );
};

export default TabPanel;
