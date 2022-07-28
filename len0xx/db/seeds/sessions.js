export const seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sessions').del()
    .then(function () {
      // Inserts seed entries
      return knex('sessions').insert([
	      {
		      playerId: 'prokhor',
		      demo: true,
		      slotId: 1
	      }
      ])
    })
}
