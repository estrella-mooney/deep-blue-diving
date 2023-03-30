/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('divers').del()
  await knex('divers').insert([
    { id: 1, name: 'Jacques Cousteau', age: 87, qualification: 'French PADI' },
    { id: 2, name: 'James Cameron', age: 48, qualification: 'PADI' },
    { id: 3, name: 'Sylvia Earle', age: 34, qualification: 'PADI' },
    { id: 4, name: 'Sam Middleton', age: 90, qualification: 'PADI' },
    { id: 5, name: 'Zale Parry', age: 20, qualification: 'PADI' },
    { id: 6, name: 'Aqua Man', age: 30, qualification: 'Born with Gills' },
  ])
}
