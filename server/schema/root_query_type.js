const graphql = require("graphql");
const Registrationtype = require("./types/registration_type");
const models = require("../model");

const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    checkAccountExist: {
      type: Registrationtype,
      args: { email: { type: GraphQLString } },
      resolve(parentValue, { email }) {
        return models.Registration.findOne({ where: { email } });
      }
    },
    allAccounts: {
      type: new GraphQLList(Registrationtype),
      resolve(parentValue, args) {
        return models.Registration.findAll();
      }
    },
    currentUser: {
      type: Registrationtype,
      resolve(parentValue, args, req) {
        console.log("HEYYYYYYYYY!!!!!");
        return req.currentUser;
      }
    }
  }
});

module.exports = RootQuery;
