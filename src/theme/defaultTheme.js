import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h5: {
      fontSize: "30px",
      fontWeight: 500,
      lineHeight: "37px",
      color: "#161C2F",
    },
    h6: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "20px",
      color: "#161C2F",
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
