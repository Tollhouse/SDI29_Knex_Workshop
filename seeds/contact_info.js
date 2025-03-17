/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('contact_info').insert([
    {name_id: 1, number: '123'},
    {name_id: 2, number: '123'},
    {name_id: 3, number: '123'}
  ]);
};
