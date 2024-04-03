export async function up(knex) {
  return await knex.schema.createTable('FavouriteBridgesJunction', (table) => {
    table.integer('bridgeid')
    table.integer('trollid')
  })
}

export async function down(knex) {
  return await knex.schema.dropTable('FavouriteBridgesJunction')
}
