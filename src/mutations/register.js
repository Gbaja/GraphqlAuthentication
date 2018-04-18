import gql from "graphql-tag";

export default gql`
  mutation signup(
    $firstName: String
    $lastName: String
    $accountType: String
    $email: String
    $password: String
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      accountType: $accountType
      email: $email
      password: $password
    ) {
      id
      firstName
    }
  }
`;
