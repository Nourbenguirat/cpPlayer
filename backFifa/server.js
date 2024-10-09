const cors = require('cors');
require('dotenv').config();

const express = require('express');
const connectDb = require('./config/connectDb');
const CardRoute = require('./routes/CardRoutes');

const app = express();
const port = process.env.port;

app.use(express.json());
connectDb();
app.use(cors());

app.use('/Cards', CardRoute);

app.listen(port, () => {
    console.log(`The application is correctly running on port ${port}`);
});
