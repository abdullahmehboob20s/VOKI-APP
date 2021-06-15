import React from "react";

// react-router-dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";
import ResetPassword from "../pages/ResetPassword";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/forgetpassword" exact component={ForgetPassword} />
        <Route path="/resetpassword" exact component={ResetPassword} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
