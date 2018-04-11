const graphql = require("graphql");
const axios = require("axios");
const OrganisationType = require("./organisation_type");
const models = require("../model");

const { GraphQLObjectType, GraphQLString } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    organisation: {
      type: OrganisationType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, { id }) {
        return models.Organisation.findOne({ where: { id } });
      }
    }
  }
});

module.exports = RootQuery;
