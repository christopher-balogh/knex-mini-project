/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
  return knex.schema.createTable("books", (table) => {
    table.increments("id"); // adds an auto incrementing PK column
    table.string("title").notNullable();
    table.integer("author_id").references("id").inTable("authors");
    table.integer("subject_id").references("id").inTable("subjects");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("authors");
};