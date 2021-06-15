import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  customBtn: {
    width: "100%",
    height: "48px",
    marginTop: "17px",
    color: "white",
    backgroundColor: "#161C2F",
    "&:hover": {
      backgroundColor: "#161C2F",
    },
  },
}));

let FormButton = (props) => {
  let classes = useStyles();
  let { title = "title", onPress } = props;

  return (
    <Button variant="contained" onClick={onPress} className={classes.customBtn}>
      {title}
    </Button>
  );
};

export default FormButton;
