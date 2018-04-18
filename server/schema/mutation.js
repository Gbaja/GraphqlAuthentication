const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = graphql;
const RegistrationType = require("./types/registration_type");
const models = require("../model");
const AuthService = require("../utils/auth");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    login: {
      type: RegistrationType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req });
      }
    },
    signup: {
      type: RegistrationType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        accountType: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(
        parentValue,
        { firstName, lastName, accountType, email, password },
        req
      ) {
        return AuthService.signup({
          firstName,
          lastName,
          accountType,
          email,
          password,
          req
        });
      }
    }
  }
});

module.exports = mutation;
