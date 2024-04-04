export async function up(knex) {
  return await knex.schema.createTable('Trolls', (table) => {
    table.increments('id')
    table.string('auth0')
    table.integer('activebridge')
  })
}

export async function down(knex) {
  return await knex.schema.dropTable('Trolls')
}