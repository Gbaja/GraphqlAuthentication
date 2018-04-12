const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = graphql;
const OrganisationType = require("./organisation_type");
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
      resolve(parentValue, args, req) {
        return models.Organisation.create(args);
      }
    }
  }
});

module.exports = mutation;
