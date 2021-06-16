import React from "react";

// Icons
import CheckIcon from "@material-ui/icons/Check";
import RemoveIcon from "@material-ui/icons/Remove";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import WifiOffIcon from "@material-ui/icons/WifiOff";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function ReturningIcon({ agent }) {
  if (agent.status == "All")
    return (
      <KeyboardArrowDownIcon style={{ marginRight: 10 }} fontSize="small" />
    );
  if (agent.status == "Available")
    return <CheckIcon style={{ marginRight: 10 }} fontSize="small" />;
  if (agent.status == "Busy")
    return <RemoveIcon style={{ marginRight: 10 }} fontSize="small" />;
  if (agent.status == "Away")
    return <AccessTimeIcon style={{ marginRight: 10 }} fontSize="small" />;
  if (agent.status == "Offline")
    return <WifiOffIcon style={{ marginRight: 10 }} fontSize="small" />;
}

export default ReturningIcon;
