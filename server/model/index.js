const Sequelize = require("sequelize");

const sequelize = new Sequelize("bridgemap", "postgres", "postgres", {
  dialect: "postgres"
});

const models = {
  organisation: sequelize.import("./organisation")
};

Object.keys(models).forEach(modelName => {
  if ("associate" in models[modelName]) {
    db[modelName].associate(db);
  }
});

models.sequelize = sequelize;
models.Sequelize = sequelize;

module.exports = models;
