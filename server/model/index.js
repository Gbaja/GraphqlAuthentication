const Sequelize = require("sequelize");

const sequelize = new Sequelize("bridgemap", "postgres", "postgres", {
  dialect: "postgres",
  define: {
    underscored: false
  }
});

const models = {
  Organisation: sequelize.import("./organisation")
};

Object.keys(models).forEach(modelName => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = sequelize;

module.exports = models;
