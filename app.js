const express = require('express');
const morgan = require('morgan');

const app = express();

const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || "development"]);

app.use(morgan("tiny"));
app.use(express.json());


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

app.get('/books/:id', function(req, res) {
  knex
    .select('*')
    .from('books')
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.post('/books', function(req, res) {
  const {title, author_id, subject_id} = req.body;

  knex.insert({ title: title, author_id: author_id, subject_id: subject_id}).from('books')
    .then((data) => res.status(201).json(data))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: "Something is wrong." })
  })
});

app.delete('/books/:id', function(req, res) {
  knex('books').where({ id: req.params.id}).del()
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: "Something is wrong." })
  })
});

app.put('/books/:id', function(req, res) {
  const {title, author_id, subject_id} = req.body;

  knex('books').where({ id: req.params.id}).update({title: title, author_id: author_id, subject_id: subject_id})
  .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: "Something is wrong." })
  })
});

app.patch('/books/:id', function(req, res) {
  const {title, author_id, subject_id} = req.body;

  knex('books').where({ id: req.params.id}).update({title: title, author_id: author_id, subject_id: subject_id})
  .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: "Something is wrong." })
  })
});




app.get('/authors', function(req, res) {
  knex
    .select('*')
    .from('authors')
    .then(data => res.status(200).send(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.get('/authors/:id', function(req, res) {
  knex
    .select('*')
    .from('authors')
    .where({id: req.params.id})
    .then(data => res.status(200).send(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.post('/authors', function(req, res) {
    knex.insert({ name: req.body.name}).from('authors')
      .then((data) => res.status(201).json(data))
      .catch((err) => {
        console.error(err);
        res.status(404).json({ message: "Something is wrong." })
    })
});

app.delete('/authors/:id', function(req, res) {
  knex('authors').where({ id: req.params.id}).del()
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: "Something is wrong." })
  })
});

app.put('/authors/:id', function(req, res) {
  knex('authors').where({ id: req.params.id}).update({name: req.body.name})
  .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: "Something is wrong." })
  })
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

app.get('/subjects/:id', function(req, res) {
  knex
    .select('*')
    .from('subjects')
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.post('/subjects', function(req, res) {
  knex.insert({ name: req.body.subject}).from('subjects')
    .then((data) => res.status(201).json(data))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: "Something is wrong." })
  })
});

app.delete('/subjects/:id', function(req, res) {
knex('subjects').where({ id: req.params.id}).del()
  .then((data) => res.status(200).json(data))
  .catch((err) => {
    console.error(err);
    res.status(404).json({ message: "Something is wrong." })
})
});

app.put('/subjects/:id', function(req, res) {
knex('subjects').where({ id: req.params.id}).update({name: req.body.subject})
.then((data) => res.status(200).json(data))
  .catch((err) => {
    console.error(err);
    res.status(404).json({ message: "Something is wrong." })
})
});

module.exports = app;