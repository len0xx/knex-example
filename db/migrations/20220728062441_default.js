import sessions from './schemas/Sessions.js'

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
	return knex.schema.createTable('sessions', sessions)  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
	return knex.dropTableIfExists('sessions')
};
