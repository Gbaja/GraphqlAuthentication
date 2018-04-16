const graphql = require("graphql");
const Registrationtype = require("./types/registration_type");
const models = require("../model");

const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    account: {
      type: Registrationtype,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, { id }) {
        return models.Registration.findOne({ where: { id } });
      }
    },
    allAccounts: {
      type: new GraphQLList(Registrationtype),
      resolve(parentValue, args) {
        return models.Registration.findAll();
      }
    }
  }
});

module.exports = RootQuery;
