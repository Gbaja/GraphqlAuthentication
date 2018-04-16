import React, { Component } from "react";
import { graphql } from "react-apollo";

import mutation from "../../mutations/register";

class OrgRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      accountType: "Mentor",
      email: "",
      password: "",
      confirmPassword: ""
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
          <select
            value={this.state.accountType}
            onChange={event =>
              this.setState({ accountType: event.target.value })
            }
          >
            <option value="Mentor">Mentor</option>
            <option value="Mentee">Mentee</option>
          </select>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            value={this.state.email}
            id="email"
            onChange={event => this.setState({ email: event.target.value })}
          />
          <label htmlFor="email">Password </label>
          <input
            type="password"
            value={this.state.password}
            id="email"
            onChange={event => this.setState({ password: event.target.value })}
          />
          <label htmlFor="email">Confirm Password </label>
          <input
            type="password"
            value={this.state.confirmPassword}
            id="email"
            onChange={event =>
              this.setState({ confirmPassword: event.target.value })
            }
          />
          <button type="submit"> Register </button>
        </form>
      </div>
    );
  }
}

export default graphql(mutation)(OrgRegistrationForm);
