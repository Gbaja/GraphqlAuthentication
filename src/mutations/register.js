import gql from "graphql-tag";

export default gql`
  mutation registeration(
    $firstName: String
    $lastName: String
    $accountType: String
    $email: String
    $password: String
  ) {
    register(
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
