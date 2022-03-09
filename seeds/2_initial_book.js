/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function(knex) {
  await knex('books').del()
  await knex('books').insert([
    {title: 'The Dad Code', author_id: 1, subject_id: 1},
    {title: 'Code Infinity', author_id: 2, subject_id: 2},
    {title: 'The First Code', author_id: 3, subject_id: 3},
    {title: 'The Code Strikes Back', author_id: 4, subject_id: 4},
    {title: 'Lord of the Code', author_id: 5, subject_id: 5},
    {title: 'Code Ninja', author_id: 6, subject_id: 6},
    {title: 'The Code and the Hen', author_id: 7, subject_id: 7},
    {title: 'Code After Dark', author_id: 8, subject_id: 8},
    {title: 'Does You Even Code', author_id: 9, subject_id: 9},
    {title: 'Code Wars', author_id: 10, subject_id: 10},
  ]);
};
