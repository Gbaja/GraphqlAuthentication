const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = graphql;

const RegistrationType = new GraphQLObjectType({
  name: "Registration",
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    accountType: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
});

module.exports = RegistrationType;
