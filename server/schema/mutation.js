const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = graphql;
const RegistrationType = require("./types/registration_type");
const models = require("../model");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    register: {
      type: RegistrationType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        accountType: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return models.Registration.create(args);
      }
    }
  }
});

module.exports = mutation;
