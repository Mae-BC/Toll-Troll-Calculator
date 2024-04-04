export async function up(knex) {
  await knex.schema.createTable('trolls', (table) => {
    table.increments('id').primary()
    table.string('auth0Id')
    table.string('active_bridge_id')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('trolls')
}
