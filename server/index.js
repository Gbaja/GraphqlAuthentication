const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const expressGraphQL = require("express-graphql");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const passport = require("passport");

const schema = require("./schema/schema");

const app = express();
app.use(helmet());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
  })
);

app.use(passport.initialize());
app.use(passport.session());

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
