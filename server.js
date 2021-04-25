const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const dotenv = require('dotenv').config() //

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api')

const MONGODB_URI = process.env.DATABASE_URL;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose successfully connected!!!')
});

//Daata parsing; transfer all requests into json or url encoded (to be avaiaable in request.body)
app.use(express.json());
app.use(express.urlencoded({extended: false})); //extended: true for looking in highly nested data

// //Saving data to mongoCluster
// const data = {
//     title: "Test Post 1",
//     body: "Test post 1 body"
// };

// const newProjectPost = new ProjectPost(data); //instance of model

// newProjectPost.save((error) => {
//     if (error) {
//         console.log('Error custom message');
//     } else {
//         console.log('Data has been saved!!');
//     }
// });
// .save()


//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);



app.listen(PORT, console.log(`Server is starting at ${PORT}`));