const Annonce = require('../models/annonce')

const getAll = (request, response, next) => {
    Annonce.find()
        .then(annonces => response.send(annonces))
        .catch(next)
}

const getByID = (request, response, next) => {
    Annonce.findById(request.params.id)
        .then(annonce => {
            response.send(annonce)
        })
        .catch(next)
}

const createAnnonce = (request, response, next) => {
    Annonce.create(request.body)
        .then(annonce => {
            response.send(annonce)
        })
        .catch(next)
}

const updateAnnonceByID = async (req, res) => {
    const update = await Annonce.updateOne({_id: req.params.id}, req.body)
    if (update.ok) {
        const annonce = await Annonce.findById(req.params.id)
        res.send(annonce)
        return
    }
    res.send('error')
}

const deleteAnnonceByID = (req, res, next) => {
    Annonce.findByIdAndDelete(req.params.id)
        .then(() => {
            res.send('deleted')
        })
        .catch(next)
}

module.exports = {
    getAll,
    getByID,
    createAnnonce,
    updateAnnonceByID,
    deleteAnnonceByID,
}