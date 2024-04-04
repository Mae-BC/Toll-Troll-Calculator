export async function seed(knex) {
  await knex('trolls').insert([
    {
      auth0Id: '1598372905',
      active_bridge_id: '1',
    },
  ])
}
