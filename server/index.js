const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const expressGraphQL = require("express-graphql");
const bodyParser = require("body-parser");
const path = require("path");

const schema = require("./schema/schema");

const app = express();
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
}

app.get("/", (req, res) => {
  res.send("server running");
});

module.exports = app;
