import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class OrgRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organisationName: "",
      organisationType: "",
      registeredNumber: "",
      telephoneNumber: "",
      email: "",
      verified: false
    };
  }
  onSubmit = event => {
    event.preventDefault();
    console.log("form");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h3> Add organisation </h3>
          <label htmlFor="organisationName">Organisation name </label>
          <input
            type="text"
            value={this.state.organisationName}
            id="organisationName"
            onChange={event =>
              this.setState({ organisationName: event.target.value })
            }
          />
          <label htmlFor="organisationType">Organisation name </label>
          <input
            type="text"
            value={this.state.organisationType}
            id="organisationType"
            onChange={event =>
              this.setState({ organisationType: event.target.value })
            }
          />
          <label htmlFor="registeredNumber">Organisation name </label>
          <input
            type="text"
            value={this.state.registeredNumber}
            id="registeredNumber"
            onChange={event =>
              this.setState({ registeredNumber: event.target.value })
            }
          />
          <label htmlFor="telephoneNumber">Organisation name </label>
          <input
            type="text"
            value={this.state.telephoneNumber}
            id="telephoneNumber"
            onChange={event =>
              this.setState({ telephoneNumber: event.target.value })
            }
          />
          <label htmlFor="email">Organisation name </label>
          <input
            type="text"
            value={this.state.email}
            id="email"
            onChange={event => this.setState({ email: event.target.value })}
          />
          <button type="submit"> Register </button>
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation newOrganisation(
    $organisation_name: String
    $organisation_type: String
    $registered_number: String
    $telephone_number: String
    $email: String
    $password: String
    $verified: Boolean
  ) {
    addOrganisation(
      organisation_name: $organisation_name
      organisation_type: $organisation_type
      registered_number: $registered_number
      telephone_number: $telephone_number
      email: $email
      password: $password
      verified: $verified
    ) {
      id
      organisation_name
    }
  }
`;
export default graphql(mutation)(OrgRegistrationForm);
