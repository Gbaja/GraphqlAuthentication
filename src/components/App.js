import { BrowserRouter, Switch, Route } from "react-router-dom";

import React, { Component } from "react";
import Landing from "./landing/Landing";
import SignupForm from "./register/signup_form";
import LoginForm from "./log_in/login_form";
import Dashboard from "./dashboard/dashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup_form" component={SignupForm} />
          <Route exact path="/login_form" component={LoginForm} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
