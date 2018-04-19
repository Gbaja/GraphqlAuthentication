const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const models = require("../model");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  models.Registration.findById(id, (err, user) => {
    done(user.err, user.get());
  });
});

const isValidPassword = function(userpass, password) {
  return bcrypt.compareSync(password, userpass);
};
passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    return models.Registration.findOne({ where: { email } }).then(user => {
      if (!user) {
        return done(null, false, "Invalid Credentials");
      } else if (!isValidPassword(user.password, password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      } else {
        return done(null, user);
      }
    });
  })
);

const signup = ({ firstName, lastName, accountType, email, password, req }) => {
  if (!firstName || !lastName || !accountType || !email || !password) {
    throw new Error("You must provide all the details required.");
  }
  return models.Registration.findOne({ where: { email: email.toLowerCase() } })
    .then(existingUser => {
      if (existingUser) {
        throw new Error(
          "This email address has already been used to create an account with Young&giving, please try logging in."
        );
      }
      return models.Registration.create({
        firstName,
        lastName,
        accountType,
        email,
        password
      });
    })
    .then(user => {
      return new Promise((resolve, reject) => {
        req.logIn(user, err => {
          if (err) {
            reject(err);
          }
          resolve(user);
        });
      });
    });
};

const login = ({ email, password, req }) => {
  return new Promise((resolve, reject) => {
    passport.authenticate("local", (err, user) => {
      if (!user) {
        reject(
          "Please make sure you enter a valid email and password registered with young&living."
        );
      } else {
        req.login(user, () => resolve(user));
      }
    })({ body: { email, password } });
  });
};

module.exports = { signup, login };
