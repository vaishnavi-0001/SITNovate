const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = () => {
    const uri = "mongodb+srv://salonizade09:DrxYQLI99qBOagfU@cluster0.19hcg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

    if (!uri) {
        console.error("Error: MONGO_URI is not defined in the environment variables.");
        process.exit(1);
    }

    mongoose.connect(uri, {
        dbName: "ZeroAi",
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