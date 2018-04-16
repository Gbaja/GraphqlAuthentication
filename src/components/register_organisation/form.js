import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class OrgRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      accountType: "",
      email: "",
      password: ""
    };
  }
  onSubmit = event => {
    event.preventDefault();
    console.log("form");
    this.props.mutate({
      variables: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        accountType: this.state.accountType,
        email: this.state.email,
        password: this.state.password
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h3> Sign up </h3>
          <label htmlFor="firstName">First Name </label>
          <input
            type="text"
            value={this.state.firstName}
            id="firstName"
            onChange={event => this.setState({ firstName: event.target.value })}
          />
          <label htmlFor="lastName">Last Name </label>
          <input
            type="text"
            value={this.state.lastName}
            id="lastName"
            onChange={event => this.setState({ lastName: event.target.value })}
          />
          <label htmlFor="accountType">I am a ... </label>
          <input
            type="text"
            value={this.state.accountType}
            id="accountType"
            onChange={event =>
              this.setState({ accountType: event.target.value })
            }
          />
          <label htmlFor="telephoneNumber">Email </label>
          <input
            type="text"
            value={this.state.telephoneNumber}
            id="telephoneNumber"
            onChange={event =>
              this.setState({ telephoneNumber: event.target.value })
            }
          />
          <label htmlFor="email">Password </label>
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
