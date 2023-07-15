// Importing our DB libraries
const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

// Importing out .env file as Environment Variables
require('dotenv').config();

// Importing our Schemas
const User = require('./models/user');
const Item = require('./models/item');

// Using the MONGO_CONNECT string from our .env to connect to our DB, and closing on failure.
mongoose.connect(process.env.MONGO_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true}).catch(err => {
    console.log("[Database] [ERR] | " + err);
    process.exit();
});

// Defining the DB as `db` after it's connected.
const db = mongoose.connection;

