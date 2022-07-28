export default {
	development: {
		client: 'pg',
		connection: {
			host: 'localhost',
			user: 'postgres',
			password: 'secret',
			database: 'test'
		},
		migrations: { directory: './db/migrations' },
		seeds: { directory: './db/seeds' },
		ssl: { rejectUnathorized: false }
	},
	production: {
		client: 'pg',
		connection: {
			host: 'localhost',
			user: 'postgres',
			password: 'secret',
			database: 'test'
		},
		migrations: { directory: './db/migrations' },
		seeds: { directory: './db/seeds' },
		ssl: { rejectUnauthorized: false }
	}
}
