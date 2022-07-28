import Sessions from './schemas/SimpleSessions.js'
import Slots from './schemas/Slots.js'

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
	return knex.schema.createTable('slots', Slots)
		.createTable('sessions', Sessions)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
	return knex.schema.dropTableIfExists('sessions')
		.dropTableIfExists('slots')
};
