const api = require('express').Router();
//const app = express();
var db = require('../../db/models');
var Campuses = db.Campuses;
var Students = db.Students;
const Sequelize = require('sequelize');
module.exports = api;

//api/campuses
api.get('/', function(req,res, next){
	Campuses.findAll()
	.then( campuses => res.json(campuses))
	.catch(next);
})

api.get('/:id', function(req,res, next){
    const campusId = req.params.id;
	Campuses.findById(campusId)
    .then(function (campus) {
        if (!campus){
            res.status(404).send("This campus doesnt exist!")
        } else {
            res.json(campus)
        }
    })
	.catch(next);
})

api.post('/', function(req,res,next){
    if (!req.body.name) { 
        res.status(404).send("No Campus name included.")
    }
    Campuses.create(req.body)
    .then( newCampus => res.status(201).json(newCampus))
})

api.put('/:campusId', function(req, res, next){
    const campusId = req.params.campusId;
    Campuses.findById(campusId)
    .then(function(campus) {
        if (!campus){
            res.status(404).send("No update can me made because this campus does not exist")
        } 
        return campus.update(req.body)
    })
    .then (updatedCampus => res.json(updatedCampus))
    .catch(next);
});

api.delete('/:campusId', function(req,res,next){
    const campusId = req.params.campusId;
    Campuses.destroy( { where: {id: campusId}})
    .then(function(campus) {
        if(!campus) {
            res.status(404).json('Campus does not exist to begin with.')
        } else{
            //campus.removeStudents
            res.status(204).json('Campus sucessfully deleted')
        }
    })
    .catch(next);
})


