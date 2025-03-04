// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance;
    };

    const client = new MongoClient(url);      

    // Task 1: Connect to MongoDB
    await client.connect(); // Connect to the MongoDB server

    // Task 2: Connect to database giftDB and store in variable dbInstance
    dbInstance = client.db(dbName); // Access the database named "giftdb"

    // Task 3: Return database instance
    return dbInstance; // Return the database instance
}

module.exports = connectToDatabase;
