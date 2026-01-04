const serverless = require('serverless-http');
const app = require('./app');
const connectDatabase = require('./config/database');

let isDbConnected = false;

// Handler function for Vercel
const handler = async (req, res) => {
  try {
    // Connect to DB only once
    if (!isDbConnected) {
      await connectDatabase();
      isDbConnected = true;
      console.log('Database connected');
    }

    // Pass the request to Express app
    return app(req, res);
  } catch (err) {
    console.error('Error in handler:', err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = serverless(handler);
