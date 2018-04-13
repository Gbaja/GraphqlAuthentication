import { BrowserRouter, Switch, Route } from "react-router-dom";

import React, { Component } from "react";
import Landing from "./landing/Landing";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
