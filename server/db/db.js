const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://postgres:FSA123@localhost/acme_travel",
  {
    logging: false,
  }
);


module.exports = db;
