export async function up(knex) {
  return await knex.schema.createTable('TollAnalytics', (table) => {
    table.increments('id')
    table.integer('bridgeid')
    table.datetime('timestamp')
    table.decimal('revenue')
    table.integer('troll_id')
  })
}

export async function down(knex) {
  return await knex.schema.dropTable('TollAnalytics')
}
