const express = require('express');

const projectRoute = require('./jobs/projectRoute');
const resourceRoute = require('./jobs/resourceRoute');

const server = express();

server.use(express.json());
server.use('/project', projectRoute);
server.use('/resource', resourceRoute);

const port = 4000;

server.get('/', (req, res) => {
  res.send(`<h2>Testing API on port: ${port}</h2>`);
});

module.exports = server;