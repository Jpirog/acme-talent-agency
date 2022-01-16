//const faker = require('faker');
const Client = require('./models/Client');
const Trip = require('./models/Trip');
const Destination = require('./models/Destination');
//const db = require('./db');

const seedFakeData = async () => {

  console.log('===> Seeding database...')
  const clients = ['larry', 'curly', 'moe', 'lucy'];
  await Promise.all(clients.map(client => Client.create({ name: client })));
  console.log('===> Seeding clients...complete');

  const destinations = ['Amsterdam', 'London', 'Paris', 'Prague', 'Zurich'];
  await Promise.all(destinations.map(dest => Destination.create({ name: dest })));
  console.log('===> Seeding destinations...complete');

  const trips = [new Date(), new Date()-(24*60*60*1000*5), new Date()-(24*60*60*1000*15)];
  await Promise.all(trips.map(trip => Trip.create({ tripDate: trip })));
  console.log('===> Seeding trips...complete');

  console.log('===> Seeding complete');
  const data = await Client.findAll();
}

module.exports = seedFakeData;
