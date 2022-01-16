const db = require("./db.js");
const seedFakeData = require("./seedFakeData");
const Client = require("./models/Client")
const Trip = require("./models/Trip")
const Destination = require('./models/Destination');

Client.hasMany(Trip);
Trip.belongsTo(Client);
Trip.belongsTo(Destination);

const seedDB = async () => {
  await db.sync({ force: true });
  await seedFakeData();
};

module.exports = {
  seedDB,
  db,
  Client,
  Trip,
  Destination,
};
