// const mongoose = require('mongoose');

// const connectDatabase = () => {
//     mongoose.connect(
//         "mongodb+srv://saroth:saroth@cluster0.qvckxm3.mongodb.net/newproject?retryWrites=true&w=majority",
//         {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             serverSelectionTimeoutMS: 5000 // optional, avoids hanging
//         }
//     ).then(con => {
//         console.log(`MongoDB is connected to the host: ${con.connection.host}`);
//     }).catch(err => {
//         console.error('MongoDB connection error:', err);
//     });
// }

// module.exports = connectDatabase;

const mongoose = require("mongoose");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(
        "mongodb+srv://saroth:saroth@cluster0.qvckxm3.mongodb.net/newproject?retryWrites=true&w=majority",
        {
          bufferCommands: false,          // IMPORTANT
          serverSelectionTimeoutMS: 5000,
        }
      )
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  console.log("MongoDB connected");
  return cached.conn;
};

module.exports = connectDatabase;
