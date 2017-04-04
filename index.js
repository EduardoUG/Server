const express = require('express'),
			bodyParser = require('body-parser'),
			app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/login', (req,res) => {
	let body = req.body
	res.status(200).send({datos: body})
})

app.post('/register', (req,res) => {
	let body = req.body
	res.status(200).send({ message: 'You are registered'})
})

app.listen(3000, () => {
	console.log('Server running on port 3000')
})
