const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')
const entries = require('./entries')

const app = express()

app.use(express.static('public'))
app.use(cors())

app.get('/', (req, res) => {
    const help = `
  <pre>
    Welcome to the API!

    Use an Authorization header to work with your own data:

    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})

    The following endpoints are available:

    GET /entries
    POST /entries { date, systolicBP, smoke, overwt }
  </pre>
  `

    res.send(help)
})

app.use((req, res, next) => {
    const token = req.get('Authorization')

    if (token) {
        req.token = token
        next()
    } else {
        res.status(403).send({
            error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
        })
    }
})

app.get('/entries', (req, res) => {
    res.send(entries.get(req.token))
})

app.post('/entries', bodyParser.json(), (req, res) => {
    const {date, systolicBP, smoke, overwt} = req.body

    if (date && systolicBP && smoke && overwt) {
        res.send(entries.add(req.token, req.body))
    } else {
        res.status(403).send({
            error: 'Please provide enough info'
        })
    }
})

app.listen(config.port, () => {
    console.log('Server listening on port %s, Ctrl+C to stop', config.port)
})
