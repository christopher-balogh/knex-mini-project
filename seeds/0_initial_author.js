/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // await knex('authors').del()
  await knex('authors').insert([
    {id: 1, name: 'James'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Jack'},
    {id: 4, name: 'Jill'},
    {id: 5, name: 'Joe'},
    {id: 6, name: 'Jacob'},
    {id: 7, name: 'Josh'},
    {id: 8, name: 'Juan'},
    {id: 9, name: 'Julio'},
    {id: 10, name: 'Jennifer'},
  ]);
};
