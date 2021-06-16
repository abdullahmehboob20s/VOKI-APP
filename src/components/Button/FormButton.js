import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import defaultTheme from "theme/defaultTheme";

const useStyles = makeStyles((theme) => ({
  customBtn: {
    // width: "100%",
    height: "48px",
    marginTop: "17px",
    color: "white",
    backgroundColor: `${defaultTheme.palette.textDarkColor}`,
    "&:hover": {
      backgroundColor: `${defaultTheme.palette.textDarkColor}`,
    },
  },
}));

let FormButton = (props) => {
  let classes = useStyles();
  let { title, onPress, width = "100%" } = props;

  return (
    <Button
      variant="contained"
      onClick={onPress}
      style={{ width: width }}
      className={classes.customBtn}
    >
      {title}
    </Button>
  );
};

export default FormButton;
