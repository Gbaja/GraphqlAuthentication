import gql from "graphql-tag";

export default gql`
  mutation logIn($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      firstName
      email
    }
  }
`;
