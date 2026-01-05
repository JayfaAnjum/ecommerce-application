const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(
        "mongodb+srv://dua:dua@cluster0.n4zfpkd.mongodb.net/?appName=Cluster0",
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
