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
        console.log("LOG IN RESOLVER REQ: ", req);
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
    },
    logout: {
      type: RegistrationType,
      resolve(parentValue, args, req) {
        console.log("before destructuring in logout: ", req.session);
        const { user } = req;
        console.log("before req.logout: ", req.session);
        req.logout();
        console.log("after req.logout: ", req.session);
        return user;
      }
    }
  }
});

module.exports = mutation;
