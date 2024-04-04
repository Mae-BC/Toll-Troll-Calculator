export async function seed(knex) {
  await knex('Trolls').insert([
    {
      auth0Id: '1598372905',
      activeBridge: '1',
    },
  ])
}
