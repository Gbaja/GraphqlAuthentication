const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = graphql;

const OrganisationType = new GraphQLObjectType({
  name: "Organisation",
  fields: () => ({
    id: { type: GraphQLString },
    organisation_name: { type: GraphQLString },
    organisation_type: { type: GraphQLString },
    registered_number: { type: GraphQLString },
    telephone_number: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    verified: { type: GraphQLString }
  })
});

module.exports = OrganisationType;
