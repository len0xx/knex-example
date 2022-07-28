import express from 'express'
import db from './db.js'

const app = express()

db.raw('SELECT 1').then(() => console.log('DB is initialized')).catch(err => console.error(err))

app.get('/', (req, res) => {
	res.status(200).json({
		ok: true
	})
})

app.get('/new', async (req, res) => {
	const name = req.query.name || 'LeN0xx'
	const level = req.query.level || '1'
	const result = await db.insert({ name }).into('slots').returning('id');
	console.log('Created a new entry successfully')
	console.log(result)
	res.status(201).send('New entry was created')
})

app.get('/session/:id', async (req, res) => {
	const id = req.params.id || 1
	const sessions = await db.select('*').from('sessions').where({ id })
	res.status(200).json(sessions)
})

app.get('/slots/:id', async (req, res) => {
	const id = req.params.id || 1
	const slots = await db.select('*').from('slots').where({ id })
	res.status(200).json(slots)
})

app.listen(3000, () => console.log('Server is running on port 3000'))

