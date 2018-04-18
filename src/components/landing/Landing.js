import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

class Landing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.data.organisation);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bridge Map</h1>
        </header>
        <Link to="/signup_form"> Sign up </Link>
        <Link to="/login_form"> Log in </Link>
      </div>
    );
  }
}

const query = gql`
  {
    organisation(id: "22") {
      id
      organisation_name
      email
      password
      verified
    }
  }
`;

export default graphql(query)(Landing);
