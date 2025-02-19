
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./Routers/userRouter');
const { dbConnection } = require('./database/dbConnection');  



const app = express();
const PORT = process.env.PORT || 3000;

// Establishing MongoDB connection
dbConnection();


app.use(bodyParser.json());
app.use(cors());
app.use('/', userRouter);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
