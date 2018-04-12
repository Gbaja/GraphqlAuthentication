const Sequelize = require("sequelize");

let sequelize = null;
if (process.env.USERS_DB_URL) {
  const match = process.env.DATABASE_URL.match(
    /postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/
  );
  sequelize = new Sequelize(match[5], match[1], match[2], {
    dialect: "postgres",
    protocol: "postgres",
    port: match[4],
    host: match[3],
    logging: false,
    dialectOptions: {
      ssl: true
    }
  });
} else {
  sequelize = new Sequelize("bridgemap", "postgres", "postgres", {
    dialect: "postgres",
    define: {
      underscored: false
    }
  });
}
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
