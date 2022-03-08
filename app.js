const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || "development"]);

// app.use(express.json());
app.use(morgan("tiny"));


app.get('/books', function(req, res) {
  knex
    .select('*')
    .from('books')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.get('/authors', function(req, res) {
  knex
    .select('*')
    .from('authors')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.get('/subjects', function(req, res) {
  knex
    .select('*')
    .from('subjects')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});