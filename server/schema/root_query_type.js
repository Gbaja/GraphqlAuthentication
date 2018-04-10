const graphql = require("graphql");
const axios = require("axios");
const OrganisationType = require("./organisation_type");

const { GraphQLObjectType, GraphQLString } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    organisation: {
      type: OrganisationType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/organisations/${args.id}`)
          .then(res => res.data)
          .catch(err => {
            console.log("error: ", err);
          });
      }
    }
  }
});

module.exports = RootQuery;
