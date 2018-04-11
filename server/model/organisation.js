module.exports = (sequelize, DataTypes) => {
  const Organisation = sequelize.define(
    "Organisation",
    {
      organisation_name: DataTypes.STRING,
      organisation_type: DataTypes.STRING,
      registered_number: DataTypes.STRING,
      telephone_number: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      verified: DataTypes.STRING
    },
    { timestamps: false }
  );
  return Organisation;
};
