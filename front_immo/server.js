const express = require('express')
const fetch = require('node-fetch')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    fetch('http://localhost:3000/', {
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json()
        })
        .then(json => {
            res.render('index', {annonces: json})
        })
        .catch(err => {
            throw err
        })
})

const getAnnonce = id => {
    return fetch(`http://localhost:3000/detail/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(annonce => {
            return annonce
        })
        .catch(err => {
            throw err
        })
}

app.get('/detail/:id', async (req, res) => {
  const annonce = await getAnnonce(req.params.id)
  res.render('detail', {annonce: annonce})
})

app.get('/update/:id', async (req, res) => {
    const annonce = await getAnnonce(req.params.id)
    res.render('update', { annonce: annonce })
})

app.get('/create', (req, res) => {
  res.render('create')
})

app.listen(5000, () => {
    console.log('Front Immo working on port 5000')
})