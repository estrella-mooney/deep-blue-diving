/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('dives', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.text('description')
    table.integer('max_depth')
    table.integer('duration')
    table.integer('max_group')
    table.timestamp('time')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('dives')
}
