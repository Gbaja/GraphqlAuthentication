const graphql = require("graphql");
const OrganisationType = require("./organisation_type");
const models = require("../model");

const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    organisation: {
      type: OrganisationType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, { id }) {
        return models.Organisation.findOne({ where: { id } });
      }
    },
    allOrganisation: {
      type: new GraphQLList(OrganisationType),
      resolve(parentValue, args) {
        return models.Organisation.findAll();
      }
    }
  }
});

module.exports = RootQuery;
