const graphql = require("graphql");
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
    },
    allOrganisation: {
      type: OrganisationType,
      resolve(parentValue, args) {
        console.log("ehyyyy");
        //return models.Organisation.all({ raw: true });
        models.Organisation.findAll({ raw: true }).then(data => {
          console.log(data);
          return data;
        });
      }
    }
  }
});

module.exports = RootQuery;
