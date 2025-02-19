const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = () => {
    const uri = "mongodb+srv://salonizade09:NRK3iivP0JVWDrac@cluster0.z1vgq.mongodb.net/StreamArena"

    if (!uri) {
        console.error("Error: MONGO_URI is not defined in the environment variables.");
        process.exit(1);
    }

    mongoose.connect(uri, {
        dbName: "StreamArena",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to Database");
    })
    .catch((err) => {
        console.error(`Database connection error: ${err.message}`);
        process.exit(1); 
    });
};

module.exports = { dbConnection };