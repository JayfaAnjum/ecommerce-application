const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(
        "mongodb+srv://saroth:saroth@cluster0.qvckxm3.mongodb.net/newproject?retryWrites=true&w=majority",
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
