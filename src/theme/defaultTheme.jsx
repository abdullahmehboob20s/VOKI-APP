import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontWeight: "bold",
      fontSize: "48px",
      lineHeight: "59px",
    },
    h3: {
      fontWeight: 500,
      fontSize: "17px",
    },
    h4: {
      fontWeight: "bold",
      fontSize: "20px",
      lineHeight: "24px",
    },
    h5: {
      fontWeight: 500,
      fontSize: "20px",
    },
    h6: {
      fontSize: "30px",
      fontWeight: 500,
      lineHeight: "37px",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "20px",
    },
    body2: {
      fontWeight: 500,
      fontSize: "15px",
      lineHeight: "18px",
    },
    caption: {
      fontSize: "30px",
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: "bold",
      fontSize: "32px",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "22px",
    },
    overline: {
      fontWeight: 500,
      fontSize: "24px",
    },
  },
  palette: {
    whiteColor: "#ffffff",
    borderColor: "#B3B8BC",
    bgLightColor: "#F3F8FA",
    bgDarkColor: "#161C2F",
    textLightColor: "#F0F3F6",
    textDarkColor: "#161C2F",
    textBoldColor: "#000000",
    errorColor: "#F00808",
    redBgColor: "#EF4136",
    footerTitleColor: " #413f3f",
    formLabelColor: "#575454",
    shadowBlueColor: " rgba(149, 172, 188, 0.5)",
    lightBlueColor: "rgba(22, 28, 47, 0.75)",
    tabIndicatorColor: "#0874F0",
    tabBackgroundColor: "#EAF0F4",
    headerBackColor: "#14C59C",
  },
});

export default theme;
