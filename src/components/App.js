import { BrowserRouter, Switch, Route } from "react-router-dom";

import React, { Component } from "react";
import Landing from "./landing/Landing";
import SignupForm from "./register_organisation/form";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup_form" component={SignupForm} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
