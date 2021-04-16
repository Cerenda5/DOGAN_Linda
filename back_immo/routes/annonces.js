const {getAll, getByID, createAnnonce, updateAnnonceByID, deleteAnnonceByID} = require('../controllers/annonce')

const createRoutes = (app) => {
    app.get('/', getAll)
    app.post('/', createAnnonce)
    app.get('/detail/:id', getByID)
    app.put('/update/:id', updateAnnonceByID)
    app.delete('/delete/:id', deleteAnnonceByID)
}

module.exports = createRoutes