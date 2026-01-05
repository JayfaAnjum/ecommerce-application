const app = require('./app');
const connectDatabase = require('./config/database');

connectDatabase();

const PORT = process.env.PORT || 5000;  // Use Railway port
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT} in ${process.env.NODE_ENV || 'development'}`);
});

// Optional error handling
process.on('unhandledRejection', (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    server.close(() => process.exit(1));
});
process.on('uncaughtException', (err) => {
    console.error(`Uncaught Exception: ${err.message}`);
    server.close(() => process.exit(1));
});
