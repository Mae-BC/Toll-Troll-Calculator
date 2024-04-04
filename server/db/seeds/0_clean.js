export async function seed(knex) {
  await knex('bridges').del()
  // auto increment ids doesn't reset when you delete the table.
  // you have to delete the sqlite_sequence row as well
  // https://stackoverflow.com/questions/1601697/sqlite-reset-primary-key-field
  await knex('sqlite_sequence').del()
}
