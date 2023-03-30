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
      description:
        'The best diving spot in New Zealand. Here you can find the scuttled vessel of the Rainbow Warrior and lots of Blue Moki',
      max_depth: 10,
      duration: 120,
      max_group: 3,
      time: 0,
    },
    {
      id: 2,
      title: 'Ferry Wharfs in Thorndon',
      description:
        'Dirty rubbish and other detritus bobble in the water with mutant fish',
      max_depth: 6,
      duration: 180,
      max_group: 2,
      time: 0,
    },
    {
      id: 3,
      title: 'Fiji Islands',
      description:
        'Sunny Island in the South Pacific where you can find all the tropic fish that you may desire. Beautiful white sands and coconut trees abound',
      max_depth: 7,
      duration: 60,
      max_group: 3,
      time: 0,
    },
    {
      id: 4,
      title: 'Auckland Islands',
      description:
        'Lots of Snapper deep in Antarctic Water. A lonely outpost in the middle of no where',
      max_depth: 5,
      duration: 120,
      max_group: 6,
      time: 0,
    },
    {
      id: 5,
      title: 'Great Barrier Island',
      description:
        'Beautiful subtropical fish with massive schools of Kingfish and Red Cod everywhere',
      max_depth: 15,
      duration: 480,
      max_group: 5,
      time: 0,
    },
  ])
}
