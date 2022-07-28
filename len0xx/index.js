import express from 'express'
import db from './db.js'

const app = express()

app.get('/', (req, res) => {
	res.status(200).json({
		ok: true
	})
})

app.get('/new', async (req, res) => {
	const id = await db.insert({ id: 1, name: 'LeN0xx' }).into('posts').returning('id');
	console.log('New created: ' + id.toString())
	res.redirect('/list')
})

app.get('/list', async (req, res) => {
	const posts = await db.select('*').from('posts').where({ id: 1 })
	res.status(200).json(posts)
})

app.listen(3000, () => console.log('Server is running'))

