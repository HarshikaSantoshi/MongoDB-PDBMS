const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
let db;

const connectionString = 'mongodb://localhost:27017/pdbms';

MongoClient.connect(
  connectionString,
  function (err, client) {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      return;
    }


    db = client.db();
    app.listen(5000, () => {
      console.log('Node.js App running on port 5000...');
    });
  }
);

const PORT = 5000;

app.get('/testRoute', (req, res) => res.end('Hello from Server!'));

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}...`);
});
