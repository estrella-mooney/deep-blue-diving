/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('dives').del()
  await knex('dives').insert([
    {
      id: 1,
      title: 'Poor Knights Islands',
      description: '',
      max_depth: 10,
      duration: 120,
      max_group: 3,
      time: 0,
    },
    {
      id: 2,
      title: 'Ferry Wharfs in Thorndon',
      description: '',
      max_depth: 6,
      duration: 180,
      max_group: 2,
      time: 0,
    },
    {
      id: 3,
      title: 'Fiji Islands',
      description: '',
      max_depth: 7,
      duration: 60,
      max_group: 3,
      time: 0,
    },
    {
      id: 4,
      title: 'Auckland Islands',
      description: '',
      max_depth: 5,
      duration: 120,
      max_group: 6,
      time: 0,
    },
    {
      id: 5,
      title: 'Great Barrier Island',
      description: '',
      max_depth: 15,
      duration: 480,
      max_group: 5,
      time: 0,
    },
  ])
}
