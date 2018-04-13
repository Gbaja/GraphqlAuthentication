const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = graphql;
const OrganisationType = require("./types/organisation_type");
const models = require("../model");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: OrganisationType,
      args: {
        organisation_name: { type: GraphQLString },
        organisation_type: { type: GraphQLString },
        registered_number: { type: GraphQLString },
        telephone_number: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        verified: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return models.Organisation.create(args);
      }
    }
  }
});

module.exports = mutation;
