const app = require("express")();
const helmet = require("helmet");
const cors = require("cors");
const expressGraphQL = require("express-graphql");
const bodyParser = require("body-parser");
const schema = require("./schema/schema");

app.use(helmet());
app.use(cors());
app.use(
  "/graphql",
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.get("/", (req, res) => {
  res.send("server running");
});

module.exports = app;
