const app = require('./app');
const connectDatabase = require('./config/database');

if (process.env.NODE_ENV !== "production") {
    connectDatabase();

    const server = app.listen(process.env.PORT || 5000, () => {
        console.log("Local server running");
    });

    process.on('unhandledRejection', (err) => {
        console.log(`Error: ${err.message}`);
        server.close(() => process.exit(1));
    });

    process.on('uncaughtException', (err) => {
        console.log(`Error: ${err.message}`);
        server.close(() => process.exit(1));
    });
}
