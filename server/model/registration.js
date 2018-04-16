//LOOK INTO DATATYPE VISUAL FOR PASSWORD
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define("Registration", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    accountType: DataTypes.STRING,
    telephone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3)
    },
    updatedAt: {
      type: DataTypes.DATE(3)
    }
  });
  return Registration;
};
