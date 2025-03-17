/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('name_table').insert([
    {id: 1, name: 'id'},
    {id: 2, name: 'name'},
    {id: 3, name: 'ypu'}
  ]);
};
