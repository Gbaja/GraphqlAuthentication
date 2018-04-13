import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class OrgRegistrationForm extends Component {
  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type="text" {...field.input} />
      </div>
    );
  }
  render() {
    return (
      <div>
        <form>
          <h3> Add organisation </h3>
          <Field
            label="Organisation name"
            name="organisation_name"
            component={this.renderField}
          />
          <Field
            label="Organisation type"
            name="organisation_type"
            component={this.renderField}
          />
          <Field
            label="Registered number"
            name="registered_number"
            component={this.renderField}
          />
          <Field label="Email" name="email" component={this.renderField} />
        </form>
      </div>
    );
  }
}

export default OrgRegistrationForm;
