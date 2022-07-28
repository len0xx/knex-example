import knex from 'knex'

export default (table) => {
	table.increments('id').primary().unique()
	table.string('name').notNullable()
}
