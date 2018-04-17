import React, { Component } from "react";
import { render } from "react-dom";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import { graphql } from "react-apollo";

import mutation from "../../mutations/register";

const App = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form>
      <div>
        {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
        <Field type="firstName" name="firstName" placeholder="firstName" />
      </div>
      <div>
        {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
        <Field type="lastName" name="lastName" placeholder="lastName" />
      </div>
      <Field component="select" name="accountType">
        <option value="Mentor">Mentor</option>
        <option value="Mentee">Mentee</option>
      </Field>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="email" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <div>
        {touched.confirmPassword &&
          errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        <Field
          type="confirmPassword"
          name="confirmPassword"
          placeholder="confirmPassword"
        />
      </div>
      {/* <label>
        <Field type="checkbox" name="newsletter" checked={values.newsletter} />
        Join our newsletter
      </label> */}
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
};

const FormikApp = withFormik({
  mapPropsToValues() {
    return {
      firstName: "",
      lastName: "",
      accountType: "Mentor",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("First name is required."),
    lastName: Yup.string().required("Last name is required."),
    accountType: Yup.string().required("Select an account type."),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(9, "Password must be 9 characers longer")
      .required("password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null])
      .required("Password does not equal.")
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    console.log(values);
    //console.log(props);
    props.mutate({
      variables: {
        firstName: values.firstName,
        lastName: values.lastName,
        accountType: values.accountType,
        email: values.email,
        password: values.password
      }
    });
    //do the mutation here
  }
})(App);

export default graphql(mutation)(FormikApp);
