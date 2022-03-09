/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function(knex) {
  await knex('subjects').del()
  await knex('subjects').insert([
    {subject: 'Comedy'},
    {subject: 'Drama'},
    {subject: 'Romance'},
    {subject: 'SciFi'},
    {subject: 'Fantasy'},
    {subject: 'Anime'},
    {subject: 'Classic'},
    {subject: 'Horror'},
    {subject: 'Mystery'},
    {subject: 'Thriller'},
  ]);
};
