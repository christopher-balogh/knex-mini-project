/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // await knex('authors').del()
  await knex('authors').insert([
    {name: 'James'},
    {name: 'John'},
    {name: 'Jack'},
    {name: 'Jill'},
    {name: 'Joe'},
    {name: 'Jacob'},
    {name: 'Josh'},
    {name: 'Juan'},
    {name: 'Julio'},
    {name: 'Jennifer'},
  ]);
};
