require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRouter = require('./Routers/userRouter');
// const chatRouters = require('./Routers/chatRouter');
const { dbConnection } = require('./database/dbConnection');  // Importing the dbConnection function



const app = express();
const PORT = process.env.PORT || 3000;

// Establishing MongoDB connection
dbConnection();  // Connect to MongoDB



app.use(bodyParser.json());
app.use(cors());
app.use('/auth', userRouter);
// app.use('/chat', chatRouters);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});