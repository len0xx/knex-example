export const seed = function(knex) {
  // Deletes ALL existing entries
  return knex('slots').del()
    .then(function () {
      // Inserts seed entries
      return knex('slots').insert([
        {
		name: 'testing',
		level: '12'
        }
      ])
    })
}
