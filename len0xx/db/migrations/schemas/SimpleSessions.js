export default (table) => {
	table.increments('id').primary().unique()
	table.boolean('demo').defaultTo(false).notNullable()
	table.string('playerId').notNullable()
	table.integer('slotId').notNullable()
	table.foreign('slotId').references('id').inTable('slots')
}
