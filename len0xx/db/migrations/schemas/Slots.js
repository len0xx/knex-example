export default (table) => {
	table.increments('id').primary().unique()
	table.string('level').defaultTo('1').notNullable()
	table.string('name').notNullable()
}
