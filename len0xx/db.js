import knex from 'knex'
import configuration from './knexfile.js'

export default knex(configuration.development)
