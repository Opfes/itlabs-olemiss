//This file is what brings all the pieces together for the database connection
//When the server runs, this is what outputs to tell you if it's hitting the DB or not

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
try {
    //This is a promise, it basically waits to resolve until the data comes back on the connection
    await mongoose.connect(
    db,
    {
        useNewUrlParser: true
    }
    );

    console.log('MongoDB is Connected...');
} catch (err) {
    //catch errors if the database fails
    console.error(err.message);
    process.exit(1);
    }
};

module.exports = connectDB;

//I'm watching the social network while I'm commenting this, if you haven't watched it you should
//I think I like it as much as Jobs, the one with Ashton Kutcher