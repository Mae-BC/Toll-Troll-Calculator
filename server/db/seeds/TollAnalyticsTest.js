export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('TollAnalytics').del()
  await knex('TollAnalytics').insert([
    {
      id: 1,
      bridgeid: '1',
      timestamp: '3/04/2024',
      revenue: '0.2',
      troll_id: '1',
    },
    {
      id: 2,
      bridgeid: '2',
      timestamp: '3/04/2024',
      revenue: '0.3',
      troll_id: '2',
    },
  ])
}
