const knex = require("./dbConnection");

function getBooks() {
  return knex.select("*").from("books");
}

module.exports = { getBooks };