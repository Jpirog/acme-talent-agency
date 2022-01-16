const db = require('../db')
const Sequelize = require("sequelize");
const { DATEONLY, INTEGER, UUID, UUIDV4 } = Sequelize.DataTypes;

const Trip = db.define('trip', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    tripDate: {
        type: DATEONLY
    },
})

module.exports = Trip;