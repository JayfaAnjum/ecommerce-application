const serverless = require('serverless-http');
const app = require('./app');

// Simple handler without DB
const handler = (req, res) => {
  return app(req, res);
};

module.exports = serverless(handler);
