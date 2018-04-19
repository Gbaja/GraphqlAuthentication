import React, { Component } from "react";
import { graphql } from "react-apollo";

import mutation from "../mutations/logout";

class LogOutButton extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    console.log("YOU CLICKED LOGOUT");
    this.props.mutate().then(() => {
      console.log("HEYYY");
      this.props.history.push("/");
    });
  }
  render() {
    return <button onClick={this.onClick}>Log out </button>;
  }
}

export default graphql(mutation)(LogOutButton);
