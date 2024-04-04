/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('Trolls').del()
  await knex('Trolls').insert([
    { id: 1, auth0: 'test1', activebridge: undefined },
    { id: 2, auth0: 'test2', activebridge: 3 },
    { id: 3, auth0: 'test3', activebridge: 2 },
  ])
}
