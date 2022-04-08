const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/user_routes');


const app = express(); 
dotenv.config({
  path: path.join(__dirname, '../.env')
});

//middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/user', userRoute); //user routes

//routes
app.get('/', (req, res) => {
  res.json({"status": "Success", "message": "App is running"});
});




module.exports = app;

