import React from "react";
import Sidebar from "layouts/Sidebar/Sidebar";

// react-router-dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "theme/defaultTheme";

// Pages
import Login from "../pages/Login/Login";
import ForgetPassword from "../pages/ForgotPassword/ForgetPassword";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Agents from "../pages/Agents/Agents";
import CallBacks from "../pages/CallBacks/CallBacks";
import CallHistory from "../pages/CallHistory/CallHistory";
import Calls from "../pages/Calls/Calls";
import Phone from "../pages/Phone/Phone";
import Reports from "../pages/Reports/Reports";

// material-ui (imports)
import { Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";

function AppRoutes() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/forgetpassword" exact component={ForgetPassword} />
          <Route path="/resetpassword" exact component={ResetPassword} />
          {/*  */}

          <Box position="relative">
            <Sidebar />
            <Box ml="350px">
              <Route path="/Agents" exact component={Agents} />
              <Route path="/CallBacks" exact component={CallBacks} />
              <Route path="/CallHistory" exact component={CallHistory} />
              <Route path="/Calls" exact component={Calls} />
              <Route path="/Phone" exact component={Phone} />
              <Route path="/Reports" exact component={Reports} />
            </Box>
          </Box>

          {/*  */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default AppRoutes;
