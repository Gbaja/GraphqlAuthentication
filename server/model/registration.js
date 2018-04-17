//LOOK INTO DATATYPE VISUAL FOR PASSWORD
const hashPassword = require("../utils/hash_password");

const Registration = (sequelize, DataTypes) => {
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
  Registration.beforeCreate((user, options) => {
    return hashPassword(user.password).then(hashedPw => {
      user.password = hashedPw;
    });
  });
  return Registration;
};

module.exports = Registration;
