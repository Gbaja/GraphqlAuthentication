import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

import LogOutButton from "../logout";
import query from "../../queries/checkAccount";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("CURRENT USER: ", this.props.data);
    return (
      <div>
        Welcome
        <LogOutButton />
      </div>
    );
  }
}

export default graphql(query)(Dashboard);
