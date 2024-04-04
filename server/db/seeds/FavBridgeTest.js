export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('FavouriteBridgesJunction').del()
  await knex('FavouriteBridgesJunction').insert([
    {
      bridgeid: 1,
      trollid: 'test',
    },
    {
      bridgeid: 2,
      trollid: 'test',
    },
  ])
}
