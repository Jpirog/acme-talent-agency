const express = require('express');
const app = express();
module.exports = app;
const path = require('path');
const morgan = require('morgan');

// logging middleware
app.use(morgan('dev'));
// body parsing middleware
app.use(express.json())

app.use('/api', require('./api'))

app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '../public/index.html')));
