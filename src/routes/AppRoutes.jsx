import React from "react";
import Sidebar from "layouts/Sidebar/Sidebar";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "theme/defaultTheme";
import Login from "pages/Login/Login";
import ForgetPassword from "pages/ForgotPassword/ForgetPassword";
import ResetPassword from "pages/ResetPassword/ResetPassword";
import Agents from "pages/Agents/Agents";
import CallBacks from "pages/CallBacks/CallBacks";
import CallHistory from "pages/CallHistory/CallHistory";
import Calls from "pages/Calls/Calls";
import Phone from "pages/Phone/Phone";
import Reports from "pages/Reports/Reports";
import CreateAgentPage from "pages/Agents/CreateAgentPage";
import AgentPasswordChange from "pages/Agents/AgentPasswordChange";
import { Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
`;

const AppRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route
            path="/agents/forgetpassword"
            exact
            component={ForgetPassword}
          />
          <Route path="/agents/resetpassword" exact component={ResetPassword} />

          <Box position="relative">
            <Sidebar />
            <Box ml="300px">
              <Route path="/Agents" exact component={Agents} />
              <Route
                exact
                path="/Agents/createAgent"
                component={CreateAgentPage}
              />
              <Route
                exact
                path="/Agents/agentPasswordChange"
                component={AgentPasswordChange}
              />
              <Route path="/agents/CallBacks" exact component={CallBacks} />
              <Route path="/agents/CallHistory" exact component={CallHistory} />
              <Route path="/agents/Calls" exact component={Calls} />
              <Route path="/agents/Phone" exact component={Phone} />
              <Route path="/agents/Reports" exact component={Reports} />
            </Box>
          </Box>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRoutes;
