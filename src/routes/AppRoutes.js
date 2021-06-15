import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";

// react-router-dom
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/forgetpassword" exact component={ForgetPassword} />
        <Route path="/resetpassword" exact component={ResetPassword} />
        {/*  */}

        <ContainerWrapper>
          <Sidebar />
          <ContainerWrapperBody>
            <Route path="/Agents" exact component={Agents} />
            <Route path="/CallBacks" exact component={CallBacks} />
            <Route path="/CallHistory" exact component={CallHistory} />
            <Route path="/Calls" exact component={Calls} />
            <Route path="/Phone" exact component={Phone} />
            <Route path="/Reports" exact component={Reports} />
          </ContainerWrapperBody>
        </ContainerWrapper>

        {/*  */}
      </Switch>
    </Router>
  );
}

export default AppRoutes;

let ContainerWrapper = styled.div`
  position: relative;
`;

let ContainerWrapperBody = styled.div`
  margin-left: 350px;
`;
