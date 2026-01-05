const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(
        process.env.DB_LOCAL_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000 // optional, avoids hanging
        }
    ).then(con => {
        console.log(`MongoDB is connected to the host: ${con.connection.host}`);
    }).catch(err => {
        console.error('MongoDB connection error:', err);
    });
}

module.exports = connectDatabase;
