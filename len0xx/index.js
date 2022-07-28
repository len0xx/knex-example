import express from 'express'
import db from './db.js'

const app = express()

app.get('/', (req, res) => {
	res.status(200).json({
		ok: true
	})
})

app.get('/new', async (req, res) => {
	const name = req.query.name || 'LeN0xx'
	const session = await db.insert({ name }).into('sessions').returning('id');
	console.log('Created a new entry successfully')
	res.status(201).send('New entry was created: ' + session.id)
})

app.get('/session/:id', async (req, res) => {
	const id = req.params.id || 1
	const sessions = await db.select('*').from('sessions').where({ id })
	res.status(200).json(sessions)
})

app.listen(3000, () => console.log('Server is running on port 3000'))

