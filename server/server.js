const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv');
const { connect } = require('mongoose');
const connectDB = require('./config/db');

//dotenv conig
dotenv.config();

//mongodb connection
connectDB()

//rest object
const app = express()

//middlewares
app.use(express.json())
app.use(morgan('dev')) 

//routes
app.get( '/api/v1/user', require ('./routes/userRoutes')) ;

//port
const port = process.env.PORT || 8000
//listen port 
app.listen(port, () => {
    console.log(`Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${port}`);
});
