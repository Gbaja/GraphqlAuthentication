import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

import LogOutButton from "../logout";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Welcome
        <LogOutButton />
      </div>
    );
  }
}

export default Dashboard;
