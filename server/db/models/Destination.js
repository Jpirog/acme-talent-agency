const db = require('../db')
const Sequelize = require("sequelize");
const { STRING, INTEGER, UUID, UUIDV4 } = Sequelize.DataTypes;

const Destination = db.define('destination', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: STRING(20)
    },
});

module.exports = Destination;