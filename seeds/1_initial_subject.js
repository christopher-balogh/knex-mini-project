/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function(knex) {
  await knex('subjects').del()
  await knex('subjects').insert([
    {id: 1, subject: 'Comedy'},
    {id: 2, subject: 'Drama'},
    {id: 3, subject: 'Romance'},
    {id: 4, subject: 'SciFi'},
    {id: 5, subject: 'Fantasy'},
    {id: 6, subject: 'Anime'},
    {id: 7, subject: 'Classic'},
    {id: 8, subject: 'Horror'},
    {id: 9, subject: 'Mystery'},
    {id: 10, subject: 'Thriller'},
  ]);
};
