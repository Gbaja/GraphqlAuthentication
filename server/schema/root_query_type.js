const graphql = require("graphql");

const OrganisationType = require("./organisation_type");

const { GraphQLObjectType, GraphQLString } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    organisation: {
      type: OrganisationType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        fetch(` http://localhost:3000/organisations/${args.id}`)
          .then(res => res.json())
          .catch(err => {
            console.log("error: ", err);
          });
      }
    }
  }
});

module.exports = RootQuery;
