import gql from "graphql-tag";

export default gql`
  query checkAccount($email: String) {
    checkAccountExist(email: $email) {
      email
    }
  }
`;
